document.addEventListener("DOMContentLoaded", () => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const navListRef = document.querySelector(".tycoon-navigation-list");
  const headerRef = document.querySelector(".tycoon-header");
  const navigationRef = document.querySelector(".tycoon-navigation");

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");
    navListRef.classList.toggle("is-open");
    headerRef.classList.toggle("is-open");
    navigationRef.classList.toggle("is-open");
  });

  document.querySelectorAll(".navigation__link").forEach((n) =>
    n.addEventListener("click", () => {
      navListRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
      headerRef.classList.remove("is-open");
      navigationRef.classList.remove("is-open");
    })
  );
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const buttonImg = element.querySelector(".tycoon-toggle-button img");

  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    buttonImg.src = "/img/Component 2 (2).png";
  } else {
    answer.style.display = "none";
    buttonImg.src = "/img/Component 2 (1).png";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("cookie-popup");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    popup.style.display = "block";
  }

  acceptButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    popup.style.display = "none";
  };

  declineButton.onclick = function () {
    localStorage.setItem("cookiesAccepted", "false");
    popup.style.display = "none";
  };
});
