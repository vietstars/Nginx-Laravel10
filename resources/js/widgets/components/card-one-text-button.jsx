import React from "react";
import { 
  Card,
  Typography,
  Button
} from "@material-tailwind/react";

const CardOneTextButton = ({ locale }) => {

  return (
    <Card className="mt-[50px] lg:mt-[100px] rounded-none shadow-none p-2 lg:p-0 dark:bg-black">
      <div className="container mx-auto">
         <div 
           class="
             rounded-xl flex items-center justify-center 
             min-h-[400px] py-[30px] w-full 
             bg-gradient-to-r from-blue-gray-800 to-gray-500"
             >
          <div className="lg:w-2/3">
            <Typography 
              variant="h1" 
              color="white"
              className={`mb-4 text-center font-bold ${ locale === "vn" ? "font-robo": ""}`}
              >
              Chính bạn là chủ của hệ thống này! Chúng tôi cần bạn.
            </Typography>
            <Typography 
              variant="lead" 
              color="white"
              className="mb-2 text-center"
              >
              Câu chuyện cần câu và con cá, chúng tôi có cần câu, con cá và chúng tôi hiểu giá trị của sức lao động. Chúng tôi đã sẵn sàng còn bạn?
            </Typography>
            <div 
              className="flex justify-center"
              >
              <Button 
                className="mt-[20px] flex items-center gap-2 justify-center shadow-md"
                >
                Tham gia!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardOneTextButton;
