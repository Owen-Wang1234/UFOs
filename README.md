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

### Modifications
At the request of the client, the web page was adjusted to allow the user to filter the data with additional criteria (including the city, state, country, and shape of the sighting). During the course of modification, the button was removed, so the filtration function was prompted by entering anything in the input boxes or changing anything in the input boxes. User interaction with the input forms prompts a function that adds or clears the filter criteria and then calls the function that will use the resulting filters to sift through the data and build a table to present the results. The function that actually filters the data is modified to account for the fact the filters are in a JavaScript object that pairs the parameter with the input criterion, if one was entered.

## Results
The web page now looks like this:

![The UFO Finder page when initially loaded](https://github.com/Owen-Wang1234/UFOs/blob/main/images/front.png)

The page initially loads all the sightings from the provided data file, which contains sightings in the United States between January 1, 2010 and January 13, 2010. The form for filters consist of input text boxes where the user can enter a criteria for filtering the data according to certain parameters including the date, city, state, country, and shape. Placeholder text (shown in gray) serves as an example of how the entry should be formatted; the user's input is shown as solid black text. The JavaScript application is able to filter the data using more than one criteria, as shown:

![Using one filter](https://github.com/Owen-Wang1234/UFOs/blob/main/images/filter.png)

![Using two filters](https://github.com/Owen-Wang1234/UFOs/blob/main/images/2filters.png)

Removing the text from the input box clears the criterion from that parameter. If the user clears all the boxes, that clears all the filters and resets the data table to show all the sightings.

## Summary
For a first run of the web page, the design is relatively sound; the user can see all the sightings at first glance and then filter under different criteria. Additionally, the web page is customized with reasonably good designs that grab the attention of the users without detracting or overwhelming.

The fact that this is an early draft of a web page becomes visible quickly when users discover that the filter criteria needs to be exact to work. The input boxes contain placeholder text in gray which can serve as reference formats to show the user how the input should look, but nothing stops the user from entering anything desired, regardless of whether or not the entry is even a valid value. This is compounded by the fact that each input text box will accept **any string**, so not only can users enter typos or even just straight up invalid strings, *but particularly malicious users could attempt to write in some ***damaging code and script*** into the input and the JavaScript application will attempt to run them*, resulting in some very unwanted outcomes.

One recommendation for further development is to mitigate the issue by reformatting the filtration process to maybe use drop-down menus in order to control what inputs the user sends to the JavaScript application. This will require some more functions that runs through the data and collects the parameters to populate the drop-down menus: The years (the month and day are optional, but those are usually already established as 12 months and 31 days to catch all cases), the cities, the states, the countries, and the shapes. As an added touch, each option might also come with a count to allow the user to glimpse how many entries in the data file match this filter criterion; such a feature might come off as advanced like what could be found in other data filtering web sites.

Another recommendation for further development is to maybe prepare a program that continually updates the JavaScript data file. The data file used right now appears to be just limited to North American sightings between January 1, 2010 and January 13, 2010; the web page needs to be able to handle sightings spanning beyond this time period and region. A program or function can continuously update the data file by adding more sightings daily after scraping the Internet for new reports. Accumulating sightings across the planet from the beginning of 2010 to current day will result in a massive data file with many entries, so the intial data table may be formed by taking a number of the most recent sightings, and then the user can filter for older reports. This will require some re-adjustment of the JavaScript application function codes, but if the previous recommendation for input control was implemented, then the dynamic method of populating the drop-down menus should already be able to handle a dynamically growing data file.

Any additional proposals for development may be just cosmetic including displaying the number of results displayed in the table, pointing out to the user that if a table displays zero results the inputs should be checked in case they are too restrictive or entered incorrectly unless the results are legitimately zero, or using a button to clear the filter criteria and reset the table display.