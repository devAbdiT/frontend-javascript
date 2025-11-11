// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function
function createEmployee(salary: any): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance

// Type predicate function to check if employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
// String literal type for Subjects
// String literal type for Subjects
type Subjects = "Math" | "History";

// teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and get new ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age
const updatedRow: RowElement = { ...row, age: 23 };

// Update and delete operations
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/Java.ts" />
/// <reference path="subjects/React.ts" />

namespace Subjects {
  // Export constants for each subject
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Export teacher object with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
  };

  // For Cpp subject
  console.log("C++");
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log("Java");
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log("React");
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}

// Interfaces
interface MajorCredits {
  credits: number;
  _brand: "major";
}

interface MinorCredits {
  credits: number;
  _brand: "minor";
}

// Functions
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "major",
  };
}

function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "minor",
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: "major" };
const major2: MajorCredits = { credits: 4, _brand: "major" };
const minor1: MinorCredits = { credits: 2, _brand: "minor" };
const minor2: MinorCredits = { credits: 1, _brand: "minor" };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, _brand: 'minor' }
