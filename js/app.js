//creating "array" using section "id"

const nmarr = ["sector1", "sector2", "sector3", "sector4"]; //.push(document.querySelectorAll(section).getAttribute(id));       "dynamic pushing for each new section doesn't work for me"

//dynamically adding nav links using array above to populate navbar

const ul = document.getElementById("navbar__list");

nmarr.forEach(function (t) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.classList.add("nav-item");
  a.classList.add("nav-link");
  a.innerText = t;
  a.setAttribute("data-link", t);
  ul.append(li);
  li.appendChild(a);
});

//onClick-Highligting

const btnz = document.querySelectorAll(".nav-link");

btnz.forEach((button) => {
  button.addEventListener("click", function () {
    btnz.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    //scrollingIntoView

    const elemz = document.getElementById(this.getAttribute("data-link"));
    elemz.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  });
});

//creating variables

let divsecz = document.getElementsByTagName("section"),
  li = document.getElementsByClassName("nav-link"),
  i;

//onScroll Highlighting

window.onscroll = () => {
  for (i = 0; i < divsecz.length; i = i + 1) {
    if (
      window.scrollY > divsecz[i].offsetTop &&
      window.scrollY < divsecz[i].offsetTop + divsecz[i].offsetHeight
    ) {
      li[i].classList.add("active");
      divsecz[i].classList.add("active");
    } else {
      li[i].classList.remove("active");
      divsecz[i].classList.remove("active");
    }
  }
};
