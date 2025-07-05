# 🏡 Full Stack Home Decor Website

A modern, responsive full-stack web application for a Home Decor Agency, built with **Django**, **HTML**, **CSS (Tailwind CSS)**, and **JavaScript**.  
Visitors can learn about services, submit service requests, and send contact messages seamlessly.

---

## 📌 **Project Overview**

This project is a showcase-style website for a fictional company called **Elegant Interiors**.  
It demonstrates a complete full-stack implementation — from frontend design to backend form handling and admin management.

---

## ✨ **Key Features**

- ✅ Fully responsive landing page with **Tailwind CSS**
- ✅ Sticky navbar & smooth scroll
- ✅ Typing effect headline
- ✅ Quote request form (Service Request)
- ✅ Contact form
- ✅ Mobile-friendly hamburger menu
- ✅ Admin panel to manage form submissions
- ✅ Back to Top button
- ✅ Form validation and CSRF protection

---

## 🎯 **Tech Stack**

- **Backend:** Django 5.x (Python)
- **Frontend:** HTML, CSS, Tailwind CSS
- **JavaScript:** Vanilla JS for interactivity
- **Database:** SQLite (default)
- **Tools:** VS Code, Git, GitHub

---

## 🚀 **Getting Started**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/najibulazam/Full-Stack-Home-Decor-Website.git
cd Full-Stack-Home-Decor-Website
````

### 2️⃣ Create & Activate Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Linux/Mac
. venv\Scripts\activate   # On Windows (Powershell)
```

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

> Make sure `Django` and `django-widget-tweaks` are included.

### 4️⃣ Run Migrations

```bash
python manage.py migrate
```

### 5️⃣ Create a Superuser (Optional, for Admin Panel)

```bash
python manage.py createsuperuser
```

### 6️⃣ Start Development Server

```bash
python manage.py runserver
```

Visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

---

## 🗂️ **Project Structure**

```
Full-Stack-Home-Decor-Website/
 ├── core/
 │   ├── migrations/
 │   ├── templates/
 │   │   └── core/
 │   │       └── index.html
 │   ├── static/
 │   │   ├── assets/images/
 │   │   └── assets/js/
 │   ├── models.py
 │   ├── views.py
 │   ├── forms.py
 │   ├── urls.py
 │   └── admin.py
 ├── home_decor_website/
 │   ├── settings.py
 │   ├── urls.py
 │   └── wsgi.py
 ├── manage.py
 ├── requirements.txt
```

---

## 🔒 **Security**

* CSRF protection enabled for all forms
* Django admin for secure management
* Input validation on forms

---

## ⚙️ **Contributing**

Pull requests and suggestions are welcome!

---

## 📧 **Contact**

**Najib Ul Azam**
👉 [GitHub](https://github.com/najibulazam)


**✨ Happy Decorating! ✨**

```

✅ **How to use:**  
1. Save this as `README.md` in your project root.  
2. Adjust any links (like your email or social links) if you want.  
3. Commit & push!

If you’d like, I can also generate a `requirements.txt` example for you — just say **`Yes`!**
```
