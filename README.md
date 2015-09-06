# CefaloSchool
Cefalo School Management Application

## Motivation
---------------------------------------------------------------------------------------------------------
This project is about learning new technologies and sharing knowledge with others who likes to learn.

## Installation Process
---------------------------------------------------------------------------------------------------------

Steps:

0. Get the repository (Since you are reading this file hopefully this step is already done!)
1. Download and install Node: https://nodejs.org/en/
2. Download and install MongoDB: https://www.mongodb.org/
3. Open cmd/terminal/gitbash in the root folder of the repository
4. Install all dependencies for the project
	cmd command: npm install 
	This will install all dependencies from package.json file and a node_modules folder will be created
	This folder is ignored in the gitignore file, because we dont need to push these packages to the repository
// Install bower in global space: npm install -g bower (not required)
5. Start Node server
	cmd command: node server
6. Start mongodb
	Open cmd/terminal/gitbash locate the path of mongodb installation where mongod.exe is present
	C:\Program Files\MongoDB\Server\3.0\bin is the default location where mongod.exe is found
	Type the command mongod.exe --dbpath "db_location_path" [the db_location_path normally is in C:\data\db] 
	so the command should be something like: mongod.exe --dbpath C:\data\db
7. Open a broser and type localhost:3000 in address bar and press enter

If everything is OK then you should see the home page of the application
Well done!!!

## API Reference
---------------------------------------------------------------------------------------------------------
TODO...


## Tests
---------------------------------------------------------------------------------------------------------
TODO...

## Contributors
---------------------------------------------------------------------------------------------------------
TODO...

## License
---------------------------------------------------------------------------------------------------------
TODO...