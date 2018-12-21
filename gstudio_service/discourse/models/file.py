from discourse.models.discourse import Discourse
from discourse.models.api import UPLOAD_FILE
import requests

class File(Discourse):

	global params
	
	params = {

    }

	def __init__(self,iterable=(),**kwargs):
		super().__init__()
		self.__dict__.update(params)
		self.__dict__.update(iterable, **kwargs)
		self.api_key = self._apiKey
		self.api_username = self._apiName

    def upload_file(self):
        url=str(self.main_url+UPLOAD_FILE[1])
        response = requests.post(url,files=self.__dict__.get("files[]"),params=self.__dict__ ,headers=HEADERS)
        if response.status_code == 200:
            return response.json()
        return "Failed"        



