$(function(){
    //carousel
    $('.carousel').carousel({
      interval: 6000,
      pause: 'hover'
    });

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());


    
    //smooth scrolling
    $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
      
          const hash = this.hash;
      
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
      
            window.location.hash = hash;
          });
        }
      });

       // Auto play modal video
       $(".video").click(function () {
        var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      })


      // lightbox

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

    // slider
    
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    
});