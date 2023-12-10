import React from "react";
import PropTypes from "prop-types";

import {
  Avatar,
} from "@material-tailwind/react";

import favicon_svg from '@img/favicon.svg';

let image = '';

const Davatar = ({ img, name, className }) => {
  if (!img) return null;
  image = img;
  if (img.replace(/http:|https:/g, '') == img) {
    switch(img) {
      case 'favicon_svg':
        image = favicon_svg;
        break;
      default:
        image = favicon_svg;
    }
  }

  return (
    <Avatar
      variant="circular"
      size="sm"
      className={ className || "border-none p-0.5 mr-2 mb-2" }
      src={ image }
      alt={ name }
    />
  );
}

Davatar.defaultProps = {
  action: null,
};

Davatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  action: PropTypes.node,
};

Davatar.displayName = "@module/dynamic-avatar.jsx";

export default Davatar;