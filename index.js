$(document).ready(function () {
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#menu ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}

$('.hidden').removeClass('hidden').hide();
$('.toggle-text').click(function() {
  $(this).find('span').each(function() { $(this).toggle(); });
});

function success() {
  if (document.getElementById('message').value === "") {
    document.getElementById('submit').disabled = true;
  }
  else {
    document.getElementById('submit').disabled = false;
  }
}

$('#gform').on('submit', function(e) {
  $('#gform')[0].reset();
  $('#after-submit').show();
});
