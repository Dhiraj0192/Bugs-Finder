from rest_framework import serializers
from api.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields=['email','firstName','lastName','password']
    extra_kwargs={
      'password':{'write_only':True}
    }


    def validate(self,attrs):
      password = attrs.get('password')


    def create(self, validate_data):
      return User.objects.create_user(validate_data)




class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  password = serializers.CharField(max_length=50)
  
  class Meta:
    model = User
    fields = ['email','password']

