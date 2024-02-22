from . import req
from . import bs

class scraper(object):
    def __init__(self, scraper_module):
        self.scraper_module = scraper_module
        self.session = req.Session()
        
    def getCategories(self):
        resp = self.session.get( self.scraper_module.base_url )
        
        file = open('data.html', 'wb')
        data = resp.content
        file.write(data)
        file.close()
    
