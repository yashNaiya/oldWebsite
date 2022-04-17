window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  


  //Javascript for toggle menu 

  

  var navLinks = document.getElementById("nav-links");
  //var Main = document.getElementsByTagName("body");

  function showmenu(){
    navLinks.style.right = "0";
    // Main.style.filter = blur(8);

  }
  function hidemenu(){
    navLinks.style.right = "-200px";
  }


  var box = document.getElementById("container");
  var contBox = document.getElementById("contBox");
  function showBox(){
    box.style.display = "block";
    contBox.style.display = "none";
  }
  function hideBox(){
    box.style.display = "none";
    contBox.style.display = "block";
  }

  // Smooth scroll

  // $(".nav-links a").on("click", function(e) {
  //   if(this.hash != ""){
  //     e.preventDefault();

  //     const hash = this.hash;

  //     $("html,body").animate(
  //       {
  //       screenTop: $(hash).offset().top
  //       },
  //       800
  //       );
  //   }
  // });



  // animation in skill section

  // const skills = document.querySelectorAll(".skills");
  // skills.forEach(skill => {
  //   var windowHeight = window.innerHeight;
  //   var eleTop = skill.getBoundingClientRect().top;
  //   var eleVisible = 150;
  //   if(eleTop < windowHeight - eleVisible){
  //     skill.classList.add("animation");
  //   }
  // });