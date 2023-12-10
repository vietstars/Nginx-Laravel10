import React from "react";
import PropTypes from "prop-types";

//SVG
import vietnam from '@img/flags/vietnam.svg';
import japan from '@img/flags/japan.svg';
import united_states from '@img/flags/united-states.svg';
import china from '@img/flags/china.svg';
import korea from '@img/flags/korea.svg';

//JPG
import it4today from '@img/it4today.jpg';
import login from '@img/login.jpg';
import dark_login from '@img/dark-login.jpg';

//PNG

let image = '';

const Dimage = ({ img, name, className }) => {
  if (!img) return null;
  image = img;
  if (img.replace(/http:|https:/g, '') == img) {
    switch(img) {
      //SVG
      case 'korea':
        image = korea;
        break;
      case 'japan':
        image = japan;
        break;
      case 'united_states':
        image = united_states;
        break;
      case 'china':
        image = china;
        break;

      //JPG
      case 'it4today':
        image = it4today;
        break;
      case 'jpg_login':
        image = login;
        break;
      case 'jpg_dark_login':
        image = dark_login;
        break;
      //PNG

      default:
        image = vietnam;
    }
  }

  return (
    <img
      className={ className || "rounded-lg object-cover object-center" }
      src={ image }
      alt={ name }
    />
  );
}

Dimage.defaultProps = {
  action: null,
};

Dimage.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  action: PropTypes.node,
};

Dimage.displayName = "@module/dynamic-image.jsx";

export default Dimage;