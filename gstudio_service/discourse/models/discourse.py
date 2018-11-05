from gstudio_service.settings import DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY

class Discourse(object):
	
	def __init__(self, url=None, apiName=None, apiKey=None):
		self.main_url = DISCOURSE_URL
		self.apiName = DISCOURSE_USERNAME
		self.apiKey = DISCOURSE_API_KEY

	@property
	def main_url(self):
	    return self._main_url

	@main_url.setter
	def main_url(self, d):
		if not d: raise Exception("discourse url cannot be empty")
		self._main_url = d

	@property
	def apiName(self):
	    return self._apiName

	@apiName.setter
	def apiName(self, d):
		if not d: raise Exception("discourse api username cannot be empty")
		self._apiName = d

	@property
	def apiKey(self):
	    return self._apiKey

	@apiKey.setter
	def apiKey(self, d):
		if not d: raise Exception("discourse api key cannot be empty")
		self._apiKey = d