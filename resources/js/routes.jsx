import { Dashboard } from "@page/dashboard";

import { 
  Portal,
  Market,
  SignUp,
  SignIn
} from "@page/auth";

import {
  Dicon,
} from '@widget/modules';

const icon = {
  className: "w-5 h-5 text-inherit",
};

const routers = [
  {
    title: "dashboard pages",
    layout: "dashboard",
    pages: [
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "dashboard",
        path: "/*",
        element: <Dashboard />,
      },
    ],
  },
  {
    title: "blank pages",
    layout: "blank",
    pages: [
      {
        icon: <Dicon icon="ServerStack" {...icon} />,
        name: "signIn",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <Dicon icon="ServerStack" {...icon} />,
        name: "signUp",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "outRangeBlank",
        path: "/*",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "portal",
        path: "/portal",
        element: <Portal />,
      },
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "market",
        path: "/market",
        element: <Market />,
      },
      {
        icon: <Dicon icon="Home" {...icon} />,
        name: "outRangeAuth",
        path: "/*",
        element: <Portal />,
      },
    ],
  },
];

export default routers;
