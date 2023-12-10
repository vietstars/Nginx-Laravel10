import React from "react";
import { 
  Card,
  Typography,
  List,
  ListItem
} from "@material-tailwind/react";

import {
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const CardTwoTextBanner = (props) => {

  return (
    <Card className="mt-[10px] lg:mt-[100px] rounded-none shadow-none dark:bg-black">
      <div className="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 dark:bg-black">
          <div className="p-2 lg:p-0">
            <Typography 
              variant="h6" 
              color="indigo" 
              className="mt-[50px] mb-4 text-indigo-600"
              >
              SPEED
            </Typography>
            <Typography 
              variant="h1" 
              className="mb-4 font-bold dark:text-white"
              >
              Build a new website in hours, not weeks
            </Typography>
            <Typography 
              variant="lead" 
              className="mb-4 font-normal md:text-right dark:text-white"
              >
              Instead of starting from scratch, you can use our template to quickly create a professional-looking website without having to spend hours or even days designing and coding it.
            </Typography>
            <List>
              <ListItem className="rounded-full lg:justify-end">
                {React.createElement(CheckCircleIcon, { className: "md:hidden text-green-500 h-[18px] w-[18px] mr-2" })} 
                Quickly create a professional-looking website
                {React.createElement(CheckCircleIcon, { className: "hidden md:block text-green-500 h-[18px] w-[18px] ml-2" })}
              </ListItem>
              <ListItem className="rounded-full lg:justify-end">
                {React.createElement(CheckCircleIcon, { className: "md:hidden text-green-500 h-[18px] w-[18px] mr-2" })}
                Well designed elements and pages
                {React.createElement(CheckCircleIcon, { className: "hidden md:block text-green-500 h-[18px] w-[18px] ml-2" })}
              </ListItem>
              <ListItem className="rounded-full lg:justify-end">
                {React.createElement(CheckCircleIcon, { className: "md:hidden text-green-500 h-[18px] w-[18px] mr-2" })}
                Professional-looking website quickly and affordably
                {React.createElement(CheckCircleIcon, { className: "hidden md:block text-green-500 h-[18px] w-[18px] ml-2" })}
              </ListItem>
            </List>
          </div>
          <div className="p-2 lg:p-0">
            <div 
              className="
                rounded-lg shadow-lg pt-[10px] lg:pt-[30px] 
                pl-[10px] lg:pl-[30px] 
                flex items-end justify-end 
                bg-gradient-to-r from-cyan-500 to-blue-500"
              >
              <img
                src="https://satoshi.webpixels.io/img/marketing/shot-2.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardTwoTextBanner;
