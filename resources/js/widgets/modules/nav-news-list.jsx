import React from "react";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Card,
  Typography
} from "@material-tailwind/react";

import {
  Dicon,
} from '@widget/modules';

import {
  useResource
} from '@context/useResource';

const navListMenuItems = [
  {
    title: "@It4Today/main page portal",
    description:
      "Triển khai nâng cấp chính thức cho hệ thống It4Today, các chức năng.",
  },
  {
    title: "@It4Today/news page portal",
    description:
      "Triển khai xây dụng trang tin tức cho hệ sinh thai It4Today.",
  },
  {
    title: "@It4Today/maketing page portal",
    description:
      "Triển khai xây dựng trang quảng cáo cho hệ sinh thai It4Today.",
  },
];

const NavNewsList = () => {
  const { _lg } = useResource();
  if (!_lg) { return null; }
  const { menuTop } = _lg;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ title, description }) => (
      <a href="#" key={ title } >
        <MenuItem>
          <Typography 
            variant="h6" 
            color="blue-gray" 
            className="mb-1 dark:text-white"
            >
            { title }
          </Typography>
          <Typography 
            variant="small" 
            color="gray" 
            className="font-normal dark:text-white"
            >
            { description }
          </Typography>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu allowHover open={ isMenuOpen } handler={ setIsMenuOpen }>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="
              hidden outline-none items-center gap-2
              font-medium text-blue-gray-900 dark:text-white
              lg:flex lg:rounded-full"
              >
              <Dicon icon="Square3Stack3D" 
                className="h-[18px] w-[18px] text-blue-gray-500 dark:text-white" 
                strokeWidth={1} 
                />
                {" "} { menuTop.news } {" "}
              <Dicon icon="ChevronDown" 
                className={`h-3 w-3 transition-transform dark:text-white 
                  ${
                    isMenuOpen ? "rotate-180" : ""
                  }
                `}
                strokeWidth={2} 
                />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList 
          className="
            hidden w-[36rem] grid-cols-7 gap-3 
            overflow-visible lg:grid dark:bg-black dark:border-white/30"
          >
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="
              col-span-3 grid h-full w-full 
              place-items-center rounded-md"
            >
            <Dicon 
              icon="RocketLaunch" 
              className="h-28 w-28" 
              strokeWidth={1} 
            />
          </Card>
          <ul 
            className="ml-0 col-span-4 flex w-full flex-col gap-1 dark:bg-black">
            { renderItems }
          </ul>
        </MenuList>
      </Menu>
      <MenuItem 
        className="
          flex items-center gap-2 
          font-medium text-blue-gray-900 
          lg:hidden"
        >
        <Dicon icon={ menuTop.news_icon } 
          className="h-[18px] w-[18px] text-blue-gray-500" 
          strokeWidth={1} 
          />
        {" "} { menuTop.news } {" "}
      </MenuItem>
      <ul className="ml-6 flex w-11/12 flex-col gap-1 lg:hidden">
        { renderItems }
      </ul>
    </React.Fragment>
  );
}

export default NavNewsList;