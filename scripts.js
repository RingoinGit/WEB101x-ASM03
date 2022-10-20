"use strict";
const email = document.querySelector(".input-email");
const emailForm = document.querySelector(".form-email");
const personInfo = document.querySelector(".info");
function infoHidden() {}

//Hiển thị thông tin cá nhân khi nhập đúng email, Nếu không đúng email thì hiện popup cảnh báo
const submitBtn = document.getElementById("submit-button");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", function () {
  if (email.value.match(regex)) {
    emailForm.classList.add("hidden");
    personInfo.classList.remove("hidden");
  } else {
    alert(`Xin vui lòng nhập đúng email.`);
  }
});

//Trường hợp người dùng không click nút Submit mà ấn enter thì :
email.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && email.value) {
    if (email.value.match(regex)) {
      e.preventDefault(); //Ngăn ngừa trang web reload gây mất hiệu ứng hiển thị thông tin cá nhân
      emailForm.classList.add("hidden");
      personInfo.classList.remove("hidden");
    } else {
      alert(`Xin vui lòng nhập đúng email.`);
    }
  }
});

//Bật tắt các khối thông tin trong job-info
const contentList = document.querySelectorAll(".content-list");
const viewBtn = document.querySelectorAll(".viewmore-btn");
function viewmore() {
  for (let i = 0; i < viewBtn.length; i++) {
    //Lấy sự kiện click của mỗi nút
    viewBtn[i].addEventListener("click", function () {
      //chuyển đổi tên nút Viewmore Viewless
      const text =
        viewBtn[i].textContent === "View more ..."
          ? "... View less"
          : "View more ...";
      contentList[i].classList.toggle("hidden");
      viewBtn[i].textContent = text;
    });
  }
}

viewmore();
