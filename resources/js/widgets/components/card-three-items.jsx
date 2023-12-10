import React from "react";
import { 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {
  Dimage
} from '@widget/modules';

const CardThreeItems = ({ common, locale, mode }) => {
  const { view_more } = common;

  return (
    <Card className="mt-1 overflow-hidden rounded-t-none min-h-[700px] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto">
        <div className="mx-auto w-10/12 lg:w-full">
          <Typography variant="h6" color="indigo" className="mt-[50px] mb-4 text-indigo-600">
            Triễn khai hệ thống
          </Typography>
          <Typography 
            variant="h1" 
            color="white" 
            className={ `mb-4 font-bold dark:text-black` }
            >
            Những dự án đang phát triễn
          </Typography>
          <Typography 
            color="white" 
            className="font-normal dark:text-black"
            >
            Đã đến lúc hành động, các dự án đã sẵn sàn cho hệ sinh thái của chúng ta.
          </Typography>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[20px] lg:mt-[50px]">
          <div className="px-2 md:px-0">
            <Card className="my-6 w-full mx-auto dark:bg-black">
              <CardHeader color="blue-gray" className="relative h-56">
                <Dimage
                  img="it4today"
                  name="it4today"
                />
              </CardHeader>
              <CardBody>
                <Typography 
                  variant="h5" 
                  color="blue-gray" 
                  className={ `mb-2 dark:text-white ${ locale === "vn" ? "font-robo": ""}` }
                  >
                  It4Today.Org hệ thống điểm tin giao dịch và kiểm tra lịch sự giao dịch.
                </Typography>
                <Typography
                  className="dark:text-white"
                  >
                  Hệ thống đã được xây dựng thành công với các chức năng thông báo và trao đổi tài sản số.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button 
                  color={ mode === "light" ? "black" : "white" }
                  >
                  { view_more }
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-2 md:px-0">
            <Card className="my-6 w-full mx-auto dark:bg-black">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography 
                  variant="h5" 
                  color="blue-gray" 
                  className="mb-2 dark:text-white"
                  >
                  E-Market4u.Org hệ thống siêu thị mua bán những sản phẩm của chính bạn.
                </Typography>
                <Typography
                  className="dark:text-white"
                  >
                  Hệ thống đã được xây dựng các chức năng kiểm soát mua bán sản phẩm đển người dùng.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button 
                  color={ mode === "light" ? "black" : "white" }
                  >
                  { view_more }
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-2 md:px-0">
            <Card className="my-6 w-full mx-auto dark:bg-black">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography 
                  variant="h5" 
                  color="blue-gray" 
                  className="mb-2 dark:text-white"
                  >
                  E-Maketing4u.Org hệ thống quảng cáo nơi tập trung giới thiệu và chia sẽ các sản phẩm kinh doanh trên thị trường.
                </Typography>
                <Typography
                  className="dark:text-white"
                  >
                  Hệ thống đang được xây dựng ở giai đoạn đầu.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button 
                  color={ mode === "light" ? "black" : "white" }
                  >
                  { view_more }
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardThreeItems;