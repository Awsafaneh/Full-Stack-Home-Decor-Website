from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import ServiceRequestForm, ContactMessageForm

def home_view(request):
    quote_form = ServiceRequestForm()
    contact_form = ContactMessageForm()

    if request.method == "POST":
        if "quote_form" in request.POST:
            quote_form = ServiceRequestForm(request.POST)
            if quote_form.is_valid():
                quote_form.save()
                messages.success(request, "Thank you! Your service request has been received.")
                return redirect("home")

        elif "contact_form" in request.POST:
            contact_form = ContactMessageForm(request.POST)
            if contact_form.is_valid():
                contact_form.save()
                messages.success(request, "Thank you for contacting us. We'll get back to you shortly.")
                return redirect("home")

    return render(request, "core/index.html", {
        "quote_form": quote_form,
        "contact_form": contact_form
    })

