import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Slideshow', {
      photos: [
        {uri: './Virtual Tour/selfportrait.jpg', title: 'Self Portrait', format: '2D'},
        {uri: './static_assets/stars.jpg', title: 'Starry Night', format: '2D'},
        {uri: './static_assets/sunflowers.jpg', title: 'Sunflowers', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};