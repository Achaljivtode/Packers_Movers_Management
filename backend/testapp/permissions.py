from rest_framework.permissions import BasePermission

class IsAdminUser(BasePermission):
    def has_permission(self,request,view):
        return request.user.is_authenticated and request.user.register_as=="admin"
    
class IsAgentUser(BasePermission):
    def has_permission(self,request,view):
        return request.user.is_authenticated and request.user.register_as=="agent"

class IsCustomerUser(BasePermission):
    def has_permission(self,request,view):
        return request.user.is_authenticated and request.user.register_as=="customer"