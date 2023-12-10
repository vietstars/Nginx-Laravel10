import React from 'react';

// import { 
//   SliderBannerTop,
//   CardThreeItems,
//   CardTwoText,
//   CardTwoTextBanner,
//   CardTwoBannerText,
//   CardOneTextButton
// } from "@widget/components";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import {
  Dimage,
  Davatar,
} from '@widget/modules';

import {
  useResource
} from '@context/useResource'

export const SignUp = () => {
  const { _lg, _locales, _mode } = useResource();
  if ( !_locales?.current ) { return null; }

  return(
    <>
      hello world! signup
    </>
  );
}

export default SignUp;
