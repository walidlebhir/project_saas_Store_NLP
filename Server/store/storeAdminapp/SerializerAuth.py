from rest_framework import serializers 
from django.contrib.auth import get_user_model , authenticate 


User = get_user_model() 


# Register 
class RegisterSerializer(serializers.ModelSerializer) : 
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User  
        fields = ['fullname' , 'email' , 'password' , 'role'] 

    def create(self, validated_data): 
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            role=validated_data.get('role', User.Role.CLIENT)
        )

        return user 
    

# login 
class LoginSerialiser(serializers.Serializer) : 
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        # authentifie User 
        user = authenticate(email=data['email'], password=data['password'])

        if not user:
            raise serializers.ValidationError("Nom d'utilisateur ou mot de passe invalide")
        data['user'] = user
        return data


