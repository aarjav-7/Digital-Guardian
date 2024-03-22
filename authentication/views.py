from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
from .models import Profile


# Create your views here.
def home(request):
    return render(request, 'authentication/frontend/index.html')


def signup(request):
    if request.method == "POST":
        username = request.POST.get('username', '')
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        password1 = request.POST.get('pw1', '')
        password2 = request.POST.get('pw2', '')

        if password1 == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request, "Email taken")
                return redirect("signup")
            elif User.objects.filter(username=username).exists():
                messages.info(request, "Username taken")
                return redirect("signup")
            else:
                user = User.objects.create_user(username=username, email=email, password=password1)
                user.save()

                user_model = User.objects.get(username=username)
                new_profile = Profile.objects.create(user=user_model, id_user=user_model.id)
                new_profile.save()
                return redirect("signin ")
        else:
            messages.info(request, "password not matching")
            return redirect("signup")

    else:
        return render(request, 'authentication/signup.html')


def signin(request):
    if request.method == 'POST':
        username = request.POST.get('firstName')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            fname = user.first_name
            return render(request, "authentication/index.html", {'fname': fname})

        else:
            messages.error(request, "Bad Credentials")
            return redirect("home")

    return render(request, 'authentication/signin.html')


def signout(request):
    return render(request, 'authentication/signout.html')


def team(request):
    return render(request, 'authentication/team.html')