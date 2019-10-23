# upMovies
This app is composed by a Rest application, built using Springboot, that provides the data to a Frontend application, built using React. All the data comes from "The Movie DB", all the rest application does is to receive requests from the client and make requests to the TMDB api and do some processing on the results. The Restfull app runs in a default tomcat server and provides the React frontend files statically.

To run this app, first of all make sure to have at least Java 8 and Maven installed, then got to the Backend directory and run:

mvn clean install
mvn spring-boot:run

Maven will take care of Nodejs and Yarn install and will build the project properly.
After that, you can acces the application at http://localhost:8080.

Aside from Maven, Springboot, Npm and React, only on othe library was used in this project. I used React Bootstrap, a library of useful react components, to build the frontend.


