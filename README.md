# weight-lifting-backend
This is the backend repository for the Build Week project, Weight-Lifting-Journal

## Initialize the Project
**This guide was written using Insomnia and NodeJs**

Requirements:
[] Insomnia, Postman, or a similar REST client
[] Access to the herokuu link (link: `https://backend-buildweek-wlj-mack.herokuapp.com/` )

1) Install your REST client per your OS's version instructions
2) Create a "New Request", and give it a descriptive name. This is only a placeholder value, what happens will be in the next step
3) In your new request, select which type of request you will make (we will use "GET, POST, PUT, and DELETE" these are analogous to "READ, INSERT, UPDATE, and REMOVE"). For testing purposes, please select "GET".
4) Now that we've selected a request, we need to insert a link to utilize that action. We will either use the heroku link, or we will use our own machine.

If using Herokuu, continue here, otherwise scroll down to local machine:

5) Copy and paste the link from herokuu into the address bar, and click send.
6) Your REST client should return with the following message "Welcome to the server!"

# Users
## Making a new user and logging in

1) At the end of your address link, put the following items `api/auth`, this selects the authorization route that we will need to access in order to register a new user and log in.
2) We can simply log in with the credentials `mack@wlj.to` and `pass`, but let's make a new user first.
3) Select the POST request from the request selector dropdown menu.
4) At the end of your address link, put the following endpoint: `api/auth/register`. Then, click on the "Body" item of your REST client, and select JSON. This allows us to use JSON with our client.
5) Inside the JSON body area, think of credentials. Keep it simple! Write it out like this:
{
    "firstName": "Max",
    "lastName": "Vebber",
    "email": "max@wlj.to",
    "password": "pass"
} 
Items MUST be in quotes, that is how the server knows which item goes where.
6) Send the request, and the server will return with the following data:
{
    "id": (this is a number that is dependant on the amount of users that have been added to the database)
    "email": "your username goes here",
    "password": This is a hash of your password. It is not important.
    "firstName": Your first name of the user
    "lastName": Your last name of the user
}
7) Now that we have added our user to the database, we can now log in. In the address bar, remove `api/auth/register` and replace it with `api/auth/login`. Do not change the JSON body in your client.
8) Click send again, and this will send the data in your JSON body through the authenticator. If your password syncs up to what the system holds, you will be logged in, and greeted with the message: "Welcome "firstName lastName"!" and a "token".
9) In-between the quotes inside of the "token" value, copy that entire string.
10) Click on the headers tab, and add a new header. This header shall be called:
`Authorization`. The value shall be the string retrieved from the token.

## Viewing the list of Users

1) Removing `api/auth/login` from your address bar, with the `Authorization` header now installed, we can now add `api/users/` to the end of our link. By clicking send, we tell the server "Hey, I have this token that you seem to require to access you, here you go", and the server responds with the requested information.
2) If you do not provide the token, the server will respond with an error. Consequentially, if you provide the server with an expired token, the server will respond with an error. Tokens expire every twenty-four hours from creation.
3) You can add a number to the end of `auth/users/` if you wish to select only that user. That endpoint looks like `api/users/:id`, where `:id` is the id of the user you wish to select. 

## Updating the user

1) Using a PUT request (in the same dropdown menu in Insomnia), you would select a user by its id, `api/users/:id`, and you would put the following information in the JSON body:
{
    "email": You can update this,
    "password": You can update this,
    "firstName": You can update this,
    "lastName": You can update this
}
2) Though you may not be updating all of them, they do all need to be part of the PUT request, or the server will return with an error! The password will be the plaintext password that you use to log in, not the hash, but it will return with a hash. 
3) Your updates will be shown in the return preview window in Insomnia

## Deleting the user

1) Using a DELETE request, you would select a user by its id, `api/users