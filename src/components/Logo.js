import React from 'react';
import teabag from './../assets/tea-bag.jpg'; // Tell webpack this JS file uses this image

function Header() {
  // Import result is the URL of your image
  return <img src={teabag} alt="Logo" />;
}

export default Header;