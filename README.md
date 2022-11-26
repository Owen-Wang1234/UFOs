# UFOs

## Project Overview
The client wishes to create a web page that takes a compiled data file containing relevant information pertaining to UFO sightings and presents the data to a user who can filter in accordance with various criteria. The web page is crafted with a HTML file, is formatted and styled with a CSS file, and presents the UFO sighting data in a dynamic table with the use of JavaScript files.

## Resources

- data.js

This web page was created in the latter part of November 2022; all HTML, CSS, and JavaScript code are based on the version that is current to this period of time (HTML5 and JS ES6+).

## Web Page Design

### JavaScript Program
The JavaScript files contain the UFO sighting data and sets up the table to display the data. The JavaScript application starts by importing the data file and establishing a reference to the HTML table element (using the Data-Driven Documents [d3] feature of JavaScript).

The first function is the primary function that builds the table using a data array as the input parameter. The function starts by clearing the existing table before iterating through the input array. For each row in the array, a row is appended in the table, with each value in the row entered into table cells appended within the new row.

The next function uses the first function to build a table while passing through a filtered data array. For this project, this function is invoked when the user clicks on a button that applies a filter. This function filters by date, so the first step upon invocation is to set up a variable that will hold the input date. If an input date is entered, then the filtered result will be used; otherwise, the default data is used.

At the end, the application is instructed to listen for the user clicking on the filter button, and the first function is used to build the default table when the web page first loads.