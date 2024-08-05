"use strict";
// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
//  Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

const blogData = [
  {
    title: "Tips Belajar Programming",
    content:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident, repudiandae.",
    image: "dist/img/blog/1.jpeg",
    alt: "Programming",
  },
  {
    title: "Review Mechanical Keyboard",
    content:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident, repudiandae.",
    image: "dist/img/blog/2.jpg",
    alt: "Teknologi",
  },
  {
    title: "Menikmati Secangkir Kopi",
    content:
      "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident, repudiandae.",
    image: "dist/img/blog/1.jpeg",
    alt: "Gaya Hidup",
  },
];
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  // getTemplateBlog(blogData);
});
window.addEventListener("DOMContentLoaded", function () {
  // document.addEventListener("DOMContentLoaded", function () {
  // getTemplateBlog(blogData);
});
// getTemplateBlog(blogData);
function getTemplateBlog(data) {
  let html = "";
  data.forEach((element, index) => {
    html += `<div class="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img src="${element.image}" alt="${element.alt}">
                  <div class="py-8 px-4">
                    <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">${element.title}</a></h3>
                    <p class="font-medium text-base text-secondary mb-4">${element.content}</p>
                    <a href="blog.html" class="font-medium text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Selengkapnya</a>
                  </div>
                </div>
            </div>`;
  });
  blog.innerHTML = html;
}
