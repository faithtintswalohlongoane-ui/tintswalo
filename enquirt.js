document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("bookingMessage").innerHTML =
    "✅ SUCCESS! Your appointment request has been submitted successfully. Thank you for choosing Mbali's Beauty Salon! 💗";

    document.getElementById("bookingMessage").style.color = "#e77fa0";
    document.getElementById("bookingMessage").style.fontWeight = "bold";

    this.reset();

});
