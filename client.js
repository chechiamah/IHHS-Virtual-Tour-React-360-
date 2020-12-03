import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Slideshow', {
      photos: [
        {uri: './Virtual Tour Pics/aud.png', title: 'IHHS Auditorium', format: '2D'},
        {uri: './Virtual Tour Pics/field.png', title: 'IH Field', format: '2D'},
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};
