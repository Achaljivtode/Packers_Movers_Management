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
        return Response({"message": "GET method is working!"}, status=200)
    
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            return Response(UserSerializer(user).data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username,password=password)

        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                "message":"Login Succesfull !",
                "token":str(refresh.access_token),
                "user":UserSerializer(user).data})
        return Response({"error":"Invalid Credentials"},status=status.HTTP_400_BAD_REQUEST)

