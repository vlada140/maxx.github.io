/*jshint browser: true, jquery: true*/

$(document).ready(function(){

  /* Sticky navigation */

    $('.js--team-section').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');

        } else {
            $('nav').removeClass('sticky');
        }


    }, {
          offset: '65px;'
        });
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window')
        }, {
          offset: '25%'
        })

    */
    /* Scroll buttons */

    $('.js--scroll-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js--plan-section').offset().top}, 1000);
    });

    $('.js--scroll-work').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-work').offset().top}, 1000);
    });


            /* Smooth scroll */

            $(function() {
              $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({
                      scrollTop: target.offset().top
                    }, 1000);
                    return false;
                  }
                }
              });
            });


                /* Wall slider */
                var $slider = $("#slider");

            var left =0 ;
            var moveBackPoint = parseInt("-" + $("#slider li:first").css("width"));

            function moveSlides() {
              if(left == moveBackPoint) {
                $("#slider li:first").insertAfter($("#slider li:last"));
                $("#slider li:last").css({"margin-right":"0"});
                left = 0;
              }
              $slider.css({"left" : left--});
            }

            $(document).ready(function() {

              setInterval(moveSlides, 28);

            });

            /* ANIMATION */


            $('.js--wp-1').waypoint(function(direction) {
               $('.js--wp-1').addClass('animated tada');

            }, {
                offset: '50%'
            });

              $('.js--wp-2').waypoint(function(direction) {
               $('.js--wp-2').addClass('animated tada');

            }, {
                offset: '50%'
            });

              $('.js--wp-3').waypoint(function(direction) {
               $('.js--wp-3').addClass('animated tada');

            }, {
                offset: '50%'
            });

            $('.js--wp-5').waypoint(function(direction) {
               $('.js--wp-5').addClass('animated fadeIn');

            }, {
                offset: '50%'
            });

              $('.js--wp-6').waypoint(function(direction) {
               $('.js--wp-6').addClass('animated pulse');

            }, {
                offset: '50%'
            });

              $('.js--wp-7').waypoint(function(direction) {
               $('.js--wp-7').addClass('animated shake');

            }, {
                offset: '50%'
            });

             $('.js--wp-8').waypoint(function(direction) {
               $('.js--wp-8').addClass('animated pulse');

            }, {
                offset: '50%'
            });

            $('.js--wp-9').waypoint(function(direction) {
               $('.js--wp-9').addClass('animated fadeIn');

            }, {
                offset: '50%'
            });

             $('.js--wp-10').waypoint(function(direction) {
               $('.js--wp-10').addClass('animated fadeIn');

            }, {
                offset: '50%'
            });

             $('.js--wp-11').waypoint(function(direction) {
               $('.js--wp-11').addClass('animated bounceInDown');

            }, {
                offset: '50%'
            });


    /* Mobile navigation  */

    $('.js--nav-icon').click(function() {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);


        if(icon.hasClass('ion-navicon-round')) {

            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
         } else {

            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
         }

    });



});
