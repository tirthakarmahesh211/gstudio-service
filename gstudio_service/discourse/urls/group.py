from django.urls import path
from discourse.views.group import get_groups, get_group, add_group, update_group, delete_group, add_group_owner, add_group_member, remove_group_member, remove_group_owner,\
 set_mentionable_level, set_messageable_level


urlpatterns = [

    path('get_groups/', get_groups, name='get_groups'),
    path('get_group/', get_group, name='get_group'),
    path('add_group/', add_group, name='add_group'),
    path('update_group/', update_group, name='update_group'),
    path('delete_group/', delete_group, name='delete_group'),
    path('add_group_owner/', add_group_owner, name='add_group_owner'),
    path('remove_group_owner/', remove_group_owner, name='remove_group_owner'),
    path('add_group_member/', add_group_member, name='add_group_member'),
    path('remove_group_member/', remove_group_member, name='remove_group_member'),
    path('set_mentionable_level/', set_mentionable_level, name='set_mentionable_level'),
    path('set_messageable_level/', set_messageable_level, name='set_messageable_level')

]