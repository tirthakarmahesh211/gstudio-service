from django.shortcuts import render
from discourse.discourse import Discourse
from django.http import HttpResponse

params = {}
def upload_file(request):
	if request.POST:
		FILE_PATH = request.POST.get("FILE_PATH")
	else:
		FILE_PATH = ""
	params = {'files[]': {"file":open(FILE_PATH,'rb') },"type":"composer" }
	return HttpResponse(json.dumps(File(**params).upload_file()), content_type="application/json")
