import React from "react";

import {
  Navbar,
  Typography,
  Avatar,
  Button,
  IconButton,
  Collapse,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  List,
  ListItem,
  Card
} from "@material-tailwind/react";

import {
  useResource
} from '@context/useResource'

import {
  Davatar,
  Dimage,
  Dicon,
  NavList,
  NavProfileList
} from '@widget/modules';

import favicon_svg from '@img/favicon.svg';

const NavbarStickyToPill = () => {
  const { _lg, _locales, changeLang } = useResource();
  if (!_locales) { return null }
  const { menuTop } = _lg
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);

  if (_lg.length === 0) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(!open);
    const lang = _locales['current'];

    return (
      <Dialog open={open}>
        <DialogHeader>Failed loading language '{ lang }'!</DialogHeader>
        <DialogBody>
          <Card className="w-full">
            <List className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                Object.keys(_locales).map(lg => {
                  if (lg !== 'current') {
                    return (
                      <ListItem 
                        onClick={ () => { 
                          changeLang(lg); 
                          handleOpen(); 
                          setTimeout(() => { 
                            location.reload() 
                            }, 1500)} 
                          }
                        >
                        <Dimage 
                          img={ _locales[lg].replace(/[ ]/g, '_').toLowerCase() }
                          name="locale" 
                          className="h-4 w-4 mr-3"
                        />
                        { _locales[lg] }
                      </ListItem>
                    )
                  } 
                })
              }
            </List>
          </Card>
        </DialogBody>
      </Dialog>
    );
  }

  return (
    <div className="fixed z-[100] w-full p-5 pl-3 md:pl-5">
      <Navbar 
        className={
          isNavOpen ? "sticky top-0 z-[100] mx-auto max-w-screen-xl p-2 dark:bg-black dark:border-white/30 rounded-lg lg:pl-6" 
          : "sticky top-0 z-[100] mx-auto max-w-screen-xl p-2 dark:bg-black dark:border-white/30 rounded-full lg:pl-6" }
        >
        <div 
          className="
            relative mx-auto 
            flex items-center justify-between 
            text-blue-gray-900"
          >
          <Typography
            as="a"
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1 font-bold dark:text-white"
            >
            <Davatar 
              img="favicon_svg" 
              name="logo" 
              className="border-none p-0.5 mr-2 w-8 h-8 dark:text-white" 
            />
            { menuTop.branch }
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={ toggleIsNavOpen }
            className="ml-auto mr-2 lg:hidden"
            >
            <Dicon icon="Bars2" className="h-6 w-6" strokeWidth={1} />
          </IconButton>
          <NavProfileList />
        </div>
        <Collapse open={ isNavOpen } className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarStickyToPill;
