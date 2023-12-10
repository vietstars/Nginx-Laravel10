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

const CardTwoBannerText = (props) => {

  return (
    <Card className="mt-[50px] lg:mt-[100px] rounded-none shadow-none dark:bg-black">
      <div className="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 dark:bg-black">
          <div className="p-2 lg:p-0">
            <div className="rounded-lg shadow-lg pt-[10px] lg:pt-[30px] pr-[10px] lg:pr-[30px] flex items-end justify-end bg-gradient-to-r from-pink-500 to-yellow-500">
              <img
                src="https://satoshi.webpixels.io/img/marketing/shot-2.png"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="p-2 lg:p-0">
            <Typography 
              variant="h6" 
              color="orange" 
              className="mt-[50px] mb-4 text-orange-600"
              >
              CUSTOMIZATION
            </Typography>
            <Typography 
              variant="h1" 
              className="mb-4 font-bold dark:text-white"
              >
              We focus on making everything customizable
            </Typography>
            <Typography 
              variant="lead" 
              className="mb-4 font-normal dark:text-white"
              >
              Change the colors, fonts, and images to suit your brand and style. This allows you to create a website that is unique and reflects your business, without having to know how to code or design from scratch.
            </Typography>
            <List>
              <ListItem className="rounded-full">
                {React.createElement(CheckCircleIcon, { className: "text-green-500 h-[18px] w-[18px] mr-2" })} 
                Change colors in seconds
              </ListItem>
              <ListItem className="rounded-full">
                {React.createElement(CheckCircleIcon, { className: "text-green-500 h-[18px] w-[18px] mr-2" })} 
                Choose the font family of your choice
              </ListItem>
              <ListItem className="rounded-full">
                {React.createElement(CheckCircleIcon, { className: "text-green-500 h-[18px] w-[18px] mr-2" })} 
                Mix and match components as you need
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardTwoBannerText;
