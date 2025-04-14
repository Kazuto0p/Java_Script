// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("userForm");

//     form.addEventListener("submit", async (e) => {
//         e.preventDefault(); // prevent normal form submission

//         const formData = {
//             name: document.getElementById("name").value,
//             age: document.getElementById("age").value,
//             tax: document.getElementById("tax").value,
//         };

//         try {
//             const res = await fetch("/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (res.ok) {
//                 alert("✅ Data submitted successfully!");
//                 window.location.href = "/view.html"; // redirect if needed
//             } else {
//                 alert("❌ Failed to submit data.");
//             }
//         } catch (err) {
//             console.error("Error:", err);
//             alert("⚠️ Error submitting form.");
//         }
//     });
// });

async function send(event) {
    event.preventDefault(); // ❗ Stops the default form submission

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let tax = document.getElementById('tax').value;

    let options = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ name, age, tax })
    };

    try {
        const response = await fetch('/submit', options);

        if (response.status === 200) {
            alert("Data added to Database");
            window.location.href = "/view.html";
        } else {
            alert("Failed to submit data. Status: " + response.status);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong.");
    }

    return false;
}
