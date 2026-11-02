document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("contactMessage").innerHTML =
        "✅ Thank you! Your message has been submitted successfully. We appreciate you! 💗";

    document.getElementById("contactMessage").style.color = "#e77fa0";
    document.getElementById("contactMessage").style.fontWeight = "bold";

    this.reset();

});


