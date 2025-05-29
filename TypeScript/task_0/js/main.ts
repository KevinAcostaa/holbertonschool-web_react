interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Kevin",
    lastName: "Acosta",
    age: 25,
    location: "Montevideo, Uruguay",
};

const student2: Student = {
    firstName: "Jorge",
    lastName: "Silva",
    age: 25,
    location: "Montevideo, Uruguay"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    studentsList.forEach((student) => {
        const row = document.createElement("tr");      const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
});
