  <!-- Toggle Dark Mode --> 
function toggleMode() {
      document.body.classList.toggle('dark-mode');
    }
// Hiển thị nút khi cuộn xuống
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Cuộn lên đầu trang khi click
document.getElementById("scrollTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
AOS.init();

/* code liên quan đến hiển thị dòng slogan*/
// Typing Effect
    document.addEventListener("DOMContentLoaded", () => {
      const text = "<span class='emoji'>✨</span> Chào mừng bạn đến với trang cá nhân của mình.";
      const target = document.getElementById("typing-slogan");
      let index = 0;

      function typeChar() {
        if (index < text.length) {
          target.textContent += text.charAt(index);
          index++;
          setTimeout(typeChar, 45);
        } else {s
          const cursor = document.createElement("span");
          cursor.classList.add("cursor");
          target.after(cursor);
        }
      }

      typeChar();
    });
// Hiện form khi click liên kết
document.querySelectorAll('a[href="#contact"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById("contactModal").style.display = "flex";
  });
});

// Đóng form khi nhấn nút X
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "none";
});

// Đóng khi click ra ngoài modal-content
window.addEventListener("click", function (e) {
  if (e.target.id === "contactModal") {
    document.getElementById("contactModal").style.display = "none";
  }
});

