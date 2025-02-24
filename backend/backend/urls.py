"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path
from testapp.views import (
    RegisterView,LoginView,
    AdminDashboardView,
    AgentDashboardView,
    CustomerDashboardView,
    CreateOrderView,
    UpdateOrderView,
    OrderListView,
    ServiceListView,
    ServiceCreateView
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/',RegisterView.as_view(),name='register'),
    path('login/',LoginView.as_view(),name='login'),
    path('admin-dashboard/', AdminDashboardView.as_view(), name='admin-dashboard'),
    path('agent-dashboard/', AgentDashboardView.as_view(), name='agent-dashboard'),
    path('customer-dashboard/', CustomerDashboardView.as_view(), name='customer-dashboard'),
    path('orders/create/', CreateOrderView.as_view(), name='create-order'),
    path('orders/<int:order_id>/update/', UpdateOrderView.as_view(), name='update-order'),
    path('orders/', OrderListView.as_view(), name='list-orders'),
    path('services/', ServiceListView.as_view(), name='service-list'),
    path("services/register/", ServiceCreateView.as_view(), name="service-register"),
    
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)