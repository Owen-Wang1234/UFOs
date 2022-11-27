// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the table to display the data
function buildTable(data) {
    
    // Clear the existing data for a fresh table
    tbody.html("");

    // Loop through the data array
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {

            // Create a cell to append data to the table
            let cell = row.append("td");

            // Add the value
            cell.text(val);
        });
    });
}

// Filter the table based on the input date
function handleClick() {

    // Get the datetime value from the filter
    let date = d3.select("#datetime").property("value");

    // Set a default filter (The original table data)
    let filteredData = tableData;

    // Check if a date was entered
    if (date) {

        // Return only the data with that date
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // (If no date was entered, then the original data will be used)
    buildTable(filteredData);
}

// Listen for the filter button click
d3.selectAll("#filter-btn").on("click", handleClick);

// Load and display the original table when the page loads
buildTable(tableData);