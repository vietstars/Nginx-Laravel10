import React from 'react';

import { 
  SliderBannerTop,
  CardThreeItems,
  CardTwoText,
  CardTwoTextBanner,
  CardTwoBannerText,
  CardOneTextButton
} from "@widget/components";

import {
  useResource
} from '@context/useResource'

export const Market = () => {
  const { _lg, _locales, _mode } = useResource();
  if ( !_locales?.current ) { return null; }

  return(
    <>
      hello wolrd! market!
    </>
  );
}

export default Market;
