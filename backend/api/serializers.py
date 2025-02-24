from rest_framework import serializers
from .models import Contact, Vacancy


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        
        
class VacancySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Vacancy
        fields = '__all__'
        