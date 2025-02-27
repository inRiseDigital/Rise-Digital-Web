from rest_framework import serializers
from .models import Contact, Vacancy, Document


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'company_name', 'phone_number', 'subject', 'description', 'email']
        
        
class VacancySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vacancy
        fields = '__all__'
        
        
class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['title', 'document']
        