const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

const messageBody = `${userName} <br/> ${userEmail} <br/> ${message}`;

function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "suhuyini86@gmail.com",
    Password: "30BF450883F4812AD332FC4E2B335C10640B",
    To: "suhuyini86@gmail.com",
    From: "suhuyini86@gmail.com",
    Subject: subject,
    Body: messageBody,
  }).then((message) => alert(message));
}
