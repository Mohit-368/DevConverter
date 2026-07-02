
from django.urls import include, path

from .views import convert_number_view

urlpatterns = [
    path('convert/number/', convert_number_view, name='convert_number'),
    # path('convert/storage/', ),
]


