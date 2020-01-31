# Domestic Violence Survivor tool

### Description
This web app was made to help those with domestic violence struggles so they can find a way to move and become financially stable.
Use the calculator to see how much money you spend from where u are and compare it to where you want to move, to see if this would be a good move.

### Current available endpoints

## register new user
* register as a new user with https://domestic-violence-build-week.herokuapp.com/register

to register |  required
------------|-----------
username    |   yes       
password    |   yes

## login as an authenticated user
* login as a registered user and become authendicated 
https://domestic-violence-build-week.herokuapp.com/login

to login    |  required
------------|-----------
username    |   yes       
password    |   yes

  * once loged in you will be given a token showing that you are logged in and authenticated

## get a list of all users
* view a list of current users and they're id number when logged in as an authenticated user.
https://domestic-violence-build-week.herokuapp.com/users

## functionality currently available

* find all users
* findBy username
* findById with input of the users id number
* add to be able to add users
