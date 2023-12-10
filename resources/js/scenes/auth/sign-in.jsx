import React from 'react';

// import { 
//   SliderBannerTop,
//   CardThreeItems,
//   CardTwoText,
//   CardTwoTextBanner,
//   CardTwoBannerText,
//   CardOneTextButton
// } from "@widget/components";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import {
  Dimage,
  Davatar
} from '@widget/modules';

import {
  useResource
} from '@context/useResource'

export const SignIn = () => {
  const { _lg, _locales, _mode, _common } = useResource();
  if ( !_locales?.current ) { return null; }
  const { signIn } = _lg;

  return(
    <section 
      className="p-2 flex gap-4 h-100vh overflow-scroll"
      >
      <div 
        className="w-5/12 h-[calc(100vh-1rem)] hidden lg:block "
        >
        <Dimage
          img={ _mode === "dark" ? "jpg_dark_login" : "jpg_login" }
          name="pattern"
          className="w-full h-full object-cover rounded-3xl 
            dark:border dark:border-white/30"
        />
      </div>
      <div 
        className="w-full lg:w-7/12 mt-3 md:mt-12"
        >
        <div 
          className="flex justify-center items-center mb-4"
          >
          <Typography
            as="a"
            href={ _common.portal_url }
            className="mr-3 cursor-pointer py-1 font-bold inline-block"
            >
            <Davatar 
              img="favicon_svg" 
              name="logo" 
              className="border-none p-0.5 mr-2 w-12 h-12" 
            />
          </Typography>
          <Typography 
            variant="h2" 
            className="font-bold"
            >
            { signIn.sign_in_title }
          </Typography>
          <Typography 
            variant="paragraph" 
            color="blue-gray dark:white" 
            className="text-lg font-normal"
            >
            { signIn.sign_in_description }
          </Typography>
        </div>
        <form 
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          >
          <div 
            className="mb-1 flex flex-col gap-6"
            >
            <div class="relative w-full min-w-[200px] h-10">
              <input
                class="
                  peer w-full h-full 
                  bg-transparent text-blue-gray-700 
                  font-normal outline outline-0 
                  focus:outline-0 disabled:bg-blue-gray-50 
                  disabled:border-0 transition-all 
                  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
                  border focus:border-2 border-t-transparent focus:border-t-transparent 
                  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=""
              />
              <label
                class="
                  flex w-full h-full select-none pointer-events-none 
                  absolute left-0 font-normal !overflow-visible truncate 
                  peer-placeholder-shown:text-blue-gray-500 leading-tight 
                  peer-focus:leading-tight peer-disabled:text-transparent 
                  peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] 
                  peer-focus:text-[11px] before:content[' '] before:block before:box-border 
                  before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                  peer-placeholder-shown:before:border-transparent 
                  before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
                  peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                  peer-disabled:before:border-transparent after:content[' '] 
                  after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                  peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
                  peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none 
                  after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] 
                  text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 
                  after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                >
                { signIn.user_name }
              </label>
            </div>
            <div class="relative w-full min-w-[200px] h-10">
              <input
                class="
                  peer w-full h-full 
                  bg-transparent text-blue-gray-700 
                  font-normal outline outline-0 
                  focus:outline-0 disabled:bg-blue-gray-50 
                  disabled:border-0 transition-all 
                  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 
                  border focus:border-2 border-t-transparent focus:border-t-transparent 
                  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=""
                type="password"
              />
              <label
                class="
                  flex w-full h-full select-none pointer-events-none 
                  absolute left-0 font-normal !overflow-visible truncate 
                  peer-placeholder-shown:text-blue-gray-500 leading-tight 
                  peer-focus:leading-tight peer-disabled:text-transparent 
                  peer-disabled:peer-placeholder-shown:text-blue-gray-500 
                  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] 
                  peer-focus:text-[11px] before:content[' '] before:block before:box-border 
                  before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 
                  peer-placeholder-shown:before:border-transparent 
                  before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
                  peer-focus:before:border-l-2 before:pointer-events-none before:transition-all 
                  peer-disabled:before:border-transparent after:content[' '] 
                  after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 
                  peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t 
                  peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none 
                  after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] 
                  text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 
                  after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                >
                { signIn.password }
              </label>
            </div>
          </div>
          <Checkbox
            color={ _mode === "light" ? "black" : "white" }
            label={
              <Typography
                variant="small"
                color="gray dark:white"
                className="flex items-center justify-start font-medium"
              >
                { signIn.pre_terms_conditions }&nbsp;
                <a
                  href="#"
                  className="font-normal text-black dark:text-white transition-colors hover:text-gray-900 underline"
                >
                  { signIn.terms_conditions }
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button 
            color={ _mode === "light" ? "black" : "white" }
            className="mt-3" 
            fullWidth
            >
            { signIn.signin_btn }
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-2 mt-3">
            <Checkbox
              color={ _mode === "light" ? "black" : "white" }
              label={
                <Typography
                  variant="small"
                  color="dark dark:white"
                  className="flex items-center justify-start font-medium"
                >
                  { signIn.subscribe_newsletter }
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Typography 
              variant="small" 
              className="font-medium text-gray-900 dark:text-white"
              >
              <a href="#">
                { signIn.forgot_password }
              </a>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            <Button 
              size="lg" 
              color={ _mode === "light" ? "white" : "black" }
              className="flex items-center gap-2 justify-center shadow-md" 
              fullWidth
              >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>
                { signIn.signin_google }
              </span>
            </Button>
            <Button 
              size="lg" 
              color={ _mode === "light" ? "white" : "black" }
              className="flex items-center gap-2 justify-center shadow-md" 
              fullWidth
              >
              <svg className="h-5 w-5" fill="currentColor" width="24" height="24" viewBox="0 0 50 50">
                <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
              </svg>
              <span>
                { signIn.signin_twitter }
              </span>
            </Button>
            <Button 
              size="lg" 
              color={ _mode === "light" ? "white" : "black" } 
              className="flex items-center gap-2 justify-center shadow-md" 
              fullWidth
              >
              <svg className="h-5 w-5" width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
              <span>
                { signIn.signin_telegram }
              </span>
            </Button>
          </div>
          <Typography 
            variant="paragraph" 
            className="text-center text-blue-gray-500 font-medium mt-4"
            >
            { signIn.not_registered }
            <Link 
              to={ _common.signup_url } 
              className="text-gray-900 dark:text-white ml-1"
              >
              { signIn.create_account }
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
