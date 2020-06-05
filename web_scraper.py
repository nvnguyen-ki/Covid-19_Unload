import webbrowser, requests

res = requests.get('https://www.nguyensqrd.com/')

print(res.status_code)
print(len(res.text))
print(res.text[:500])