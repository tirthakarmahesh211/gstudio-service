from django.shortcuts import render
from discourse.discourse import Discourse
from django.http import HttpResponse
from gstudio_service.local_settings import DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY

# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)

def get_messages(request):
	return HttpResponse(api.get_messages({"before":40},"message"))

def get_private_messages(request):
	return HttpResponse(api.get_private_messages({"username":"username"},"message"))

def enable_private_messages(request):
	return HttpResponse(api.enable_private_messages({"enable_private_messages":"true" },"message"))

def create_message(request):
	return HttpResponse(api.create_message({
	"title": "Test messageemmmmm for private_message",
    # "topic_id": 36,
    "raw": "test message",
    # "category": 0,
    "target_usernames": "@TestGroup2",
    # "archetype": "private_message",
    # "created_at": "2017-01-31"
    },"message"))


def get_some_notifications(request):
	return HttpResponse(api.get_some_notifications({},"message"))

def reply_for_messages(request):
	return HttpResponse(api.reply_for_messages({"title":"Reply message","topic_id":18},"message"))