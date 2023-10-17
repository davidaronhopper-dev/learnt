import requests
import json

#keys
apikey = 'G4YSDBncQ2hjHkF0IiTeWfkRoq10ssE2BImvb4jN'

r = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={apikey}')

print(r)