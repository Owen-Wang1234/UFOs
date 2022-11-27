# UFOs

## Project Overview
The client wishes to create a web page that takes a compiled data file containing relevant information pertaining to UFO sightings and presents the data to a user who can filter in accordance with various criteria. The web page is crafted with a HTML file, is formatted and styled with a CSS file, and presents the UFO sighting data in a dynamic table with the use of JavaScript files.

## Resources

- data.js

This web page was created in the latter part of November 2022; all HTML, CSS, and JavaScript code are based on the version that is current to this period of time (HTML5 and JS ES6+).

## Web Page Design

### JavaScript Program
The JavaScript files contain the UFO sighting data and sets up the table to display the data. The JavaScript application starts by importing the data file and establishing a reference to the HTML table element (using the Data-Driven Documents [D3] feature of JavaScript).

The first function is the primary function that builds the table using a data array as the input parameter. The function starts by clearing the existing table before iterating through the input array. For each row in the array, a row is appended in the table, with each value in the row entered into table cells appended within the new row.

The next function uses the first function to build a table while passing through a filtered data array. For this project, this function is invoked when the user clicks on a button that applies a filter. This function filters by date, so the first step upon invocation is to set up a variable that will hold the input date. If an input date is entered, then the filtered result will be used; otherwise, the default data is used.

At the end, the application is instructed to listen for the user clicking on the filter button, and the first function is used to build the default table when the web page first loads.

### HTML Page Script
The HTML file is the front-end interface for users to view the UFO sighting data. In order to improve the user experience, the web page is styled with a CSS file, and the layout is formatted using Bootstrap (version 4.0.0 is used for this). Links to the Bootstrap Content Delivery Network (CDN) and the stylesheet are made to allow this.

At the top, a navigation bar and a heading banner spans the page. At the middle, the left section is the article title and the right section is the article text. At the bottom, the left section holds the filters while the right section contains the actual data table.

The Filters section is established as a HTML Form to receive user input. The filter criteria are tagged as "list items" for better organization, and the actual button that applies the filter is at the bottom of the "list." The Data Table section is intialized with table headers, and the actual table rows and cells will be added and populated by the JavaScript program.

Below the page script within the HTML Body section, the JavaScript files are invoked. One important point of note is that the order of JavaScript files called matter, so the first link must be to the D3 CDN (version 4.12.0 is used for this). Then the link to the JavaScript data file must be made before the link to the JavaScript application file, otherwise the application script cannot run properly without the data loaded initially.

### Stylesheet
The web page is customized to take on a dark background with light text. This is done by writing some lines into the CSS file to set the text color of the whole Body section accordingly while the HTML file has dark background classes added to various sections of the page. The heading jumbotron gets linked to a space image selected to serve as a background using some lines of code in the CSS file.