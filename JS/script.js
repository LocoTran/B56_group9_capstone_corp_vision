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
const zoomButton = document.querySelector('.fa-search');
const outButton = document.querySelector('.fa-close');

zoomButton.addEventListener('click', () => {
  zoomButton.classList.add('zoomed');
  zoomButton.classList.remove('normal');
});


outButton.addEventListener('click', () => {
if (zoomButton.classList.contains('zoomed')) {
  zoomButton.classList.remove('zoomed');
  zoomButton.classList.add('normal');
} 
});


// Full search open close
document.querySelector('.icon-material-search').addEventListener('click', function() {
  document.querySelector('.full_search').style.display = 'block';

});

document.querySelector('.icon-close').addEventListener('click', function() {
  document.querySelector('.full_search').style.display = 'none';
});



// Set position cụm nút search và đổi theme khi màn hình nhỏ
var clickCount = 0;

document.querySelector('.navbar-toggler').addEventListener('click', function () {
  
  if (clickCount === 0) {
    document.querySelector('.button_right').style.right = '15%';
    // Thiết lập lại biến đếm để cho lần click tiếp theo
    clickCount = 1;
  } else if (clickCount === 1) {
      document.querySelector('.button_right').style.right = '0%';
      // Thiết lập lại biến trạng thái để cho lần click tiếp theo
      clickCount = 0;
    }
});


// Chỉnh màu header khi scoll xuống

window.addEventListener('scroll', function() {
  // Kiểm tra xem trang đã được cuộn xuống hay chưa
  if (window.scrollY > 0) {
    document.getElementById("header").classList.add("scrolled");
    document.getElementById('.active').classList.add("scrolled");
  }
  else {
    // Xóa lớp "scrolled" khỏi phần tử body
    document.getElementById("header").classList.remove('scrolled');
    document.getElementById('.active').classList.remove("scrolled");
  }
});