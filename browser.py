# import websockets as ws
from websockets.sync.client import connect
import requests as req
import os
import json

PORT = 4000

# os.popen(f'chrome-win\\chrome.exe --remote-debugging-port={PORT}')

endpoint = [
    'json'
]

url = f'http://localhost:{PORT}/'
resp = req.get(f'{url}{endpoint[0]}')
browser_data = resp.json()

webSocketUrl = browser_data[0]['webSocketDebuggerUrl']

print(webSocketUrl)

# print(browser_data)

cmd = {"cmd": "Page.captureScreenshot"}

def hello():
    with connect(webSocketUrl) as websocket:
        websocket.send( json.dumps(cmd) )
        message = websocket.recv()
        print(f"Received: {message}")

hello()