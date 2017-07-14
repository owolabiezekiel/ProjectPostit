**PostItProject**
PostIt is a simple application that allows friends and colleagues create 
groups for notifications. This way one person can post notifications to
everyone by sending a message once. The application allows people create
accounts, create groups and add registered users to the groups, and then 
send messages out to these groups whenever they want.

**Template:** This contains the user interfaces using HTML and CSS

**Server:** This folder house the backend implementation of the project with NodeJS - Express



**GETTING STARTED**

   Clone this repository using the command git clone https://github.com/owolabiezekiel/ProjectPostit.git



**PEREQUISITES AND INSTALLATIONS**


  *    Knowledge of HTML, CSS and JavaScript

  *    NodeJS installed on your system, you can check out here to download https://nodejs.org/en/download/

  *    PostgreSQL for relational data persistence and Sequelize as the Object relational model.

  *    Installation of Postman for testing the API routes

  *    Run **npm install** to install all dependencies



**END POINT**

 *  **To signup**

       POST: api/users/signup

       Input (username, email, password and phone number).

 *  **To sigin**

       POST: api/users/signin

       Input (username and password)

 * **To create a group**

   POST : api/group

   Input (groupname)

 * **To add Member**

   POST: api/group/user

 * **To post message to a group**

   POST: api/group/groupid/message

   Input (message)

 * **To Retrieve messages from a specified group**

   GET: api/group/groupid/messages
   
   
 **DEPLOYMENT**
 
   This application hasnt been deployed to Heroku yet
   

 **AUTHOR**

   Owolabi Tobiloba
    

 **REFERENCES**

   https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
   https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
   https://stackoverflow.com/questions/22958683/how-to-implement-many-to-many-association-in-sequelize
