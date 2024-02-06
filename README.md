# Roclab Spring 2024 Backend Project

## Run the project

 - Add a JS file "config.js" with two variables:
 - "PORT": Number of the port that you want the project to run (I use port 5555)
 - "mongoDBURL": Your database MongoDB connection string (go to MongoDB Atlas -> your project -> Deployment -> Database -> Connect -> Drivers)
 - Install necessary node modules (express.js, nodemon, mongoose):
  `npm i express nodemon mongoose` 
 - Run the project: 
  `npm run dev` 

## Testing the API
Use Postman to test these simple calls:

GET a single book (GET request): `http://localhost:5555/books/YOUR_ID`

GET all books (GET request):  `http://localhost:5555/books`

POST a single book (POST request): `http://localhost:5555/books/YOUR_ID` - use JSON body with four parameters: "Title, Author, PublishDate, Price"

DELETE a single book (DELETE request): `http://localhost:5555/books/YOUR_ID`

These calls use localhost with port 5555. If you change the port, change "localhost:5555" to your port accordingly.
