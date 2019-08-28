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

Items needed for making or updating a new user:
-"firstName" (string)
-"lastName" (string)
-"email" (string)
-"password" (string)

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
    "email" (string): You can update this,
    "password": You can update this,
    "firstName": You can update this,
    "lastName": You can update this
}
2) Though you may not be updating all of them, they do all need to be part of the PUT request, or the server will return with an error! The password will be the plaintext password that you use to log in, not the hash, but it will return with a hash. 
3) Your updates will be shown in the return preview window in Insomnia

## Deleting the user

1) Using a DELETE request, you would select a user by its id, `api/users/:id` where `/:id` is the id of the user you want to delete. 
2) That user is now deleted from the database!

# Exercises

This endpoint allows you to access all of the exercises in the database, accessible by the route `api/exercises` with a simple GET request. You can also run `api/exercises/:id` where `:id` is the id of the exercise you wish to get. This syntax (and everything else) follows the similar syntax for `users`, whether you are updating or deleting items.

Items needed for update or creating a new exercise:
-name (string)
-region (string, in lowercase **please**)

## Getting exercises by body region

1) In Insomnia, make a get request to the endpoint `api/exercises/regions/:region` where region equals the body region you wish to select. The regions currently are: 

-arms
-chest
-legs
-back
-shoulders

You'll notice that all of these body regions are lowercase. Were we to add an exercise to the database, the information added would have to be in lowercase.

# Journals 

This endpoint allows you to access all of the journals in the database, accessable by the route `api/journals/` with a simple get request. 

The items needed to make or update a journal:
-userId (an integer, must be an id matching a user currently in the database)
-name (string)
-date (string)

## Getting all journals by a user's id

This endpoint is a little longer, `api/journals/users/:userId` where `:userId` is a user id already in the database, it will show you which journals belong to that user. Be sure to grab that journal's id for this next part.

## Getting all exercises, per journal, by the user's id

This endpoint may be a bit complicated, but follow this guide and it should make sense: `api/journals/exercises/:userId/:id`, where `:userId` is id of the user in the database, and the id is of the journal belonging to that user. *If the user does not have that journal id in their list of journals, this will not work*. It will list each exercise, including the exercise name, the id of the journal (noted in the response as *journalId, NOT id*). This exercise is made in reference to the cross-table, `journalsExercises`, which is where we add weight, reps and sets. The response data will also include a message which includes the user id, should you need to reference it.

**When you make a new journal, it is blank, there are no exercises added to it, we will have to make use of the next part to add exercises to it**

# Journals and Exercises

The endpoint is now `/api/jouexe/`, where you can get by ID (`/api/jouexe/:id`, where `:id` is the id of the journal-exercise item)

The items you need to make and update a jouexe (journal-exercise) object:
-weight (a string)
-reps (integer)
-sets (integer)
-journalId (integer, this references the journal we want to add this object to)
-exerciseId (integer, this references the exercise we want to pull into this journal)

When we make a new item, we *must* use a journalId AND exerciseId that exist in the database, so the database knows which items to pull and to push into, so we have proper cohesion. Were you to do a simple get request to `/api/jouexe/`, it will bring back the full object along with the exercise name, which is being pulled from the exercise table. 

This is how we add items to the journals. 