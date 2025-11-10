var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};
var studentsList = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
    var table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "50%";
    table.style.margin = "20px auto";
    // Create table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var firstNameHeader = document.createElement("th");
    firstNameHeader.textContent = "First Name";
    firstNameHeader.style.border = "1px solid #ddd";
    firstNameHeader.style.padding = "8px";
    firstNameHeader.style.backgroundColor = "#f2f2f2";
    var locationHeader = document.createElement("th");
    locationHeader.textContent = "Location";
    locationHeader.style.border = "1px solid #ddd";
    locationHeader.style.padding = "8px";
    locationHeader.style.backgroundColor = "#f2f2f2";
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    var tbody = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        firstNameCell.style.border = "1px solid #ddd";
        firstNameCell.style.padding = "8px";
        firstNameCell.style.textAlign = "center";
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        locationCell.style.border = "1px solid #ddd";
        locationCell.style.padding = "8px";
        locationCell.style.textAlign = "center";
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
});
