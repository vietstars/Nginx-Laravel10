import React from "react";
import { 
  Card,
  Typography,
} from "@material-tailwind/react";

const CardTwoText = (props) => {

  return (
    <Card className="mt-3 rounded-none shadow-none dark:bg-black">
      <div className="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[10px] lg:mt-[50px] dark:bg-black">
          <div className="p-2 lg:p-0">
            <Typography variant="h1" color="green" className="mb-2 text-green-500 text-center lg:text-right">
              23k+
            </Typography>
            <Typography 
              className="mb-4 text-center lg:text-right font-bold dark:text-white"
              >
              Create a professional-looking website without having to spend hours or even days designing and coding it.
            </Typography>
          </div>
          <div className="p-2 lg:p-0">
            <Typography 
              variant="h1" 
              className="
                mb-2 text-blue-gray dark:text-white 
                text-center lg:text-left"
              >
              Devs and startups are already using Webpixels
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardTwoText;
