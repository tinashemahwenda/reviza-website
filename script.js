function sendMail() {
    let parms = {

        email: document.getElementById("email").value,

    }

    emailjs.send("service_otomoti", "template_3yg4s5w", parms).then(alert("Registration successfully sent"))
}