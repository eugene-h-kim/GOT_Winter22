(() => {
  // collect the elements we need to interact with
  const sigils = document.querySelectorAll('.sigilContainer'),
        lightBox = document.querySelector('.lightbox'),
        houseVideo = lightBox.querySelector('video'),
        lbClose = lightBox.querySelector('.close'),
        theBanner = document.querySelector('#houseImages');

  // functions go here
  function popLightBox () {
    // debugger;
    lightBox.classList.add('show-lightbox');
    houseVideo.play();
  }

  function closeLightBox () {
    lightBox.classList.remove('show-lightbox');
    houseVideo.pause();
    houseVideo.currentTime = 0;
  }

  function animateBanners () {
    // figure out how much to move the banner images
    let bannerWidth = 600,
        offset = this.dataset.offset;

    let finalAmount = bannerWidth * offset;

    theBanner.style.right = finalAmount + 'px';

    console.log(finalAmount);
  }

  // add event handling
  // sigils.forEach(sigil => sigil.addEventListener('click', popLightBox));
  sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

  // close the lightbox when the video reaches its end
  houseVideo.addEventListener('ended', closeLightBox);
  lbClose.addEventListener('click', closeLightBox);
})();