console.log("script loaded")
async function fetchUsers() {
    try{
        const response = await fetch('/users');
        if (response.ok) {
            const users = await response.json();
            const userList = document.getElementById('userList');
            // Clear the list before adding new data
            userList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `Name: ${user.name}, Age: ${user.age}, Tax: ${user.tax}`;
                userList.appendChild(listItem);
            });
        }else {
            console.error('Failed to fetch users');
        }
    }catch (error) {
        console.error('Error:', error);
    }
}

window.onload = fetchUsers;