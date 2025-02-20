from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):
    register_as_choice=[        
        ('admin','admin'),
        ('agent','agent'),
        ('customer','customer'),
                        ]
    register_as=models.CharField(max_length=10,choices=register_as_choice,default='customer')

    DOB=models.DateField(null=True, blank=True)

    mobile=models.CharField(
        max_length=15,
        unique=True,
        null=True,
        blank=True,
    )

    Nationality=models.CharField(max_length=100)

    Address=models.CharField(max_length=200)

    country=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)

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