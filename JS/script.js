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
  };
  

// Full search open close
  document.querySelector('.icon-material-search').addEventListener('click', function() {
    document.querySelector('.full_search').style.display = 'block';
  });

  document.querySelector('.icon-close').addEventListener('click', function() {
    document.querySelector('.full_search').style.display = 'none';
  });


  // Open close search
document.getElementById("open_search").addEventListener("click", function () {
  var container = document.getElementById("portNav");
  if (container.classList.contains("container")) {
    container.classList.remove("container");
    container.classList.add("container-fluid");
  }
});

document.getElementById("close_search").addEventListener("click", function () {
  var container = document.getElementById("portNav");
  if (container.classList.contains("container-fluid")) {
    container.classList.remove("container-fluid");
    container.classList.add("container");
  }
});




const zoomButton = document.querySelector('.fa-search');

zoomButton.addEventListener('click', () => {
    zoomButton.classList.add('zoomed');
    zoomButton.classList.remove('normal');
});

const outButton = document.querySelector('.fa-close');

outButton.addEventListener('click', () => {
  if (zoomButton.classList.contains('zoomed')) {
    zoomButton.classList.remove('zoomed');
    zoomButton.classList.add('normal');
  } 
});