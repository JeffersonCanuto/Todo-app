from rest_framework.decorators import api_view
from rest_framework.response import Response 

# Create your views here.
@api_view(["GET"])
def ApiOverview(request):
    return Response({
        "Create": "/todo-create/",
        "Read": "/todo-read/<str:pk>",
        "Update": "/todo-update/<str:pk>/",
        "Delete": "/todo-delete/<str:pk>/"
    })