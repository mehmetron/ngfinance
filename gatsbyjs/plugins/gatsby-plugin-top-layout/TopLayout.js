import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import 'assets/css/index.css';

import 'swiper/css/swiper.min.css';
import 'aos/dist/aos.css';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <meta
        name="description"
        content="A modern design system for your new landing and web pages."
        />
        <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
        property="og:image"
        content="https://thefront.maccarianagency.com/assets/social.png"
        />
        <meta
        property="og:title"
        content="theFront | UI Kit by Maccarian Agency."
        />
        <meta
        property="og:description"
        content="A modern design system for your new landing and web pages."
        />
        <meta property="og:url" content="https://thefront.maccarianagency.com/" />
        <link
        href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
        rel="stylesheet"
        />
        <script
        src="https://kit.fontawesome.com/4c273e6d43.js"
        crossOrigin="anonymous"
        ></script>
      </Helmet>
      {props.children}
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
