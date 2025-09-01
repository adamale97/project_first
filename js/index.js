document.getElementById ("contactForm") .addEventListener ("submit", function (event) {
   event.preventDefault()

//InFORMACIONE NGA INPUT
let first_name = document.getElementById("firstName").value
let last_name = document.getElementById("lastName").value
let email = document.getElementById ("email").value

 //Alert
 let sms = document.getElementById("alert")


//Kontroll nese input JANE BOSH APO JANE ME INFO
if (first_name === "" || last_name ==="" || email==="" || comment ==="" ||) {
    sms.textContent = "Fill all your fields"
    sms.classList.add ("alert-danger")
    sms.style.display ="block"
    return
}

if() { Expression expected.
}

// Mesazh suksesi
sms.textContent = "Thank you. Your message is sent."
sms.classList.add("alert-success")
sms.classList.remove('alert-danger')
sms.style.display = "block"
});