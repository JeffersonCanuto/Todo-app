from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.ApiOverview, name="api-overview"),
    path('todo-create/', views.TodoCreate, name="todo-create"),
    path('todo-read/<str:pk>/', views.TodoRead, name="todo-read"),
    path('todo-update/<str:pk>/', views.TodoUpdate, name="todo-update"),
    path('todo-delete/<str:pk>/', views.TodoDelete, name="todo-delete")
]