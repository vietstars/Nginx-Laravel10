import React from "react";

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  Switch
} from "@material-tailwind/react";

import {
  useResource
} from '@context/useResource'

import {
  Dicon,
  NavNewsList,
  Dimage
} from '@widget/modules';

let menu=[];

const NavList = () => {
  const { _mode, _lg, _locales, changeLang, changeMode } = useResource();
  if (!_lg) { return null; }
  const { common, menuTop } = _lg;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  menu.chunk(menuTop, 3,['label', 'icon', 'url']);

  const changeStyle = () => {
    const mode = _mode === 'light' ? 'dark' : 'light';
    changeMode(mode);
  }

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavNewsList />
      {
        menu.map(({ label, icon, url }, key) => { 
          if (label != 'IT4TODAY') {
            return (
              <Typography
                key={ label }
                as="a"
                href={ url }
                variant="small"
                color="gray"
                className="font-medium"
              >
                <MenuItem className="flex items-center gap-2 lg:rounded-full">
                  <Dicon 
                      icon={ icon }
                      strokeWidth={1}
                      className="h-[18px] w-[18px] dark:text-white"
                    />
                  {" "}
                  <span className="text-gray-900 dark:text-white"> { label }</span>
                </MenuItem>
              </Typography>
            )
          }
        })
      }
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Typography
            as="span"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
            >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <Dimage 
                img={ common.locale.replace(/[ ]/g, '_').toLowerCase() } 
                name="locale" 
                className="h-4 w-4 dark:text-white"
              />
              {" "}
              <span className="text-gray-900 dark:text-white"> { common.locale }</span>
              <Dicon 
                icon="ChevronDown"
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform dark:text-white ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="p-1 dark:bg-black dark:border-white/30">
          {
            Object.keys(_locales).map((lg, key) => { 
              if(common.locale != _locales[lg] && lg !== 'current') {
                return (
                  <MenuItem
                    key={key}
                    onClick={ () => changeLang(lg) }
                    className={`flex items-center gap-2 rounded`}
                  >
                    <Dimage 
                      img={ _locales[lg].replace(/[ ]/g, '_').toLowerCase() } 
                      name="locale" 
                      className="h-4 w-4"
                    />
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal dark:text-white"
                      color="inherit"
                    >
                      { _locales[lg] } 
                    </Typography>
                  </MenuItem>
                )
              }

              return null;
            })
          }
        </MenuList>
        <Typography
          as="span"
          className="flex items-center gap-2 lg:rounded-full"
          >
          <Switch 
            onClick={ changeStyle } 
            defaultChecked={ _mode === 'dark' } 
            color="black"
            label={ 
              _mode === 'dark' 
                ? <Dicon 
                    icon="Moon"
                    className="h-5 w-5 dark:text-white"
                  />
                : <Dicon 
                    icon="Sun"
                    className="h-5 w-5"
                  /> 
            }
          />

        </Typography>
      </Menu>
    </ul>
  );
}

export default NavList;