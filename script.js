const filters = document.querySelectorAll(".filter");
const imgs = document.querySelectorAll(".picture img");
const navbar = document.querySelector(".navbar1 .container1");
const hero = document.querySelector(".dummy");
const up_btn = document.querySelector(".up-btn");
const subs_btn = document.querySelector(".subscribe");
const subs_email = document.querySelector(".subs_email");
const email_modal = document.querySelector("#msg-modal");
// <script src="./node_modules/axios/dist/axios.min.js"></script>

const navObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("nav-scroll");
      up_btn.classList.remove("btn-hide");
    } else {
      navbar.classList.remove("nav-scroll");
      up_btn.classList.add("btn-hide");
    }
  });
}, {});

navObserver.observe(hero);

filters.forEach((filter) => {
  filter.addEventListener("click", (selected) => {
    applyFilter(selected.target.innerText);
  });
});

function applyFilter(selected_filter) {
  filters.forEach((filter) => {
    if (filter.innerHTML === selected_filter) {
      filter.classList.add("current-filter");
    } else {
      filter.classList.remove("current-filter");
    }
  });
  if (selected_filter === "All") {
    imgs.forEach((image) => {
      image.classList.remove("img-hide");
      image.classList.add("img-show");
    });
  } else {
    imgs.forEach((image) => {
      if (!image.classList.contains(selected_filter.toLowerCase())) {
        image.classList.remove("img-show");
        image.classList.add("img-hide");
      } else {
        image.classList.remove("img-hide");
        image.classList.add("img-show");
      }
    });
  }
}

subs_btn.addEventListener("click", async () => {

  data = { email: subs_email.value };

  response = await fetch("http://127.0.0.1:3000/send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (email_modal.innerText = data.msg));
});
