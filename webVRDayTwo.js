var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'pic1.jpg',
    is_stereo: true,
    is_autopan_off: true,
    is_yaw_only: true
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: -5,
    yaw: -125,
    radius: 0.10,
    distance: 1
  });
    
  vrHomePage.addHotspot('creating-hotspot-2', {
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    vrHomePage.setContent({
        image: 'pic2.jpg'
    });
  }
    if (event.id == 'creating-hotspot-2'){
    vrHomePage.setContent({
        image: 'pic3.jpg'
    });
  }
});
