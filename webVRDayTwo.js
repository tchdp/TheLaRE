var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'PANO_20170812_141844_5.jpg',
    is_stereo: false,
    is_autopan_off: true,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: -5,
    yaw: -125,
    radius: 0.10,
    distance: 1
  });
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    vrHomePage.setContent({
        image: 'PANO_20170812_142036_6.jpg',
        is_stereo: true
    });
  }
});
