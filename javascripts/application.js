function toggleContent(menu_link) {
  $('.content').hide();
  $('ul#navigation li a').removeClass('selected');
  jQuery(menu_link).addClass('selected');
  var div = menu_link.href.split('#')[1];
  $('.' + div).show();
  true;
}

$(function(){
  $('#slides').slides({
    preload: true,
    preloadImage: 'images/slides/loading.gif',
    play: 5000,
    pause: 2500,
    hoverPause: true
  });
});
