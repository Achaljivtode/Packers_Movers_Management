from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model



# Create your models here.
class CustomUser(AbstractUser):

    REGISTER_AS_CHOICES=[        
        ('admin','admin'),
        ('agent','agent'),
        ('customer','customer'),
                        ]
    register_as=models.CharField(max_length=10,choices=REGISTER_AS_CHOICES,default='customer')

    full_name=models.CharField(max_length=150,default="-")
    email = models.EmailField(unique=True)
    DOB=models.DateField(null=True, blank=True)

    mobile=models.CharField(
        max_length=15,
        unique=True,
        null=True,
        blank=True,
    )

    Nationality=models.CharField(max_length=100,default="-")

    Address=models.CharField(max_length=200,default="-")

    country=models.CharField(max_length=100,default="-")
    state=models.CharField(max_length=100,default="-")
    city=models.CharField(max_length=100,default="-")

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    groups = models.ManyToManyField(
        "auth.Group",
        related_name="customuser_set",
        blank=True
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="customuser_permissions_set",
        blank=True
    )

    def __str__(self):
        return f"{self.username} ({self.register_as})" 

User = get_user_model()



######################Service Table#####################
class Service(models.Model):
    STATUS_CHOICES=[
        ("Active","Active"),
        ("Deactive","Deactive"),
    ]
     
    service_name=models.CharField(max_length=255)
    service_image=models.ImageField(upload_to="images",null=True,blank=True)
    status=models.CharField(max_length=10,choices=STATUS_CHOICES,default="Deactive")
    Description=models.TextField()

    def __str__(self):
        return f"Service {self.id} "


########### Quotation Table#########
class Order(models.Model):
    STATUS_CHOICES=[
        ("Pending","Pending"),
        ("Accepted","Accepted"),
        ("Rejected","Rejected"),
        ("Completed","Completed"),
    ]

    customer=models.ForeignKey(User,on_delete=models.CASCADE,related_name="customer_orders")
   
    agent=models.ForeignKey(User,on_delete=models.SET_NULL,null=True,blank=True,related_name="agent_orders")
    select_service=models.ForeignKey(Service,on_delete=models.SET_NULL,null=True,blank=True,)
    pickup_location=models.CharField(max_length=255)
    drop_location=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    Reference=models.CharField(max_length=255,null=True,blank=True,)
    details_of_service=models.CharField(max_length=255,null=True,blank=True,)
    status=models.CharField(max_length=10,choices=STATUS_CHOICES,default="Pending")
   

    def __str__(self):
        return f"Order {self.id} - {self.status}"


####################### FeedBack Table ########################################

class Feedback(models.Model):
    RATING_CHOICES = [
        ('1-star', '1-star'),
        ('2-star', '2-star'),
        ('3-star', '3-star'),
        ('4-star', '4-star'),
        ('5-star', '5-star'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Link to CustomUser
    select_rating = models.CharField(max_length=80, choices=RATING_CHOICES)
    feedback = models.TextField(default="No feedback provided")
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically store submission time

    def __str__(self):
        return f"Feedback from {self.user.full_name} ({self.user.email})"