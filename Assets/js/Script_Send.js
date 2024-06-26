

const form = document.querySelector(".contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();  
  let name    = document.querySelector(".name").value;
  let email   = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;  
  document.querySelector(".contact-form").reset();
  sendEmail(name,email,message);  
})

function sendEmail(name,email,message){
  Email.send({      
    Host: "", 
    Username: "",
    Password: "",    
    To: "xatia@live.fr",
    From: "xatia@live.fr",
    Subject: `${name} MyPortfolio Website`,
    Body: `Name: ${name} <br> Email: ${email} <br> message:${message}`,
  }).then((success) => {   
    alert("Message sent successfully.");
  }).catch((error) => {      
    alert("Error sending message");
  })
}

