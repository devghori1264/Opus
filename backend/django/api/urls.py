from django.urls import path
from .views import DomainList, ModelList

urlpatterns = [
    path('domains/', DomainList.as_view()),
    path('models/', ModelList.as_view()),
]
