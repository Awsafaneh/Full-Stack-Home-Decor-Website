from django.contrib import admin
from .models import ServiceRequest, ContactMessage

@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'created_at')
    search_fields = ('name', 'phone')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')
    search_fields = ('name', 'email', 'phone')
