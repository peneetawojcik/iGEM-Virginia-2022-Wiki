  const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 144c0 79.5-64.5 144-144 144S32 223.5 32 144S96.5 0 176 0s144 64.5 144 144zM176 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM144 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>`;

    const gData = [({
      lat: 39.0119,
      lng: 98.4842,
      size: 30,
      color: ['black']
    }), ({
      // Europe
      lat: 54.5260,
      lng: 15.2551,
      size: 30,
      color: ['black']
    })];

    const globeDOM = document.querySelector("[data-js-globe]");

    const myGlobe = Globe({});
    myGlobe(globeDOM);
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.5;
    myGlobe.controls().enableZoom = false;


    window.addEventListener('resize', (event) => {
      myGlobe.width([event.target.innerWidth])
      myGlobe.height([event.target.innerHeight])
    });

    myGlobe
      .globeImageUrl('https://static.igem.wiki/teams/4477/wiki/images/earthnight.jpg')
      .bumpImageUrl('https://static.igem.wiki/teams/4477/wiki/images/earth-topology.png')
      .backgroundColor("rgba(0,0,0,0)")
      .pointAltitude('size')
      .pointColor('color')
      .showAtmosphere(true)
      .atmosphereColor("rgb(77, 121, 255, 0.51)")

      .htmlElementsData(gData)
      .htmlElement(d => {

        const mark = document.createElement('div');
        mark.innerHTML = markerSvg;
        mark.style.color = d.color
        mark.style.width = `${d.size}px`;
        mark.style['pointerEvents'] = 'auto';
        mark.style.cursor = 'pointer';
        mark.onclick = () => console.log('clicked marker');

        return mark;

      })

  window.addEventListener("scroll", function() {
    var div = document.getElementById("earth-section");
    if (div.scrollHeight > div.clientHeight) {
        myGlobe.pauseAnimation();
    }

    if(div.scrollHeight <= div.clientHeight){
      myGlobe.resumeAnimation();
    }
  });


