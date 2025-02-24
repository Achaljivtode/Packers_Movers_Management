from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from testapp.models import CustomUser
# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + ((None, {'fields': ('role',)}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {'fields': ('role',)}),)

admin.site.register(CustomUser,CustomUserAdmin)