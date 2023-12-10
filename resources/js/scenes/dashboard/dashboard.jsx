import React from 'react';
import { 
  Button, 
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Navbar,
  IconButton,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  List,
  ListItem,
  Input
} from "@material-tailwind/react";

import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import favicon_svg from '@img/favicon.svg';

const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography variant="small" className="font-normal">
            <MenuItem className="hidden outline-none items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 

const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Ecosystem",
    links: ["E-trading", "E-market", "E-maketing", "E-learning", "E-medicare", "E-laws", "E-healthy"],
  },
  {
    title: "Support Center",
    links: ["X-(Twitter)", "Telegram", "Facebook", "GitHub", "Contact Us"],
  },
];
 
const currentYear = new Date().getFullYear();

const Dashboard = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);

    const [email, setEmail] = React.useState("");
    const [valid, setValid] = React.useState(false);
    const onChange = ({ target }) => {
      setEmail(target.value);
      setValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(target.value));
    }

  return(
    <div className="p-1 lg:p-2">
      <div className="fixed top-2 lg:top-4 z-10 w-full px-5">
        {/*===========*/}
        <Navbar className="sticky top-0 z-10 mx-auto max-w-screen-xl p-2 md:rounded-full lg:pl-6">
          <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 ml-2 cursor-pointer py-1 font-bold"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border-none p-0.5 mr-2"
                src={ favicon_svg }
              />
              IT4TODAY
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              color="blue-gray"
              variant="text"
              onClick={toggleIsNavOpen}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars2Icon className="h-6 w-6" />
            </IconButton>
     
            <Button size="sm" variant="text">
              <span>Log In</span>
            </Button>
            <ProfileMenu />
          </div>
          <Collapse open={isNavOpen} className="overflow-scroll">
            <NavList />
          </Collapse>
        </Navbar>
        {/*=========*/}
      </div>
      {/*===========*/}
      <Carousel
        className="rounded-xl rounded-b-none"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={ false }
        nextArrow={ false }
        autoplay={ true }
        loop={ true }
        >
        <img
          alt="nature"
          className="h-[800px] w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-[800px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-[800px] w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-[800px] w-full object-cover"
        />
      </Carousel>
      {/*===========*/}
      <Card className="mt-1 overflow-hidden rounded-t-none min-h-[700px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto">
          <div className="mx-auto w-10/12 lg:w-full">
            <Typography variant="h6" color="indigo" className="mt-[50px] mb-4 text-indigo-600">
              HOW IT WORKS
            </Typography>
            <Typography variant="h1" color="white" className="mb-4 font-bold">
              It's time to take action
            </Typography>
            <Typography color="white" className="font-normal">
              Satoshi offers you the unique chance to discover the companies that have your data and reclaim it.
            </Typography>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[20px] lg:mt-[50px]">
            <div>
              <Card className="my-6 w-96 mx-auto">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Created with the latest technologies
                  </Typography>
                  <Typography>
                    We ensure our code is not just efficient and robust, but also highly adaptable and intuitive for developers.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Read More</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="my-6 w-96 mx-auto">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Built by developers for developers
                  </Typography>
                  <Typography>
                    You require not just a theme, but also exceptional tools to streamline the building and customization process.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Read More</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="my-6 w-96 mx-auto">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Made for great first impressions
                  </Typography>
                  <Typography>
                    Our theme is lighter and faster compared to the majority of themes available, delivering enhanced value for less.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </Card>
      {/*==========*/}
      <Card className="mt-3 rounded-none shadow-none">
        <div className="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[10px] lg:mt-[50px]">
            <div className="p-2 lg:p-0">
              <Typography variant="h1" color="green" className="mb-2 text-green-500 text-center lg:text-right">
                23k+
              </Typography>
              <Typography color="blue-gray" className="mb-4 text-center lg:text-right font-bold">
                Create a professional-looking website without having to spend hours or even days designing and coding it.
              </Typography>
            </div>
            <div className="p-2 lg:p-0">
              <Typography variant="h1" color="blue" className="mb-2 text-blue-gray text-center lg:text-left">
                Devs and startups are already using Webpixels
              </Typography>
            </div>
          </div>
        </div>
      </Card>
      {/*=======*/}
      <Card className="mt-[10px] lg:mt-[100px] rounded-none shadow-none">
        <div className="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-2 lg:p-0">
              <Typography variant="h6" color="indigo" className="mt-[50px] mb-4 text-indigo-600">
                SPEED
              </Typography>
              <Typography variant="h1" color="blue-gray" className="mb-4 font-bold">
                Build a new website in hours, not weeks
              </Typography>
              <Typography variant="lead" color="blue-gray" className="mb-4 font-normal md:text-right">
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
              <div className="rounded-lg shadow-lg pt-[10px] lg:pt-[30px] pl-[10px] lg:pl-[30px] flex items-end justify-end bg-gradient-to-r from-cyan-500 to-blue-500">
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
      {/*=======*/}
      <Card className="mt-[50px] lg:mt-[100px] rounded-none shadow-none">
        <div className="container mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
              <Typography variant="h6" color="orange" className="mt-[50px] mb-4 text-orange-600">
                CUSTOMIZATION
              </Typography>
              <Typography variant="h1" color="blue-gray" className="mb-4 font-bold">
                We focus on making everything customizable
              </Typography>
              <Typography variant="lead" color="blue-gray" className="mb-4 font-normal">
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
      {/*=======*/}
      <Card className="mt-[50px] lg:mt-[100px] rounded-none shadow-none p-2 lg:p-0">
        <div className="container mx-auto">
           <div class="rounded-xl flex items-center justify-center min-h-[400px] py-[30px] w-full bg-gradient-to-r from-blue-gray-800 to-gray-500">
            <div className="lg:w-2/3">
              <Typography variant="h1" color="white" className="mb-4 text-center font-bold">
                Ready to get started?
              </Typography>
              <Typography variant="lead" color="white" className="mb-2 text-center">
                Save time and money while getting more productive than ever before. Kickstart your development process now.
              </Typography>
              <div className="flex justify-center">
                <Button className="text-white mt-[20px] rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/*=======*/}
      <Card className="mt-[50px] lg:mt-[100px] rounded-t-none shadow-none bg-gradient-to-r from-blue-gray-800 to-gray-500">
        <footer className="relative w-full">
          <div className="mx-auto w-full px-8">
            <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-7">
              <div className="w-full col-span-2">
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-4 font-bold uppercase"
                >
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border-none p-0.5 mr-2 mb-2"
                    src={ favicon_svg }
                  />
                  it4today co.,ltd.
                </Typography>
                <ul className="space-y-1 pl-5">
                    <Typography as="li" color="white" className="font-normal">
                      <div
                        className="inline-block py-1 pr-2 cursor-default transition-transform hover:scale-105"
                        >
                        {React.createElement(MapPinIcon, {
                          className: `h-5 w-5 mb-1 mr-2 inline-block`,
                          strokeWidth: 2,
                        })}
                        86/23 TX38, 12 District, HCM
                      </div>
                    </Typography>
                    <Typography as="li" color="white" className="font-normal">
                      <div
                        className="inline-block py-1 pr-2 cursor-default transition-transform hover:scale-105"
                      >
                        {React.createElement(PhoneIcon, {
                          className: `h-5 w-5 mb-1 mr-2 inline-block`,
                          strokeWidth: 2,
                        })}
                        +84 097 88 58 18 25
                      </div>
                    </Typography>
                    <Typography as="li" color="white" className="font-normal">
                      <div
                        className="inline-block py-1 pr-2 cursor-default transition-transform hover:scale-105"
                      >
                        {React.createElement(EnvelopeIcon, {
                          className: `h-5 w-5 mr-2 inline-block`,
                          strokeWidth: 2,
                        })}
                        support@it4today.org
                      </div>
                    </Typography>
                </ul>
              </div>
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-4 font-bold uppercase"
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <Typography key={key} as="li" color="white" className="font-normal">
                        <a
                          href="#"
                          className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </a>
                      </Typography>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-2 w-full">
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-4 font-bold uppercase"
                >
                  SUBSCRIBE TO OUR NEWSLETTER!
                </Typography>
                <ul className="space-y-1">
                    <Typography as="li" color="white" className="font-normal">
                      Subscribe to our newsletter and stay updated
                    </Typography>
                    <Typography as="li">
                      <div className="relative flex w-full max-w-[24rem] pt-3 mt-2 overflow-hidden rounded-e-full">
                        <Input
                          variant="standard"
                          type="email"
                          label="Email Address"
                          value={email}
                          onChange={onChange}
                          className="pr-20 rounded-e-full"
                          containerProps={{
                            className: "min-w-0",
                          }}
                          color="white"
                        />
                        <Button
                          size="sm"
                          color={ email ? "orange" : "white" }
                          disabled={ !valid }
                          className={ valid ? "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 !absolute right-1 top-1 rounded-full mt-3 mr-1" : "!absolute right-1 top-1 rounded-full mt-3 mr-1" }
                        >
                          {React.createElement(PaperAirplaneIcon, {
                            className: `h-5 w-5`,
                            strokeWidth: 2,
                          })}
                        </Button>
                      </div>
                    </Typography>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-gray-50 rounded-b-lg py-4 bg-blue-gray-800">
            <div className="container mx-auto flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-white md:mb-0"
                >
                &copy; {currentYear} <a href="https://it4today.org/">IT4TODAY</a>. All
                Rights Reserved. Designed & developed by Ben Thai.
              </Typography>
              <div className="flex gap-4 text-white sm:justify-center">
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z" />
                  </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                  {/*<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
                  <svg className="h-5 w-5" fill="currentColor" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                  </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
                <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                  <svg className="h-5 w-5" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                </Typography>
              </div>
            </div>
          </div>
        </footer>
      </Card>
      {/*=======*/}
    </div>
  );
}

export default Dashboard;
