$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }
       if(this.scrollY > 500){
           $('.scroll-up-btn').addClass("show");
       }
       else{
           $('.scroll-up-btn').removeClass("show");
       }
    });
    // slide up the scripter
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });

    // typing animations
    var typed = new Typed(".typing",{
        strings :["Programmer", "Web Designer","Pythonista","Android Developer", "Data Scientist","Freelancer"],
        typedSpeed :100,
        backSpeed: 60,
        loop :true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Programmer", "Web Designer", "Pythonista" ,"Android Developer", "Data Scientist","Freelancer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop :true
    });
// const carouselText = [
//   {text: "Programmer", color: "blue"},
//   {text: "Web and Android developer", color: "orange"},
//   {text: "Data Scientist", color: "black"},
//   {text: "Freelancer", color: "yellow"}
// ]

// $( document ).ready(async function() {
//   carousel(carouselText, "#feature-text")
// });

// async function typeSentence(sentence, eleRef, delay = 100) {
//   const letters = sentence.split("");
//   let i = 0;
//   while(i < letters.length) {
//     await waitForMs(delay);
//     $(eleRef).append(letters[i]);
//     i++
//   }
//   return;
// }

// async function deleteSentence(eleRef) {
//   const sentence = $(eleRef).html();
//   const letters = sentence.split("");
//   let i = 0;
//   while(letters.length > 0) {
//     await waitForMs(100);
//     letters.pop();
//     $(eleRef).html(letters.join(""));
//   }
// }

// async function carousel(carouselList, eleRef) {
//     var i = 0;
//     while(true) {
//       updateFontColor(eleRef, carouselList[i].color)
//       await typeSentence(carouselList[i].text, eleRef);
//       await waitForMs(1500);
//       await deleteSentence(eleRef);
//       await waitForMs(500);
//       i++
//       if(i >= carouselList.length) {i = 0;}
//     }
// }

// function updateFontColor(eleRef, color) {
//   $(eleRef).css('color', color);
// }

// function waitForMs(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }
});
