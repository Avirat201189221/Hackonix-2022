from django.contrib import admin
from django.urls import path , include
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.index,name='indexpage'),
    path('register',views.register,name='registerpage'),
    # path('register-success',views.success,name='registersuccess'),
    path('all-sponsors',views.allSponsors,name='allsponsors'),
]