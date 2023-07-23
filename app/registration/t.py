import base64

username = "admin"
password = "Passw0rd@khem"

# Combine username and password with a colon (:) separator
credentials = f"{username}:{password}"

# Encode the credentials to Base64
encoded_credentials = base64.b64encode(credentials.encode('utf-8')).decode('utf-8')

print(encoded_credentials)
