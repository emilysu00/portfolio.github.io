//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {});
});

//sendmail

function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_i0f0jv3", "template_2om77cf", params)
    .then(function (res) {
      document.getElementById("fullName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!");
    });
}
