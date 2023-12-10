import React from "react";

import {
  useResource
} from '@context/useResource';

import {
  Typography,
} from "@material-tailwind/react";

import {
  Davatar,
  Dicon,
} from '@widget/modules';
let infor=[]
const CompanyInformation = () => {
  const { _lg } = useResource();
  const { common, footer, companyInfo } = _lg ? _lg : {};

  infor.chunk(companyInfo, 2, ['text', 'icon']);

  return (
    <div className="w-full col-span-2">
      <Typography
        variant="h4"
        color="white"
        className={ common?.locale === "vi"? "font-robo mb-4 font-bold uppercase" : "mb-4 font-bold uppercase" }
      >
        <Davatar img={ footer?.company_logo } name="logo" />
        { footer?.company_title }
      </Typography>
      <ul className="space-y-1 pl-5">
        { 
          infor.map((info, key) => ( 
            <Typography as="li" color="white" className="font-normal" key={key}>
              <div
                className="
                  inline-block 
                  py-1 pr-2 
                  cursor-default 
                  transition-transform 
                  hover:scale-105"
                >
                <Dicon icon={ info.icon } />
                { info.text }
              </div>
            </Typography>
          ))
        }
      </ul>
    </div>
  );
}

export default CompanyInformation;