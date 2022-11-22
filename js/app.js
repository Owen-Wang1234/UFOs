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