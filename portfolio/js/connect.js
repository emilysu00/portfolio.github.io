//hide scroll bar
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scroll-container");
  // Add scroll event listener
  scrollContainer.addEventListener("scroll", () => {});
});

//hamburgur
let bars = document.querySelector(".clickable-bar");
let bar_one = document.querySelector(".bar-1");
let bar_two = document.querySelector(".bar-2");
let bar_three = document.querySelector(".bar-3");
bars.addEventListener("click", function () {
  if (bars.dataset.clicked === "0") {
    document.getElementsByClassName("frame")[0].classList.add("active");
    document.getElementsByClassName("menu-item")[0].classList.add("active");
    bar_two.style.visibility = "hidden";
    bar_one.style.transform = "rotate(-45deg)";
    bar_one.style.marginTop = "3vh";
    bar_three.style.transform = "rotate(45deg)";
    bar_three.style.marginTop = "-1.1vh";
    bars.dataset.clicked = "1";
  } else {
    document.getElementsByClassName("frame")[0].classList.remove("active");
    document.getElementsByClassName("menu-item")[0].classList.remove("active");
    bar_one.removeAttribute("style");
    bar_three.removeAttribute("style");
    bar_two.style.visibility = "visible";
    bars.dataset.clicked = "0";
  }
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
