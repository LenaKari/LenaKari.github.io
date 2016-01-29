$(document).load(function() { navigateTo('home'); } );

var navigateTo = function (page) {
  $('body').fadeOut('400', function() {

    setTimeout(function() {
      $('body').scrollTop(0);
      var pages = ['about', 'application', 'contact', 'disclaimer', 'home', 'references', 'services'];

      // Changes to navbar
      $(".navbar-nav li").removeClass("active");
      $("#navigation-" + page).addClass("active");

      // Hide the existing page
      for(var i=0; i < pages.length; i++) {
        $('#' + pages[i]).hide();
      }

      // Show the selected page
      $('#' + page).show();

      // Set the footer based on the page selected
      if(page === "disclaimer") {
        $('#posters').hide();
      } else {
        $('#posters').show();
        if(page === 'home' || page === 'services' || page === 'contact') {
          $('#posters').removeClass('hall-of-fame');
        } else {
          $('#posters').addClass('hall-of-fame');
        }
      }


      // Repopulate text data
      if($('#german-select').hasClass('selected')) {
        setLanguage('german');
      } else {
        setLanguage('english');
      }

      setTimeout(function() {
        $('body').fadeIn('400');
      }, 100);

    }, 100);

  });




};

// Collapse nav menu when clicked
$('.nav a').on('click', function(){
    $('.btn-navbar').click();
    $('.navbar-toggle').click();
});

// Toggle chevron on references
var toggleReferenceYear = function(panelID) {
  if($('#' + panelID + ' i:first').hasClass('fa-chevron-down')) {
    $('#' + panelID + ' i:first').removeClass('fa-chevron-down');
    $('#' + panelID + ' i:first').addClass('fa-chevron-right');
  } else {
    $('#' + panelID + ' i:first').removeClass('fa-chevron-right');
    $('#' + panelID + ' i:first').addClass('fa-chevron-down');
  }
};

// Swipe for #videoCarousel
$('#videoCarousel').on('swiperight', function() { $('#video-carousel-left').click(); });
$('#videoCarousel').on('swipeleft', function() { $('#video-carousel-right').click(); });

// Swipe for photo slideshow

$('#myModal').on('swiperight', function() { $('#about-us-left').click(); });
$('#myModal').on('swipeleft', function() { $('#about-us-right').click(); });
