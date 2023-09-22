// Sample data (replace this with actual data retrieval logic)
const departmentData = [
    { name: "Cardiology", patients: 150, doctors: 10 },
    { name: "Orthopedics", patients: 80, doctors: 6 },
    // Add more department data here
];

// Function to populate the boxes with data
function populateBoxes() {
    const boxes = document.querySelectorAll('.dashboard-box');
    
    departmentData.forEach((department, index) => {
        const box = boxes[index];
        box.innerHTML = `
            <h3>${department.name}</h3>
            <p>Patients: ${department.patients}</p>
            <p>Doctors: ${department.doctors}</p>
        `;
    });
}

// Call the populateBoxes function when the page loads
window.addEventListener('load', populateBoxes);
