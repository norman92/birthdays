# BIRTHDAYS

## Running the project

1) Clone the repo
2) Run $ npm i to restore packages
3) Run npm start to start the api
4) cd to /client/ run $ npm i to restore client packages
4) Run npm start to start the front end

## Technical choices

### Front End

#### Boiler Plate

I used create-react-app to start off. This enabled me to get going without configuring WebPack.  I was able to launch straight into building the app itself.

#### Redux 

I used redux to manage the state of the application - so that I could store birthdays once fetched from the server.

#### Moment

Moment is a handy tool for working with dates.  I used this to display the dates nicely - e.g. in 3 days instead of printing an ugly date.

### Server

#### Express

I used express as it provides an easy and flexible way to build a light weight web server.


## Improvements

As time was limited there are serveral things that I would like to do differently.

- I would like to cover the front end with testing to ensure everything works well.
- Improve the look and feel of the font end - It looks unfinished and the form isn't styled at all
- Add a remove birthdays button
- Fix the add birthday form.  Currently the data is posted to the server but the server is unable to read the data.  It returns an empty JSON object which causes a crash.
- Add Error handling and a custom error page to the front end.
- Add a nice splash screen when the app is loading
- Better cover the api with tests to cover more situations.
- Add load testing to the api

## Testing 

You can run the tests agaisnt the API by running $ npm run test