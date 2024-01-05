const rowsInput = prompt('Enter the amount of rows you want.')
const colsInput = prompt('Enter the amount of columns you want.')


function createTable(rows, cols) {
    let body = document.getElementsByTagName('body')[0]; // selecting the body
    let table = document.createElement('table'); // creating table element
    let tableBody = document.createElement('tbody'); // creating table body

    for (let i = 1; i <= rows; i++) { // creating rows
        let row = document.createElement('tr'); // creating table row

        for (let j = 1; j <= cols; j++) { // creating cols
            let cell = document.createElement('td'); // creating table cell

            cell.appendChild(document.createTextNode('Row ' + i + ' Col ' + j)); // cell content
            row.appendChild(cell);
        }

        tableBody.appendChild(row);

    }

    table.appendChild(tableBody);
    body.appendChild(table);

}

createTable(rowsInput, colsInput);

