from rest_framework.decorators import api_view
from rest_framework.response import Response 

from .serializers import TodoSerializer
from .models import Todo

# Create your views here.
@api_view(["GET"])
def ApiOverview(request):
    return Response({
        "Create": "/todo-create/",
        "Read": "/todo-read/<str:pk>",
        "Update": "/todo-update/<str:pk>/",
        "Delete": "/todo-delete/<str:pk>/"
    })

@api_view(["GET"])
def TodoRead(request, pk):
    if pk == 'all':
        todo = Todo.objects.all()
        serializer = TodoSerializer(todo, many=True)
    else:
        todo = Todo.objects.get(id=pk)
        serializer = TodoSerializer(todo, many=False)
    
    return Response(serializer.data)