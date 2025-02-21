from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth import authenticate
from .serializers import UserSerializer,RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken

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

        # try:
        #     user = User.objects.get(email=email)  # Find user by email
        #     user = authenticate(username=user.username, password=password)  # Authenticate with username
        # except User.DoesNotExist:
        #     user = None
        try:
            user = User.objects.get(email=email)  # Find user by email
            user = authenticate(username=user.username, password=password)  # Authenticate using username
        except User.DoesNotExist:
            return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        

        if user:
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
        return Response({"error":"Invalid Credentials"},status=status.HTTP_400_BAD_REQUEST)

