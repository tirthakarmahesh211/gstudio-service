from django.urls import path
from discourse.views.file import upload_file

urlpatterns = [

    path('upload_file/', upload_file, name='upload_file'),

]