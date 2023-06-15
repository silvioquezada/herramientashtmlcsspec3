import Glide from '@glidejs/glide';

  const config = {
    type: 'carousel',
    perView: 1,
    breakpoints:{
      400:{
        perView: 1
      },
      800:{
        perView: 1
      }
    }
  };
  new Glide('.glide', config).mount();

function clickMenu(){
    document.getElementById('menu')
            .classList
            .toggle('visible');
  }

  