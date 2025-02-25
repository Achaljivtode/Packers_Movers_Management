from django.shortcuts import render,get_object_or_404
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import get_user_model
from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import status,generics
from django.contrib.auth import authenticate
from .serializers import UserSerializer,RegisterSerializer,OrderSerializer,ServiceSerializer,FeedbackSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from .permissions import IsAdminUser, IsAgentUser, IsCustomerUser
from rest_framework.generics import GenericAPIView,ListAPIView,RetrieveAPIView

from testapp.models import Order,Service,CustomUser,Feedback
# Create your views here.
User=get_user_model()

class RegisterView(APIView):
    
    def get(self, request):
        return Response({"register_as_choices": RegisterSerializer.REGISTER_AS_CHOICES}, status=200)
    
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            print(request.data)
            user=serializer.save()
            
            return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self,request):
        email = request.data.get('email')
        password = request.data.get('password')

        user=authenticate(request,username=email,password=password)

        if user is None:
            return Response({"error":"Invalid email or password"})
        
        # try:
        #     user=authenticate(request,username=email,password=password)
           
        #     if user is None:
        #         return Response({"error":"Invalid Credentials"},status=status.HTTP_400_BAD_REQUEST)  
        # except User.DoesNotExist:
        #     return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        

       
        refresh = RefreshToken.for_user(user)
        return Response({
            "message":"Login Succesfull !",
            "token":str(refresh.access_token),
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "register_as": user.register_as  # Identify role
                }
            },status=status.HTTP_200_OK)
       


class AdminDashboardView(GenericAPIView):
    permission_classes=[IsAuthenticated,IsAdminUser]

    def get(self,request):
        return Response({"message":"Welcome ,Admin ! you can manage everything."},status=200)
    
class AgentDashboardView(GenericAPIView):
    permission_classes=[IsAuthenticated,IsAgentUser]

    def get(self,request):
        return Response({"message":"welcome, Agent ! You can accept orders and update status"},status=200)
    
class CustomerDashboardView(GenericAPIView):
    permission_classes=[IsAuthenticated,IsCustomerUser]

    def get(self,request):
        return Response({"message":"welcome, customer! you can request services and track your orders"},status=200)
    

class OrderListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = OrderSerializer

    def get_queryset(self):
        user=self.request.user
        if user.register_as == "customer":
            return Order.objects.filter(customer=user).order_by('-id')
        elif user.register_as == "agent":
            return Order.objects.filter(status="Pending").order_by('-id')
        return Order.objects.all().order_by('-id')


# create an order (customer create  order)
class CreateOrderView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request,*args,**kwargs):
        # data=request.data.copy()
        # data['customer']=request.user.id
        # serializer=OrderSerializer(data=data)
        # request.data["customer"]=request.user.id
        serializer=OrderSerializer(data=request.data,context={"request":request})
        if serializer.is_valid():
            # serializer.save()
            
            order=serializer.save()
            return Response({"message":"order  Placed Successfully!","order":serializer.data},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
# order status updated by Agent(Agent Only)(add a field status)
class UpdateOrderView(APIView):
    permission_classes=[IsAuthenticated,IsAgentUser]

    

    def post(self,request,order_id):
        order=get_object_or_404(Order,id=order_id)

        # if request.user.register_as != "agent":
        #     return Response({"error":"only agent can update the order status"})
        
        status_updated = request.data.get("status")
        if status_updated not in ["Accepted","Rejected","Completed"]:
            return Response({"error":"Invalid status update"},status=status.HTTP_400_BAD_REQUEST)
        
        order.status = status_updated
        order.agent=request.user
        order.save()
        return Response({"message":f"order {status_updated} Succefully"},status=status.HTTP_200_OK)
    

class ServiceCreateView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can register services
    parser_classes = (MultiPartParser, FormParser)  # Handles file uploads

    def post(self, request, *args, **kwargs):
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Service Registered Successfully!", "service": serializer.data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ServiceDetailView(RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    lookup_field = "id"


class AgentListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class=UserSerializer

    def get_queryset(self):
        return User.objects.filter(register_as="agent")
    

class AgentDetailView(RetrieveAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=UserSerializer
    queryset=CustomUser.objects.filter(register_as="agent")


class FeedbackListCreateAPIView(generics.ListCreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAuthenticated]  # Only logged-in users can submit feedback

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Assign the logged-in user