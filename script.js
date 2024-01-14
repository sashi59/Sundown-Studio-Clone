const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function page4Animation(){
    var elemCon = document.querySelector("#page4 .elem-container")
    var fixed = document.querySelector(".fixed-image")
    
    elemCon.addEventListener("mouseenter", function(){
        fixed.style.display = "block";
    })
    elemCon.addEventListener("mouseleave", function(){
        fixed.style.display = "none";
    })
    
    var elems = document.querySelectorAll("#page4 .elem-container .elem")
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

page4Animation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });