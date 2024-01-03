(function($) {
  'use strict';
  // header menu popupe js //
  // add class js //
  $(".invacat-popupe").click(function() {
          $(".popupe-menu").addClass("invacat")
      })
      // remove class js //
  $(".invacat-icon").click(function() {
          $(".popupe-menu").removeClass("invacat")
      })
      // menu popupe js end //
      // counter-js//
  $('.counter').counterUp({
      delay: 20,
      time: 3000
  });
  // counter-js end //

  // init Isotope js //
  var $grid = $('.project-active').isotope({
      itemSelector: '.project-item',
      layoutMode: 'fitRows'
  });

  // project filter functions
  var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function() {
          var name = $(this).find('.name').text();
          return name.match(/ium$/);
      }
  };
  // bind filter button click
  $('.project-menu').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $grid.isotope({
          filter: filterValue
      });
  });
  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function() {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
      });
  });

  // progess-bar js //
  $('#circle').circleProgress({
      value: .75,
      size: 120,
      fill: {
          gradient: ["#FF4D12", "#FF7361"]
      }
  });

  $('#circle02').circleProgress({
      value: .75,
      size: 120,
      fill: {
          gradient: ["#00A9FF"]
      }
  });

  $('#circle03').circleProgress({
      value: .75,
      size: 120,
      fill: {
          gradient: ["#FF1AC4"]
      }
  });

  $('#circle04').circleProgress({
      value: .75,
      size: 120,
      fill: {
          gradient: ["#FF9A00"]
      }
  });
  // progess bar js end//

  // mobile menu js //
  $(document).ready(function() {
      // append plus symbol to every list item that has children
      $('#invacat-mobile-nav .parent').append('<span class="open-menu fa fa-plus"></span>');

      // fix non-scrolling overflow issue on mobile devices
      $('#invacat-mobile-nav > ul').wrap('<div class="overflow"></div>');
      $(window).on('load resize', function() {
          var vph = $(window).height() - 57; // 57px - height of #invacat-mobile-nav
          $('.overflow').css('max-height', vph);
      });

      // global variables
      var menu = $('.overflow > ul');
      var bg = $('html, body');

      // toggle background scrolling
      function bgScrolling() {
          // if menu has toggled class... *
          if (menu.hasClass('open')) {
              // * disable background scrolling
              bg.css({
                  'overflow-y': 'hidden',
                  'height': 'auto'
              });
              // if menu does not have toggled class... *
          } else {
              // * enable background scrolling
              bg.css({
                  'overflow-y': 'visible',
                  'height': '100%'
              });
          }
      }

      // menu button click events
      $('.menu-button').on('click', function(e) {
          e.preventDefault();
          // activate toggles
          menu.slideToggle(250);
          menu.toggleClass('open');
          $(this).children().toggleClass('fa-reorder fa-remove');
          bgScrolling();
      });

      // list item click events
      $('.open-menu').on('click', function(e) {
          e.preventDefault();
          $(this).prev('ul').slideToggle(250);
          $(this).toggleClass('rotate');
      });
  });

  // mobile menu js end //  

  /*==== Venubox  ====*/
  $('.venobox').venobox({
      numeratio: true,
      infinigall: true
  });
  /*==== Venubox end  ====*/

  /*==== Bootstrap Accordion  ====*/
  $('.accordion-button').each(function() {
      var $this = $(this);
      $this.on('click', function(e) {
          var has = $this.hasClass('active');
          $('.accordion-button').removeClass('active show');
          if (has) {
              $this.removeClass('active show');
          } else {
              $this.addClass('active show');
          }
      });
  });
  /*==== Bootstrap Accordion end ====*/

  /*==== scrollUp  ====*/
  $.scrollUp({
      scrollText: '<i class="fa-solid fa-arrow-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
  });

})(jQuery);