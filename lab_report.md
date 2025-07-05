### 📘 Introduction:

This project involves the development of a responsive full-stack website for a home decor business named **Elegant Interiors**. The website serves as a digital portfolio that showcases services, collects customer service requests, and handles user inquiries through a contact form.

---

### 🎯 Objectives:

* To build a user-friendly and responsive home decor website.
* To allow users to submit service requests and contact messages.
* To manage form submissions in the Django admin panel.
* To implement backend logic for handling, storing, and displaying form data.
* To ensure the website is aesthetically pleasing and mobile-friendly.

---

### 🛠️ Tools & Technologies Used:

* **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript
* **Backend:** Python 3.10, Django 5.2.3
* **Database:** SQLite (default Django database)
* **Others:** Django Admin, Font Awesome, AOS Library, Git

---

### 🧱 System Architecture:

```
Client (Browser)
    ↓
Frontend (HTML, CSS, Tailwind, JS)
    ↓
Django Views ←→ Forms ←→ Models ←→ SQLite DB
    ↓
Templates Rendered
```

---

### 🌐 Web Pages Overview:

1. **Home Page**: Displays a hero banner, about section, services, testimonials, and contact form.
2. **Quote Form**: Allows users to submit their name and phone number for requesting services.
3. **Contact Form**: Lets users submit a detailed message along with their email and phone number.
4. **Admin Panel**: Allows the admin to view and manage submissions.

---

### 🎨 Design Philosophy:

The website emphasizes a minimalist and elegant aesthetic, reflecting a professional home decor business. Tailwind CSS is used for fast styling and responsiveness, ensuring consistent design across devices.

---

### ✨ Key Features:

* Responsive layout with Tailwind CSS.
* Animated elements using AOS (Animate On Scroll).
* Mobile navigation with a toggleable menu.
* Form submission handling using Django's built-in form system.
* Admin interface to view and manage all user requests.
* Back-to-top button and smooth scroll functionality.

---

### ⚠️ Challenges Faced:

* Handling multiple forms (`ServiceRequestForm`, `ContactMessageForm`) on the same page.
* Using Django template filters like `add_class` and `attr` which required loading `widget_tweaks`.
* Preserving form data and success feedback on redirect.
* Ensuring responsiveness on all screen sizes.

---

### 🧪 Testing and Validation:

* Manual form testing with valid/invalid input.
* Admin dashboard tested for CRUD operations.
* HTML and CSS validated using W3C validators.
* Console tested for JavaScript errors.

---

### 🔐 Security Considerations:

* CSRF protection using `{% csrf_token %}` in all forms.
* Input validation through Django's form system.
* Admin access protected through Django's authentication system.
* Auto-escaping enabled to prevent XSS.

---

### 🚀 Future Scope:

* Add email notifications to admin on new form submissions.
* Store service types and dynamically populate from DB.
* Add user authentication for clients to track their requests.
* Implement a blog or gallery section to showcase past projects.
* Integrate payment gateways for consultations.

---

### 🖨️ Printed Code:

#### models.py

```python
from django.db import models

class ServiceRequest(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"
```

#### forms.py

```python
from django import forms
from .models import ServiceRequest, ContactMessage

class ServiceRequestForm(forms.ModelForm):
    class Meta:
        model = ServiceRequest
        fields = ['name', 'phone']

class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'message']
```

#### views.py

```python
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
                messages.success(request, "Your service request has been submitted.")
                return redirect("home")

        elif "contact_form" in request.POST:
            contact_form = ContactMessageForm(request.POST)
            if contact_form.is_valid():
                contact_form.save()
                messages.success(request, "Thank you for contacting us!")
                return redirect("home")

    return render(request, "core/index.html", {
        "quote_form": quote_form,
        "contact_form": contact_form,
    })
```

#### admin.py

```python
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
```

---
