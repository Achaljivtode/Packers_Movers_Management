from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):

    REGISTER_AS_CHOICES=[        
        ('admin','admin'),
        ('agent','agent'),
        ('customer','customer'),
                        ]
    register_as=models.CharField(max_length=10,choices=REGISTER_AS_CHOICES,default='customer')

    full_name=models.CharField(max_length=150,default="-")

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
        return self.username