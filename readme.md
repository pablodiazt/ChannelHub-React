# This Repository has moved.
Due to architecture changes, this repository has moved to [mrowland-seu/channelhub-vue](https://github.com/mrowland-seu/channelhub-vue). This currently exists only as an archive. 



# ChannelHub

## API Routes & Return Status Codes

### Account Registraion and Logins:

#### /api/accounts/register
POST request, with the following body:
{ username: "username", email: "email", password: "password", passwordVerify: "passwordVerify" }

##### Results:
Status code 200 - Success, empty body
Status code 400 - error: json object with keys for the field that had an error (i.e. passwords don't match, following json body is returned `{ passwordVerify: "The passwords do not match" }`)

#### /api/accounts/login
POST request, with the following body
`{ username: "username", email: "email" }`

##### Results:
Status code 200 - Success. Returns json object with success boolean "true", and "token" object (JWT token for future api requests)
`{ success: true, token: 'some-token-here' }`
Client should store the JWT token, and send as part of the "Authorization" header when making requests to secure endpoints.

Status code 401 - Login Failure due to bad username/password combination.
`{ success: false, error: "error string" }`

#### /api/accounts/verification
GET request, with the following URL string:
`/api/accounts/verification?uid=[userid]&token=[token]`

##### Results:
Status code 200 - success
(should show success screen, and redirect to login)

Status code 400 - Failure
user not found, or token invalid.
Json object returned: `{ error: "token combination is invalid" }`
(should redirect to login screen, and display an error message)
