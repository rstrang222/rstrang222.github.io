

$(document).ready(function() {

/* fade in animation */
$("#main-tile-1").fadeIn(500, "swing");
$("#main-tile-2").fadeIn(1000, "swing");
$("#main-tile-3").fadeIn(1500, "swing");
$("#main-tile-4").fadeIn(3000, "swing");

$("body").prognroll({
  //Progress bar height
  height: 3,        
  
  //Progress bar background color
  color: "#e42354",

  // If you make it true, you can add your custom div and see it's scroll progress on the page	
  custom: false     
});



/* $(".fade-in-tile").delay(1000).animate({ opacity: 1 }, 700);​
 */



  /* to show and hide portfolio items on the main page - this section is under construction - plz ignore
$("#all-projects-link").click(function() {
  console.log("all projects");
  $("#all-projects-link").addClass("portfolio-link-active");
  $("#screen-link").removeClass("portfolio-link-active");
  $("#emerging-link").removeClass("portfolio-link-active");
  $("#research-link").removeClass("portfolio-link-active");
  $("#research").fadeIn("slow");
  $("#all").fadeIn("slow");
  $("#web").fadeIn("slow");
  $("#emerging").fadeIn("slow");
});

$("#screen-link").click(function() {

  $("#all-projects-link").removeClass("portfolio-link-active");
  $("#screen-link").addClass("portfolio-link-active");
  $("#emerging-link").removeClass("portfolio-link-active");
  $("#research-link").removeClass("portfolio-link-active");
  $("#research").fadeOut();
  $("#all").fadeOut();
  $("#web").fadeIn("slow");
  $("#emerging").fadeOut();
});

$("#emerging-link").click(function() {

  $("#all-projects-link").removeClass("portfolio-link-active");
  $("#screen-link").removeClass("portfolio-link-active");
  $("#emerging-link").addClass("portfolio-link-active");
  $("#research-link").removeClass("portfolio-link-active");
  $("#research").fadeOut();
  $("#all").fadeOut();
  $("#web").fadeOut();
  $("#emerging").fadeIn("slow");
});

$("#research-link").click(function() {

  $("#all-projects-link").removeClass("portfolio-link-active");
  $("#screen-link").removeClass("portfolio-link-active");
  $("#emerging-link").removeClass("portfolio-link-active");
  $("#research-link").addClass("portfolio-link-active");
  $("#research").fadeIn("slow");
  $("#all").fadeOut();
  $("#web").fadeOut();
  $("#emerging").fadeOut();
});

*/

/* to retrieve and create the blog entries in the blog section of the landing page */
  $.ajax({
    url: 'https://api.rss2json.com/v1/api.json',
    method: 'GET',
    dataType: 'json',
    data: {
        rss_url: 'https://medium.com/feed/@pathikritbhattacharyya',
        api_key: 'vcehmuce3rdqrmirmnwsocpcpewz5fyqegklmfah',
        count: 6
    }
  }).done(function (response) {
  if(response.status != 'ok'){ throw response.message; }

  console.log('====== ' + response.feed.title + ' ======');
  var output = '';
  for(var i in response.items){
      var item = response.items[i];
      var title = item.title;
      var subheading = item.content;
      subheading = subheading.substring(0, subheading.indexOf("/p") + 3);
      var description = item.content.substring(subheading.indexOf("/p") + 3);
      description = description.substring(description.indexOf("<p>"));
      description = description.substring(0, description.indexOf(".", 180)) + "...";
      var date = dateFormat(item.pubDate);
      var image = item.content;
      image = image.substring(image.indexOf("src=") + 5);
      image = image.substring(0, image.indexOf('"'));
      console.log(response.items[i]);
      
      output += '<div id="blog-end" class="col-12 col-md-6">';
      output += '<div class="blog-post"><header>';
      output += '<a target="_blank" id="link-blog" href="'+ item.link + '"><h6 class="date">' + date + "</h6>";
      output += '<div class="blog-element"><div class="embed-responsive embed-responsive-21by9"><img style = "object-fit: cover" class="embed-responsive-item" src="' + image + '"></div></div></header>';
      output += '<div class="blog-content"><h3 id="content-heading" style="text-transform: capitalize; line-height: 1.4em;">' + title + '</h3>';
      output += '<p>' + description + '</p>';
      output += '</a></div></div></div>';
  }
  $("#article").html(output);
  });

});

/* to reformat the date in the JSON file retrieved from the API call to rss2json */
function dateFormat(raw) {
   var monthRaw, month, day, year;
   day = raw.substring(8,10);
   monthRaw = raw.substring(5,7);
   year = "\'" + raw.substring(2,4);
   if (monthRaw == "01")
    month = "Jan";
   else if (monthRaw == "02")
    month = "Feb";
  else if (monthRaw == "03")
    month = "Mar";
  else if (monthRaw == "04")
    month = "Apr";
  else if (monthRaw == "05")
    month = "May";
  else if (monthRaw == "06")
    month = "Jun";
  else if (monthRaw == "07")
    month = "Jul";
  else if (monthRaw == "08")
    month = "Aug";
  else if (monthRaw == "09")
    month = "Sep";
  else if (monthRaw == "10")
    month = "Oct";
  else if (monthRaw == "11")
    month = "Nov";
  else if (monthRaw == "12")
    month = "Dec";
  var date = day + " " + month + " " + year;
  return date;
  }

  // scroll back to top
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  $("#hamburger-menu").click(function() {
    $(".hamburger").toggleClass("is-active");
    setTimeout(function() { checkState(); }, 1500);

  });
  
  $("#menu-item1").click(function() {
    $(".hamburger").toggleClass("is-active");
    setTimeout(function() { checkState(); }, 1500);

  });

  $("#menu-item2").click(function() {
    $(".hamburger").toggleClass("is-active");
    setTimeout(function() { checkState(); }, 1500);

  });

  $("#menu-item3").click(function() {
    $(".hamburger").toggleClass("is-active");
    setTimeout(function() { checkState(); }, 1500);

  });

  $("#menu-item4").click(function() {
    $(".hamburger").toggleClass("is-active");
    setTimeout(function() { checkState(); }, 1500);

  });

  $("#menu-item5").click(function() {
    $(".hamburger").removeClass("is-active");

  });

  $("#menu-item6").click(function() {
    $(".hamburger").removeClass("is-active");
  });

  $("#menu-item-logo").click(function() {
    $(".hamburger").removeClass("is-active");

  });




// Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

// Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 80) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict

function checkState() {
  if ($("#navbarResponsive").hasClass("show")) {
    $(".hamburger").addClass("is-active");
  } else { 
    $(".hamburger").removeClass("is-active");
  };
};

