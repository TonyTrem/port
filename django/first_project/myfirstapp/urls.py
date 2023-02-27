from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<str:name>', views.greet, name='greet'),
    path('spot', views.spot, name='spot'),
    path('dominic', views.dominic, name='dominic')
]