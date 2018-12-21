from django.urls import path
from discourse.views.page import get_page, add_page, update_page, delete_page

urlpatterns = [

    path('get_page/', get_page, name='get_page'),
    path('add_page/', add_page, name='add_page'),
    path('update_page/', update_page, name='update_page'),
    path('delete_page/', delete_page, name='delete_page')
]