// selecting all required items

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
closeIcon = wrapper.querySelector(".close-icon");

window.onload = ()=> {
  function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = (event)=> {
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("Offline");
        title.innerText = "You're Online Now";
        subTitle.innerText = "Cool ! Internet Is Connected .";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onClick = ()=>{
          wrapper.classList.add("hide");
        }

        setTimeout(() =>{
          wrapper.classList.add("hide");
        }, 5000);
      }else {
        offline();
      }
    }
    xhr.onerror = ()=> {
      offline();
    }
    xhr.send();
  }

  function offline(){
    wrapper.classList.remove("hide");
    toast.classList.add("Offline");
    title.innerText = "You're Offline Now";
    subTitle.innerText = "Opps! Internet Is Disconnected .";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }

  setInterval(()=> {
    ajax();
  }, 100);
}
