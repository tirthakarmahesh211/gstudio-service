from django.shortcuts import render
from discourse.discourse import Discourse
from django.http import HttpResponse
from gstudio_service.local_settings import DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY

# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)

def upload_file(request):
	FILE_PATH = ""
	return HttpResponse(api.upload_file({'files[]': {"file":open(FILE_PATH,'rb') },"type":"composer" },"files"))
