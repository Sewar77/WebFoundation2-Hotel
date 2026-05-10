let users = JSON.parse(localStorage.getItem("users")) || []
let editIndex = -1;
function displayUsers() {
    const tableBody = document.getElementById("tableBody")
    tableBody.innerHTML = ""

    users.forEach((user, idx) => {
        tableBody.innerHTML += `
        <tr>
            <td>${idx + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <button class="btn btn-warning btn-sm p-2 m-2" onclick="editData(${idx})"> Edit</buttn>
                <button class="btn btn-danger btn-sm p-2 m-2" onclick="deleteData(${idx})"> Delete</buttn>
            </td>
        </tr>
        `
    });
}
displayUsers()

function editData(idx) {
    document.getElementById("name").value = users[idx].name
    document.getElementById("email").value = users[idx].email
    document.getElementById("age").value = users[idx].age
    editIndex = idx
    clearForm()
}

function deleteData(idx) {
    if (confirm("Are You sure?")) {
        users.splice(idx, 1)
        saveUser()
        displayUsers()
    }
}
function addUser() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value

    if (name === "" || email === "") {
        alert("plesae add name and email")
        return
    }

    const user = {
        name: name, email: email, age: age
    }
    if (editIndex === -1) {
        users.push(user)
    } else {
        users[editIndex] = user
        editIndex = -1
    }
    saveUser()
    displayUsers()
    clearForm()
}

function clearForm() {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("age").value = ""
}

function saveUser() {
    localStorage.setItem("users", JSON.stringify(users))
}