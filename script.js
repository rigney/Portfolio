$(function () {
// console.log("Hi Hana")
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

document.getElementById('scrollTo').scrollIntoView({block: 'start', behavior: 'smooth'});

// $(function() {
//   $('a[href*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 2000, 'linear');
//   });
// });

// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({
//               scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     });
// });
// console.log("Hi Hana")
// $('a[href*="#"]:not([href="#"])').click(function(event){
// 	console.log("Hi Hana")
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 1000, "ease-in-out");
//     event.preventDefault();
// });