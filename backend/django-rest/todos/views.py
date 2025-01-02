from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def ApiOverview(request):
    return JsonResponse("Hi", safe=False)