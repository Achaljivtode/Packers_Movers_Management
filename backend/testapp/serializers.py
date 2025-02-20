from rest_framework import serializers
from django.contrib.auth import get_user_model
User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id','username','email','register_as','password','DOB','mobile','Nationality','Address','country','state','city']

class RegisterSerializer(serializers.ModelSerializer):
    
    password_confirm=serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields=['id','username','email','register_as','password','password_confirm','DOB','mobile','Nationality','Address','country','state','city']

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError({"password":"password does not match."})
        return data


    def create(self, validated_data):
        validated_data.pop('password_confirm')
        user=User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            register_as=validated_data['register_as'],
            password=validated_data['password'],
            DOB=validated_data['DOB'],
            mobile=validated_data['mobile'],
            Nationality=validated_data['Nationality'],
            Address=validated_data['Address'],
            country=validated_data['country'],
            state=validated_data['state'],
            city=validated_data['city'],
        )
        return user