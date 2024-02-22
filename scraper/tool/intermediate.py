from . import HTMLSession
from . import bs

class scraper(object):
    def __init__(self, scraper_module):
        self.scraper_module = scraper_module
        self.session = HTMLSession()
        
    def getCategories(self):
        resp = self.session.get( self.scraper_module.search('nestle') )
        resp.html.render(sleep=10)
        data = resp.html.html.encode()
        
        file = open('nestle.html', 'wb')
        # data = resp.text
        file.write(data)
        file.close()