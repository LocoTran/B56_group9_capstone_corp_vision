/**
Solution: 
Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
Dựa vào class dark, ta viết css dành riêng cho dark theme.

Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

*/

//gọi thẻ button có id là switchButton
// gắn chức năng click cho switchButton
document.getElementById("switchButton").onclick = function () {
  //khi button được click thì tìm đến thẻ body có id là myBody
  // dùng classlist để gọi thuộc tính class của thẻ body
  //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
  document.getElementById("myBody").classList.toggle("dark");
  document.getElementById("header").classList.toggle("darktheme");
};

// Button search open close animation
const ZOOM_BTN = document.querySelector(".fa-search");
const OUT_BTN = document.querySelector(".fa-close");

const DIV_FULL_SEARCH = document.querySelector(".full_search");

ZOOM_BTN.addEventListener("click", () => {
  ZOOM_BTN.classList.add("zoomed");
  ZOOM_BTN.classList.remove("normal");
  // Full search open close
  DIV_FULL_SEARCH.style.display = "block";
});

OUT_BTN.addEventListener("click", () => {
  // Full search open close
  DIV_FULL_SEARCH.style.display = "none";
  if (ZOOM_BTN.classList.contains("zoomed")) {
    ZOOM_BTN.classList.remove("zoomed");
    ZOOM_BTN.classList.add("normal");
  }
});

// Set position cụm nút search và đổi theme khi màn hình nhỏ
const BTN_RIGHT = document.querySelector(".button_right");
const HEAD = document.querySelector("#header");
const BTN_TOGGER = document.querySelector("#button_show");

var clickCount = 0;
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    // ngăn người dùng cuộn chuột hay thao tác khác trước khi thoát khỏi phần show
    document.body.style.overflow = "hidden";

    if (clickCount == 0) {
      // dịch chuyển 2 nút search và đổi theme
      BTN_RIGHT.style.right = "15%";
      // kéo dài header để khoảng full dc phần show
      HEAD.style.height = "250px";
      HEAD.style.border = "none";
      BTN_TOGGER.classList.add("fa-xmark");
      BTN_TOGGER.classList.remove("fa-bars");

      clickCount = 1;
    } else if (clickCount == 1) {
      BTN_RIGHT.style.right = "";
      HEAD.style.height = "";
      document.body.style.overflow = "";
      HEAD.style.border = "";
      BTN_TOGGER.classList.remove("fa-xmark");
      BTN_TOGGER.classList.add("fa-bars");

      clickCount = 0;
    }
  });

// Nhấn vào phần Page
var clickPage = 0;
document.querySelector(".page").addEventListener("click", function () {
  if (clickPage == 0) {
    // kéo dài header để khoảng full dc phần show
    HEAD.style.height = "300px";
    clickPage = 1;
  } else if (clickPage == 1) {
    HEAD.style.height = "250px";
    clickPage = 0;
  }
});

// Chỉnh màu header khi scoll xuống

window.addEventListener("scroll", function () {
  // Kiểm tra xem trang đã được cuộn xuống hay chưa
  if (window.scrollY > 0) {
    HEAD.classList.add("scrolled");
  } else {
    HEAD.classList.remove("scrolled");
  }
});
