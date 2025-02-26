from rest_framework import serializers
from django.contrib.auth import get_user_model
from testapp.models import Order,Service,Feedback

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
        password = validated_data['password'] 
        user=User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            register_as=validated_data['register_as'],
            password=password,  # Pass raw password (it will be hashed)
            full_name=validated_data['full_name'],
            DOB=validated_data['DOB'],
            mobile=validated_data['mobile'],
            Nationality=validated_data['Nationality'],
            Address=validated_data['Address'],
            country=validated_data['country'],
            state=validated_data['state'],
            city=validated_data['city'],
        )
        user.set_password(password)  # Hash password before saving
        user.save()
        return user
    

class OrderSerializer(serializers.ModelSerializer):
    customer_name=serializers.CharField(source="customer.username",read_only=True)
    customer_email=serializers.CharField(source="customer.email",read_only=True)
    customer_mobile=serializers.CharField(source="customer.mobile",read_only=True)
    agent_name=serializers.CharField(source="agent.username",read_only=True)
    select_service= serializers.PrimaryKeyRelatedField(queryset=Service.objects.all(),write_only=True)
    service_name=serializers.CharField(source="select_service.service_name",read_only=True)

    class Meta:
        model=Order
        fields=["id","customer_id","customer_name","customer_email","customer_mobile","agent","agent_name","select_service","service_name","pickup_location","drop_location","created_at","Reference","details_of_service","status",]


    def create(self, validated_data):
        customer= self.context["request"].user  # Get logged-in user as customer
        agent = validated_data.get("agent")  # Optional agent assignment

        order = Order.objects.create(
            customer=customer,
            agent=agent,
            select_service=validated_data["select_service"],
            pickup_location=validated_data["pickup_location"],
            drop_location=validated_data["drop_location"],
            Reference=validated_data["Reference"],
            details_of_service=validated_data["details_of_service"],
            status=validated_data.get("status", "Pending")
        )
        return order
        
class ServiceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Service
        fields = "__all__"

class FeedbackSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    full_name = serializers.CharField(source="user.full_name", read_only=True)  # Auto-fetch full name
    email = serializers.EmailField(source="user.email", read_only=True)  # Auto-fetch email
    mobile = serializers.EmailField(source="user.mobile", read_only=True)  
    Address = serializers.EmailField(source="user.Address", read_only=True)  

    class Meta:
        model = Feedback
        fields = ['id', 'user', 'full_name', 'email','mobile','Address', 'select_rating', 'feedback', 'created_at']
        read_only_fields = ['id', 'user', 'full_name', 'email','mobile','Address' 'created_at']  # These fields cannot be modified

    def create(self, validated_data):
        request = self.context.get('request')  # Get the request context
        validated_data['user'] = request.user  # Assign the logged-in user
        return super().create(validated_data)

