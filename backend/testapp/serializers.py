from rest_framework import serializers
from django.contrib.auth import get_user_model
User=get_user_model()

class UserSerializer(serializers.ModelSerializer):
    register_as_display = serializers.CharField(source='get_register_as_display', read_only=True)
    class Meta:
        model=User
        fields=['id','username','email','register_as','register_as_display', 'full_name','password','DOB','mobile','Nationality','Address','country','state','city']

class RegisterSerializer(serializers.ModelSerializer):
    
    password_confirm=serializers.CharField(write_only=True)
    REGISTER_AS_CHOICES = [
        {'value': choice[0], 'label': choice[1]}
        for choice in User.REGISTER_AS_CHOICES
    ]
    register_as_choices = serializers.SerializerMethodField()
    

    class Meta:
        model = User
        fields=['id','username','email','register_as','register_as_choices','password','password_confirm','full_name','DOB','mobile','Nationality','Address','country','state','city']
    
    def get_register_as_choices(self, obj):
        """Return the choice options for register_as"""
        return [
            {'value':choice[0],'label':choice[1]}
            for choice in User.REGISTER_AS_CHOICES
        ]

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
            full_name=validated_data['full_name'],
            DOB=validated_data['DOB'],
            mobile=validated_data['mobile'],
            Nationality=validated_data['Nationality'],
            Address=validated_data['Address'],
            country=validated_data['country'],
            state=validated_data['state'],
            city=validated_data['city'],
        )
        return user