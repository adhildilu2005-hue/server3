let selectedPrice = 0;

// Select tourist package
function selectPackage(packageName, price) {

    document.getElementById("package").value = packageName;

    selectedPrice = price;

    calculateTotal();

    // Scroll to booking form
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Calculate total price
function calculateTotal() {

    let people = document.getElementById("people").value;

    let total = selectedPrice * people;

    document.getElementById("total").textContent =
        total.toLocaleString("en-IN");
}

// Update total when number of people changes
document.getElementById("people").addEventListener("input", calculateTotal);

// Booking form
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let packageName = document.getElementById("package").value;

    if (packageName === "") {
        alert("Please select a tourist package first.");
        return;
    }

    document.getElementById("message").textContent =
        "Thank you, " + name + "! Your " +
        packageName + " booking request has been received.";

    this.reset();

    document.getElementById("package").value = "";
    document.getElementById("total").textContent = "0";

    selectedPrice = 0;
});
