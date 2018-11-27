from django.urls import path
from discourse.views.group import get_groups, get_group, add_group, update_group, delete_group

urlpatterns = [

    path('get_groups/', get_groups, name='get_groups'),
    path('get_group/', get_group, name='get_group'),
    path('add_group/', add_group, name='add_group'),
    path('update_group/', update_group, name='update_group'),
    path('delete_group/', delete_group, name='delete_group')
]