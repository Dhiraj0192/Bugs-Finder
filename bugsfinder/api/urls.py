
from django.urls import path, include
from api.views import UserRegisterView
from api.views import UserLoginView

urlpatterns = [
    
    path('register/',UserRegisterView.as_view(),name='register'),
    path('login/',UserLoginView.as_view(),name='login'),
]
