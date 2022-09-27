import requests
import time




# Oauth token for Microsoft calls - obtained trough postman
CRMheaders = {"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2xjYi5jcm00LmR5bmFtaWNzLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzBhMzM1ODliLTAwMzYtNGZlOC1hODI5LTNlZDA5MjZhZjg4Ni8iLCJpYXQiOjE2NTIwOTg3ODQsIm5iZiI6MTY1MjA5ODc4NCwiZXhwIjoxNjUyMTg1NDg0LCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOFRBQUFBekpoc3YwUHRSekw5VTFjZHp5SHVJS2JlQXhhUEQ0a2JmdTUxYVBDTkNUbGhvV2FPYmJHeGtRVFB5L050aWtYZ1QvVWVxNmJNb21zVjFLc0IxSm9qUlpCT2tIdkJtbHpqUStOSndHcWdUN1E9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBpZCI6IjUxZjgxNDg5LTEyZWUtNGE5ZS1hYWFlLWEyNTkxZjQ1OTg3ZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQXRhaSIsImdpdmVuX25hbWUiOiJLaGVpYmFyIiwiaXBhZGRyIjoiMTQ1LjEwMS4xNTQuMTgzIiwibmFtZSI6IkF0YWksIEtoZWliYXIiLCJvaWQiOiI5ZDkwYTZmYS1mMzc4LTQxYWQtOGVlYi03NGI4MGRkZGM3NjgiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTg5OTczNDIxLTEzODQzNDk0NzgtODQ2OTQ4OTQ1LTEyNzc1NyIsInB1aWQiOiIxMDAzMjAwMTdCNjlFMDI3IiwicmgiOiIwLkFYTUFtMWd6Q2pZQTZFLW9LVDdRa21yNGhnY0FBQUFBQUFBQXdBQUFBQUFBQUFCekFLay4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiI0VHk3ZDlIcXhNZzJwQWV5aGhydHF0ckczblJ4T3FzaldtR2tXdDNHdjdFIiwidGlkIjoiMGEzMzU4OWItMDAzNi00ZmU4LWE4MjktM2VkMDkyNmFmODg2IiwidW5pcXVlX25hbWUiOiJhdGFpLmtAYnVhcy5ubCIsInVwbiI6ImF0YWkua0BidWFzLm5sIiwidXRpIjoic0kzcWxNRDhkazItTm5YdXhKWkJBQSIsInZlciI6IjEuMCJ9.HHvwHOZHFu2Lu_cUs4TxZLMiVufBrojfxBfLaIIlPqanTtesuAYu9TTJfLw1fLoJJoo2N8lKzvIGzKDV2oklLsnTorpeQwGva6i8H8rd8vQIj-gFfEgPppd8r44Q4I1WsMWQD2On7mvmnfdRQCOFNlZB_tuBmswu4hT0ypDcfIJEuj6RmcxrbHWPUiR4PFiT9cuxEcRwvYfq4U9Pzk4l7Reh3enYBQsv1M_xBKAD03BaZ3qmtGuu8z56JK3DzDWMbNBjMXztutf56ikobM7Aiv3kpOuBQrmFczdDgX6sBfUFpzum2rFwwzUtOWxiZokvENH-rIiXK36CNj9mEimVPw"}

# urls to initialize DB - documenten entity has own function due to size limitations of call
urls = [
    {'name':'themas', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/bhs_themas?$expand=bhs_bhs_thema_bhs_nieuws($select=bhs_nieuwsid),bhs_thema_account_partners($select=accountid),bhs_bhs_thema_bhs_project_Thema($select=bhs_projectid),bhs_thema_contact_specialisten($select=contactid),bhs_bhs_thema_msevtmgt_event($select=msevtmgt_eventid),lcb_Documenten_bhs_thema_bhs_thema'},

    {'name':'projecten', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/bhs_projects?$expand=lcb_Documenten_bhs_project_bhs_project($select=lcb_documentenid,lcb_openbaar),bhs_project_account_partners,lcb_testimonial_Project_bhs_project($select=lcb_testimonialid)'},

    {'name':'nieuws', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/bhs_nieuwses?$expand=lcb_bhs_nieuws_bhs_nieuws_msdyncrm_file($select=msdyncrm_fileid),bhs_bhs_thema_bhs_nieuws($select=bhs_themaid),bhs_bhs_project_bhs_nieuws($select=bhs_projectid),bhs_bhs_nieuws_adx_webrole($select=adx_name,adx_webroleid)'},

    {'name':'agenda', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/msevtmgt_events?$expand=msdyncrm_msevtmgt_event_msdyncrm_formpage($select=msdyncrm_confirmationmessage,msdyncrm_javascriptcode,msdyncrm_errormessage),msevtmgt_building($select=msevtmgt_addressline1,msevtmgt_country,msevtmgt_city,msevtmgt_name,msevtmgt_stateprovince,msevtmgt_website,msevtmgt_addresscomposite)'},

    {'name':'contactpersonen', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/contacts?$expand=lcb_Profielafbeelding($select=msdyncrm_blobcdnuri),bhs_Bedrijf($select=websiteurl,accountid,_lcb_bedrijfslogo_value,name),bhs_contact_bhs_thema_final($select=bhs_name),adx_webrole_contact($select=adx_name,adx_webroleid)&$select=contactid,firstname,middlename,lastname,emailaddress1,jobtitle,department,crmrd_linkedinid,statuscode,bhs_typelid,bhs_profieltype,crmrd_contacttype'},

    {'name':'afbeeldingen', 'url':'https://lcb.api.crm4.dynamics.com/api/data/v9.2/msdyncrm_files'},

]


# Funtion to make API get call to Dynamics CRM
## Param(url) = url to call
def retrieve_data_from_crm(url):

    r = requests.get(url, headers=CRMheaders)
    result = r.json()
    #result = result['value']
    time.sleep(3) # Sleep for 3 seconds
    return result


# Function to make API post call to server
## Param(name) = entity name
## Param(data) = object containing record
def send_data_to_server(name, data):

    url = 'http://localhost:3000/api/'+ name
    payload = data
    headers = {}

    response = requests.request("POST", url, headers=headers, json=payload)
    #print(response.text)

    time.sleep(1) # Sleep for 3 seconds
    #return response.text


for url in urls:
    print('Working on : ' + url['name'])
    dataArray = retrieve_data_from_crm(url['url'])
    #pprint.pprint(dataArray)
    print('Sending data to server')
    for data in dataArray['value']:
        send_data_to_server(url['name'], data)

# Add preference to header
CRMheaders['prefer'] = "odata.include-annotations=OData.Community.Display.V1.FormattedValue"

#Empty arrays
ID = []
DOCUMENTEN = {"value":[]}

# Get document ID's
url = 'https://lcb.api.crm4.dynamics.com/api/data/v9.2/lcb_documentens?$select=lcb_documentenid'
r = requests.get(url, headers=CRMheaders)
result = r.json()
values = result['value']
for value in values:
    ID.append(value['lcb_documentenid'])

time.sleep(5)

# Loop trough IDs and get documents
for id in ID:
    url = 'https://lcb.api.crm4.dynamics.com/api/data/v9.2/lcb_documentens(' + id +')?$expand=lcb_documenten_Annotations($select=annotationid,filename,filesize,mimetype,documentbody),lcb_DocumentAfbeelding($select=msdyncrm_blobcdnuri),lcb_Documenten_bhs_project_bhs_project($select=bhs_name),lcb_Documenten_bhs_thema_bhs_thema($select=bhs_name)'
    r = requests.get(url, headers=CRMheaders)
    res = r.json()
    DOCUMENTEN['value'].append(res)
    time.sleep(2)



print('Working on : documenten')

for data in DOCUMENTEN['value']:
    print('Sending data to server')
    send_data_to_server('documenten', data)

