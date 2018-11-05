from discourse.models.discourse import Discourse
from discourse.models.api import GROUP_GET, GROUPS_GET, GROUP_PUT, GROUP_DELETE, GROUP_ADD, HEADERS, GROUP_OWNERS_ADD, GROUP_USER_ADD, USER_GET1
import requests
from gstudio_service.settings import DISCOURSE_USERNAME

class Group(Discourse):

	global params
	
	params = {
    "group[automatic]": 'true',
    "group[name]": "",
    "group[user_count]": 0,
    "group[alias_level]": 0,
    "group[visible]": 'true',
    "group[automatic_membership_email_domains]": { },
    "group[automatic_membership_retroactive]": 'true',
    "group[primary_group]": 'true',
    "group[title]": {},
    "group[grant_trust_level]": { },
    "group[incoming_email]": { },
    "group[notification_level]": { },
    "group[has_messages]": 'true',
    "group[is_member]": 'true',
    "group[mentionable]": 'true',
    "group[flair_url]": { },
    "group[flair_bg_color]": { },
    "group[flair_color]": { }
    }

	def __init__(self,iterable=(),**kwargs):
		super().__init__()
		self.__dict__.update(params)
		self.__dict__.update(iterable, **kwargs)
		self.api_key = self._apiKey
		self.api_username = self._apiName

	@property
	def name(self):
	    return self._name

	@name.setter
	def name(self, d):
		if not d: raise Exception("name cannot be empty")

	# @property
	# def title(self):
	#     return self._title

	# @title.setter
	# def title(self, d):
	#     if not d: raise Exception("title cannot be empty")

	def __len__(self):
		return len(self.__dict__)

	def dict(self):
		return self.__dict__

	def get_groups(self):
		url=str(self._main_url+GROUPS_GET[1])
		response = requests.get(url,params=self.__dict__,headers=HEADERS)
		if response.status_code == 200:
			return response.json()

	def get_group(self):
		url=str(self._main_url+GROUP_GET[1]).format(name=self.__dict__.get("group[name]"))
		response = requests.get(url,params=self.__dict__,headers=HEADERS)
		if response.status_code == 200:
			return response.json()

	def add_group(self):
		self.name = self.__dict__.get("group[name]")
		url=str(self._main_url+GROUP_ADD[1])
		response = requests.post(url,params=self.__dict__,headers=HEADERS)
		print(response.json())
		if response.status_code == 200:
			json_data = response.json()
			url=str(self._main_url+USER_GET1[1]).format(username=DISCOURSE_USERNAME)
			user_info = requests.get(url,params=self.__dict__,headers=HEADERS)
			url=str(self._main_url+GROUP_USER_ADD[1]).format(id=user_info.json()["user"]["id"])
			print(url)
			self.__dict__.update({"group_id":json_data["basic_group"]["id"]})
			print(self.__dict__)
			requests.post(url,params=self.__dict__,headers=HEADERS)
			return response.json()

	def update_group(self):
		url=str(self.main_url+GROUP_GET[1]).format(name=self.__dict__.get("group[name]"))
		response = requests.get(url,params=params)
		if response.status_code == 200:
			json_data = response.json()
			ID = json_data["group"]["id"]
			url=str(self.main_url+GROUP_PUT[1]).format(id=ID)
			if "new_group_name" in self.__dict__:
				self.__dict__.update({"group[name]":self.__dict__.get("new_group_name")})
			response = requests.put(url,params=self.__dict__ ,headers=HEADERS)
			if response.status_code == 200:
				return response.json()
		return "Failed"


	def delete_group(self):
		url=str(self.main_url+GROUP_GET[1]).format(name=self.__dict__.get("group[name]"))
		response = requests.get(url,params=params)
		if response.status_code == 200:
			json_data = response.json()
			ID = json_data["group"]["id"]
			url=str(self.main_url+GROUP_DELETE[1]).format(id=ID)
			response = requests.delete(url,params=self.__dict__ ,headers=HEADERS)
			if response.status_code == 200:
				return response.json()
		return "Failed"


