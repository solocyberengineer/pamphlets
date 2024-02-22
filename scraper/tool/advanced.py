from . import asyncio
from . import launch
from . import bs

class scraper(object):
    def __init__(self, scraper_module):
        self.scraper_module = scraper_module
        # self.session = HTMLSession()
        
        asyncio.get_event_loop().run_until_complete( self.__setup_browser() )
        
    async def __setup_browser(self):
        browser = await launch({'headless': False, 'autoClose': False})
        # page = await browser.newPage()
        context = await browser.createIncognitoBrowserContext()
        page = await context.newPage()
        
        # await page.setCookie(*[{"v": "123"}])
        
        await page.goto(self.scraper_module.base_url, {'waitUntil' : 'domcontentloaded'})
        # cookies = await page.cookies()
        # print( cookies )
        # cookies.append( self.scraper_module.cookies )
        # print( self.scraper_module.cookies )
        # print( cookies )
        
        
        # exit()
        # print( cookies )
        # await page.setCookie( self.scraper_module.cookies )
        # print( len(cookies) )
        # await page.goto('https://google.com', {'waitUntil' : 'domcontentloaded'})
        # content = await page.evaluate('document.body.textContent', force_expr=True)
        # print(content)
        await page.waitFor(7000)
        await page.evaluate('''document.querySelector('[data-cnstrc-search-input]').value = "jungle"; document.querySelector('[data-cnstrc-search-submit-btn]').click(); setTimeout(function(){document.querySelector('[primary]').click()}, 1000); setTimeout(function(){window.location.reload()}, 5000)''')
        # document.querySelector('[data-cnstrc-search-input]')
        # document.querySelector('[data-cnstrc-search-submit-btn]')
        # await page.waitFor(elem
        await page.screenshot({'path': 'example.png'})
        # await browser.close()
        
    def getCategories(self):
        resp = self.session.get( self.scraper_module.base_url )
        resp.html.render(sleep=10)
        
        file = open('data.html', 'w')
        data = resp.text
        file.write(data)
        file.close()