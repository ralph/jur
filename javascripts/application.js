function toggleContent(name) {
  $('.content').hide()
  $(name).show()
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
