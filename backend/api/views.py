from django.shortcuts import render
from rest_framework.views import APIView
from .models import Contact, Vacancy
from .serializers import ContactSerializer, VacancySerializer
from rest_framework.response import Response
from rest_framework import status
from .services import send_email



class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class VacancyView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    

    