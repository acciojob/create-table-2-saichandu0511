function createTable() {
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Check for non-numeric or empty input
    if (rn === null || cn === null || isNaN(rn) || isNaN(cn)) {
        return;
    }

    rn = Number(rn);
    cn = Number(cn);

    // Check for 0 or negative values
    if (rn <= 0 || cn <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    let table = document.getElementById("myTable");

    // Clear existing table
    table.innerHTML = "";

    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.innerText = "Row-" + i + " Column-" + j;
        }
    }
}
