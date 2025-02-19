function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => displayTodos(data))
        .catch(error => console.error("Error fetching data:", error));
}

function displayTodos(todos) {
    const tableBody = document.querySelector("#todoTable tbody");
       tableBody.innerHTML = "";

    todos.forEach(userId => {
        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = userId.id;

        let titleCell = document.createElement("td");
        titleCell.textContent = userId.title;

        let statusCell = document.createElement("td");
        statusCell.textContent = userId.completed ? "Completed" : "Not Completed";
        statusCell.classList.add(userId.completed ? "completed" : "not-completed");

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
}


