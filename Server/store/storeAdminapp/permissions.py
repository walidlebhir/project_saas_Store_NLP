from rest_framework.permissions import BasePermission


class IsStoreAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == request.user.Role.STORE_ADMIN


class IsClient(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == request.user.Role.CLIENT