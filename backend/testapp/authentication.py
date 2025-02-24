from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

User = get_user_model()

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        """Authenticate users using email instead of username."""
        try:
            user = User.objects.get(email=username)  # Look up user by email
            if user.check_password(password):  # Verify password
                return user
        except User.DoesNotExist:
            return None
