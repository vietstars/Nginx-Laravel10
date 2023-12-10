import React from "react";
import PropTypes from "prop-types";

import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  GlobeAsiaAustraliaIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  MegaphoneIcon,
  KeyIcon,
  ArrowLeftOnRectangleIcon,
  FingerPrintIcon,
  UserPlusIcon,
  MoonIcon,
  SunIcon
} from "@heroicons/react/24/solid";

let sign='';

const Dicon = ({ icon, className, strokeWidth }) => {

  switch(icon) {
    case 'CubeTransparent':
      sign = CubeTransparentIcon;
      break;
    case 'UserCircle':
      sign = UserCircleIcon;
      break;
    case 'CodeBracketSquare':
      sign = CodeBracketSquareIcon;
      break;
    case 'Square3Stack3D':
      sign = Square3Stack3DIcon;
      break;
    case 'ChevronDown':
      sign = ChevronDownIcon;
      break;
    case 'Cog6Tooth':
      sign = Cog6ToothIcon;
      break;
    case 'InboxArrowDown':
      sign = InboxArrowDownIcon;
      break;
    case 'Lifebuoy':
      sign = LifebuoyIcon;
      break;
    case 'Power':
      sign = PowerIcon;
      break;
    case 'RocketLaunch':
      sign = RocketLaunchIcon;
      break;
    case 'Bars2':
      sign = Bars2Icon;
      break;
    case 'CheckCircle':
      sign = CheckCircleIcon;
      break;
    case 'MapPin':
      sign = MapPinIcon;
      break;
    case 'Phone':
      sign = PhoneIcon;
      break;
    case 'Envelope':
      sign = EnvelopeIcon;
      break;
    case 'PaperAirplane':
      sign = PaperAirplaneIcon;
      break;
    case 'Banknotes':
      sign = BanknotesIcon;
      break;
    case 'Megaphone':
      sign = MegaphoneIcon;
      break;
    case 'BuildingStorefront':
      sign = BuildingStorefrontIcon;
      break;
    case 'Key':
      sign = KeyIcon;
      break;
    case 'ArrowLeftOnRectangle':
      sign = ArrowLeftOnRectangleIcon;
      break;
    case 'FingerPrint':
      sign = FingerPrintIcon;
      break;
    case 'UserPlus':
      sign = UserPlusIcon;
      break;
    case 'Sun':
      sign = SunIcon;
      break;
    case 'Moon':
      sign = MoonIcon;
      break;
    default:
      sign = GlobeAsiaAustraliaIcon;
  }

  return React.createElement(sign, {
    className: className || "h-5 w-5 mb-1 mr-2 inline-block" ,
    strokeWidth: strokeWidth,
  });
}

Dicon.defaultProps = {
  action: null,
  strokeWidth: 1,
};

Dicon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  strokeWidth: PropTypes.string,
  action: PropTypes.node,
};

Dicon.displayName = "@module/dynamic-icon.jsx";

export default Dicon;