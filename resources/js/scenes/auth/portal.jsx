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

export const Portal = () => {
  const { _lg, _locales, _mode } = useResource();
  if ( !_locales?.current ) { return null; }

  return(
    <>
      <SliderBannerTop autoplayDelay={ 10000 } />
      <CardThreeItems locale={ _locales?.current } common={ _lg?.common} mode={ _mode } />
      <CardTwoText />
      <CardTwoTextBanner />
      <CardTwoBannerText />
      <CardOneTextButton locale={ _locales?.current } />
    </>
  );
}

export default Portal;
