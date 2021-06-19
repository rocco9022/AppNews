# Auth0 + NestJS Seed 
(http://nestjs.com) web application with Auth0. 

# Install and Running 
In order to run the example you need to have npm and NodeJS installed.

Now, run `npm install` to install the dependencies.

You also need to set the ClientSecret, ClientId and Domain for your [Auth0](https://auth0.com/signup) app as environment variables with the following names respectively: `AUTH0_CLIENT_SECRET`, `AUTH0_CLIENT_ID` , `AUTH0_DOMAIN`, `SECRET_KEY` and `AUTH0_CALLBACK_URL` .

#### For that, if you just create a file named `.env` in the directory and set the values like the following, the app will just work:

###### AUTH0_CLIENT_SECRET=Nsoci1A1AC-MPBmR56nNddfJubwGaTejDUqPtzB6tiSI584IWK3j4HD9DgwnBKRV
###### AUTH0_CLIENT_ID=eYI2psP5y1jpJH4QY6P2UY6FgNBxFNOs
###### AUTH0_DOMAIN=dev-ud6n0quy.us.auth0.com
###### AUTH0_CALLBACK_URL=http://localhost:3000
###### PORT=3001
###### SECRET_KEY=Nsoci1A1AC-MPBmR56nNddfJubwGaTejDUqPtzB6tiSI584IWK3j4HD9DgwnBKRV

Now, run `npm start` for see the project. 
Go to http://localhost:3001 or run the client project in http://localhost:3000 and press the login button.


