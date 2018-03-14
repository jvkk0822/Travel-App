# groupTravelApp

Main Page 
	
	- displays top 5 worldwide destinations in right corner for user to search from
		- pull from dataset to get these
		- needs to come in as a link to click which will then query a search

	- displays most recent 5 places traveled from our users for a user to search from
		- gets pulled from our database
		- needs to come in as a link to click which will then query a search

	- has a place for user to create their own recent travel experience
		- get the information on which city they traveled to
		- get their comments on the trip
		- stores to our database

	- search bar for user to search for a city 
		- run this search against our database to see if there are any intries existing
		- run api searches no mattter what and display results

Once user clicks or searches something...
	
	- show the user the following
		- all comments regarding that city
		- info from our data set regarding traveling to that country
		- give them option to return to home page
			- or to just create another search



Over all things to do... 
	
	- get links to following api's
		- google for images 
		- somewhere to get top5 worldwide

	- get the api's working

	- find and get link to data set for travel hot spots
		- this will get rendered via server

	- create layout and interface
		- need places for stuff to go
		- need search box

	- settup backend
		- server
		- routes
		- config / models folders initialized by sequelize
		- schema of dummy data
		    - need our comments
		    - need data in data set
		- link our database 

	- Once we have basic layout and our api's going...
		- settup click handlers for all buttons
			- we need one to be able to create posts 
			- we need to be able to query 

    - need to reference city name to get all comments reference our db
    - need need country name to reference the dataset


    
we are polar-brushlands in heroku
