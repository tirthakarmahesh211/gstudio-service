from django.urls import include, path
from discourse.views.message import get_messages, create_message, get_private_messages, get_some_notifications, enable_private_messages, update_message \
,delete_message

urlpatterns = [

    path('get_messages/', get_messages, name="get_messages"),
    path('create_message/', create_message, name="create_message"),
    path('get_private_messages/', get_private_messages, name="get_private_messages"),
    path('get_some_notifications/', get_some_notifications, name="get_some_notifications"),
    path('enable_private_messages/', enable_private_messages, name="enable_private_messages"),
    path('update_message/', update_message, name="update_message"),
    path('delete_message/', delete_message, name="delete_message"),
]