from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model, authenticate
from .SerializerAuth import RegisterSerializer , LoginSerialiser 


User = get_user_model() 

# Register --> code base 

@api_view(['POST']) 
def registerFunction(request) : 
    serializeLogic = RegisterSerializer(data =request.data) 
    if serializeLogic.is_valid() : 
        user = serializeLogic.save() 
        refresh = RefreshToken.for_user(user) 
        return Response({
            "message": "Utilisateur créé",
            "user": {"username": user.username, "email": user.email, "role": user.role},
            "tokens": {"refresh": str(refresh), "access": str(refresh.access_token)}
        }, status=status.HTTP_201_CREATED)
    return Response(serializeLogic.errors, status=status.HTTP_400_BAD_REQUEST)




# Login 
@api_view(['POST']) 
def Login(request) : 
    serializer = LoginSerialiser(data=request.data)
    serializer.is_valid(raise_exception=True)

    email = serializer.validated_data['email']
    password = serializer.validated_data['password']

    # Authentification
    user = authenticate(request, email=email, password=password)
    if not user:
        return Response(
            {"error": "Email ou mot de passe incorrect"},
            status=status.HTTP_401_UNAUTHORIZED
        )

    # Création des tokens
    refresh = RefreshToken.for_user(user)
    return Response({
        "message": "Utilisateur authentifié",
        "user": {"username": user.username, "email": user.email, "role": getattr(user, 'role', 'CLIENT')},
        "tokens": {
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        }
    }, status=status.HTTP_200_OK)


# test user is Auth 
@api_view(["POST"]) 
@permission_classes([IsAuthenticated])
def User_isAuh(request) : 
    try : 
        user = request.user 
        user_data = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "role": getattr(user, "role", None)
        }
        return Response({
            "user" : user_data
        } , status=status.HTTP_200_OK)
    except Exception as e : 
        # debug 
        print(f"problemme dans le server {e}") 
        return Response({
            "message" : f"Problemme dans le server {e}" 
        }, status= status.HTTP_500_INTERNAL_SERVER_ERROR) 