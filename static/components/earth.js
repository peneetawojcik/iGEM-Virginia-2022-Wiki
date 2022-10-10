  const markerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M208 288C199.2 288 192 295.2 192 304v96C192 408.8 199.2 416 208 416s16-7.164 16-16v-96C224 295.2 216.8 288 208 288zM272 288C263.2 288 256 295.2 256 304v96c0 8.836 7.162 16 15.1 16S288 408.8 288 400l-.0013-96C287.1 295.2 280.8 288 272 288zM376.9 201.2c-13.74-17.12-34.8-27.45-56.92-27.45h-13.72c-3.713 0-7.412 .291-11.07 .8652C282.7 165.1 267.4 160 251.4 160h-11.44V72c0-39.7-32.31-72-72.01-72c-39.7 0-71.98 32.3-71.98 72v168.5C84.85 235.1 75.19 235.4 69.83 235.4c-44.35 0-69.83 37.23-69.83 69.85c0 14.99 4.821 29.51 13.99 41.69l78.14 104.2C120.7 489.3 166.2 512 213.7 512h109.7c6.309 0 12.83-.957 18.14-2.645c28.59-5.447 53.87-19.41 73.17-40.44C436.1 446.3 448 416.2 448 384.2V274.3C448 234.6 416.3 202.3 376.9 201.2zM400 384.2c0 19.62-7.219 38.06-20.44 52.06c-12.53 13.66-29.03 22.67-49.69 26.56C327.4 463.6 325.3 464 323.4 464H213.7c-32.56 0-63.65-15.55-83.18-41.59L52.36 318.2C49.52 314.4 48.02 309.8 48.02 305.2c0-16.32 14.5-21.75 21.72-21.75c4.454 0 12.01 1.55 17.34 8.703l28.12 37.5c3.093 4.105 7.865 6.419 12.8 6.419c11.94 0 16.01-10.7 16.01-16.01V72c0-13.23 10.78-24 23.1-24c13.22 0 24 10.77 24 24v130.7c0 6.938 5.451 16.01 16.03 16.01C219.5 218.7 220.1 208 237.7 208h13.72c21.5 0 18.56 19.21 34.7 19.21c8.063 0 9.805-5.487 20.15-5.487h13.72c26.96 0 17.37 27.43 40.77 27.43l14.07-.0037c13.88 0 25.16 11.28 25.16 25.14V384.2zM336 288C327.2 288 320 295.2 320 304v96c0 8.836 7.164 16 16 16s16-7.164 16-16v-96C352 295.2 344.8 288 336 288z"/></svg>`;

    const gData = [({
      name: "India",
      countryID: "india",
      lat: 20.5937,
      lng: 78.9629,
      size: 20,
      color: ['black']
    }), ({
      name: "China",
      countryID: "china",
      lat: 35.8617,
      lng: 104.1954,
      size: 20,
      color: ['black']
    }), ({
      name: "France",
      countryID: "france",
      desc: "",
      lat: 46.2276,
      lng: 2.2137,
      size: 20,
      color: ['black']
    }), ({
      name: "United States",
      id: "america",
      lat: 37.0902,
      lng: 360-95.7129,
      size: 20,
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
      .pointAltitude('0')
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
        mark.onclick = () => {
          const popUps = document.getElementsByClassName("popUp");
          console.log(popUps.length);

          for(i=0; i<popUps.length; i++){
            console.log(popUps[i].id);
            if(popUps[i].id == `${d.countryID}`){
              popUps[i].classList.remove('hidden');
            }
            else
            popUps[i].classList.add('hidden');
          }

        }
        
        return mark;

      })


