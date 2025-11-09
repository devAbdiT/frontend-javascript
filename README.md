# 🧑‍🎓 Student Table (Vanilla JavaScript)

This simple project demonstrates how to create and display a list of students using **Vanilla JavaScript**.  
It defines an interface-like structure for `Student` objects and dynamically renders their data in an HTML table.

---

## 🚀 Features
- Defines a `Student` structure with:
  - `firstName` (string)
  - `lastName` (string)
  - `age` (number)
  - `location` (string)
- Creates two student objects and stores them in an array named `studentsList`.
- Dynamically generates a table in the DOM that displays:
  - Student **first name**
  - Student **location**

---

## 🧱 Project Structure




---

## 🧩 Example Output

| First Name | Location   |
|-------------|------------|
| Alice       | New York   |
| Bob         | California |

---

## 🧠 How It Works

1. The script defines a `Student` type using **JSDoc** to simulate an interface.
2. Two `Student` objects are created (`student1` and `student2`).
3. Both are added to an array named `studentsList`.
4. JavaScript loops through the array and creates table rows (`<tr>`) dynamically for each student.
5. The table rows are appended to the HTML `<table>` element.

---


