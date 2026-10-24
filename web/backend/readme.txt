Php, laravel

php -> html 
home.html
home.php

db -> mysql
schools.sql
 -> tables
    -> rows & cols

Mern stack
M = Mongodb
    -> dbname
        -> collections
            -> documents (json = javascript object notation)
E = Express
    -> Create server
    -> make api
R = React  
    -> ui screen with code reusability
N = Nodejs 
    -> business logic

-- REQUESTS --
GET             = Single or multiple
POST            = Insertion of data
DELETE          = Deletion of data
PUT / PATCH     = Updation of current single data

----------------------------

PACKAGES

frontend
    - zustand, axios, react-router, tailwindcss, react-hook-form
    react-hot-toast, moment, react-icons / lucide-react

backend
    - express, nodemon, mongoose, dotenv, jsonwebtoken
    bcryptjs, nanoid, nodemailer

How to start and create server

Steps: 
    genarate package.json
    cmd: npm init -y

    changes (package.json)
        1- "main": "index.js",
        2- "dev": "node index.js"
            -> nodemon : "dev": "nodemon index.js"
        3- "type": "module"



--------------
REQUEST METHODS

frontend -> get     :::     backend -> get
forntend -> post    :::     backend -> post
forntend -> put     :::     backend -> put
forntend -> delete  :::     backend -> delete