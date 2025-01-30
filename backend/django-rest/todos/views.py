from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
@api_view(["GET"])
def ApiOverview(request):
    return Response({
        "Create": "/todo-create/",
        "Read": "/todo-read/<str:pk>/",
        "Update": "/todo-update/<str:pk>/",
        "Delete": "/todo-delete/<str:pk>/"
    }, status.HTTP_200_OK)

@api_view(["GET"])
def TodoRead(request, pk):
    if pk == 'all':
        todo = Todo.objects.all()
        serializer = TodoSerializer(todo, many=True)

        return Response(serializer.data, status.HTTP_200_OK)
    else:
        try:
            todo = get_object_or_404(Todo, id=pk)
            serializer = TodoSerializer(todo, many=False)

            return Response(serializer.data, status.HTTP_200_OK)
        except Exception as err:
            return Response({"error": "Todo not found...", "details": str(err)}, status=status.HTTP_404_NOT_FOUND)

@api_view(["POST"])
def TodoCreate(request):
    try: 
        serializer = TodoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status.HTTP_200_OK)
        else:
            return Response(serializer.data, status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        return Response({"error": "Not possible to create todo...", "details": str(err)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(["PATCH"])
def TodoUpdate(request, pk):
    try:
        todo = get_object_or_404(Todo, id=pk)
        serializer = TodoSerializer(instance=todo, data=request.data)
        
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status.HTTP_200_OK)
        else:
            return Response(serializer.data, status.HTTP_400_BAD_REQUEST)
    except Exception as err:
        return Response({"error": "Todo not found...", "details": str(err)}, status=status.HTTP_404_NOT_FOUND)

@api_view(["DELETE"])
def TodoDelete(request, pk):
    todo = get_object_or_404(Todo, id=pk)
    todo.delete()

    return Response({"message": "Todo deleted successfully..."}, status=status.HTTP_204_NO_CONTENT)