import React from "react";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  Button
} from "@material-tailwind/react";

import {
  useResource
} from '@context/useResource'

import {
  Dicon,
  NavNewsList,
  Davatar
} from '@widget/modules';

const profileMenuItems = [
  {
    label: "My Profile",
    icon: "UserCircle",
  },
  {
    label: "Edit Profile",
    icon: "Cog6Tooth",
  },
  {
    label: "Inbox",
    icon: "InboxArrowDown",
  },
  {
    label: "Help",
    icon: "Lifebuoy",
  },
  {
    label: "Sign Out",
    icon: "Power",
  },
];

let accounts=[];

const Profile = () => {
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
          <Davatar img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
            name="login" 
            className="border border-gray-900 p-0.5"
          />
          <Dicon 
            icon="ChevronDown" 
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`} 
            strokeWidth={2.5} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 dark:bg-black dark:border-white/30">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={ label }
              onClick={ closeMenu }
              className={`flex items-center gap-2 rounded dark:text-white ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              <Dicon 
                icon={ icon } 
                className={`h-4 w-4 ${isLastItem ? "text-red-500" : ""}`} 
                strokeWidth={2}
              />
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                { label }
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  ); 
}

const Account = () => {
  const { _lg, _common } = useResource();
  if (!_lg) { return null; }
  const { menuAccount } = _lg;
  const urls = ['signin', 'signup','forgetpw', 'help'];

  let menuAccounts = {};

  urls.map(url => {
    menuAccounts[url] = menuAccount[url];
    menuAccounts[`${url}_icon`] = menuAccount[`${url}_icon`];
    menuAccounts[`${url}_url`] = _common[`${url}_url`] || '/#';
  });

  accounts.chunk(menuAccounts, 3, ['label', 'icon', 'url'])

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
          <Dicon 
            icon="UserCircle" 
            className="h-8 w-8 border-gray-900"
            strokeWidth={1} />
          <Dicon 
            icon="ChevronDown" 
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`} 
            strokeWidth={2.5} />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 dark:bg-black dark:border-white/30">
        {
          accounts.map(({ label, icon, url }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={ label }
                onClick={ closeMenu }
                className="flex items-center gap-2 rounded dark:text-white"
              >
                <Dicon 
                  icon={ icon } 
                  className="h-4 w-4"
                  strokeWidth={ 2 }
                />
                <Typography
                  as="a"
                  href={ url }
                  variant="small"
                  className="font-normal"
                  color="inherit"
                >
                  { label }
                </Typography>
              </MenuItem>
            );
          })
        }
      </MenuList>
    </Menu>
  ); 
}

const NavProfileList = () => {
  const { _auth } = useResource();

  if (_auth) {
    return <Profile />
  }

  return <Account />
}

export default NavProfileList;