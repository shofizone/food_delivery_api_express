# Food Delivery Api

#### Clone The repo

`$git clone https://github.com/shofizone/food_delivery_api_express.git`

#### Navigate to project dir

`$ cd food_delivery_api_express`

#### Install dependency

`$ npm install`

### Configure Database

- This project depends on MongoDB.
- Default url `$ localhost:27017`
- To set custom DB url user environment variable `$ DB_URL` 

#### Run The Project

`$ npm start`

### Working with server

- http server should be running at `$ http://localhost:8000`

### APIs docs

- Api documentation hs been created with [swagger](https://swagger.io/)
- Navigate to `$ http://localhost:8000/docs`

### Getting Food Menu list 
- Create a collection named `$ foodmenus`
- Import `$ foodmenus.json` using Mongodb compass
- Or food menu can be using api `$ /api/admin/food-menus/`. See more details on `$ http://localhost:8000/docs`

### ERD


