import React from "react";

import {
  Typography,
} from "@material-tailwind/react";

let infor=[]
const BottomLink = ({key, title, links , locale}) => {

  return (
    <div key={ key } className="w-full">
      <Typography
        variant="h5"
        color="white"
        className={ `mb-4 font-bold uppercase ${ locale === "vn" ? "font-robo": ""}` }
        >
        {title}
      </Typography>
      <ul className="space-y-1">
        {
          links.map(({ label, url }, index) => (
            <Typography key={ index } as="li" color="white" className="font-normal">
              <a
                href={ url }
                className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                { label }
              </a>
            </Typography>
          ))
          }
      </ul>
    </div>
  );
}

export default BottomLink;