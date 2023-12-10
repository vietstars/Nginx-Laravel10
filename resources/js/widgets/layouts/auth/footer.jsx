import React, {Fragment} from "react";

import {
  Typography,
  Avatar,
  Button,
  Card,
} from "@material-tailwind/react";

import {
  useResource
} from '@context/useResource';

import {
  Dicon
} from '@widget/modules';

import {
  SubscribeNewsLetter,
  CompanyInformation,
  BottomLink
} from '@widget/components';

import Markdown from 'react-markdown';

let companyLinks=[],
  ecosystemLinks=[],
  supportLinks=[];

const Footer = () => {
  const { _lg, _locales } = useResource();
  if ( !_lg ) { return null }
  const { common, footer, companyLink, ecosystemLink, supportLink } = _lg;
  const currentYear = new Date().getFullYear();

  companyLinks.chunk(companyLink, 2, ['label', 'url']);
  ecosystemLinks.chunk(ecosystemLink, 2, ['label', 'url']);
  supportLinks.chunk(supportLink, 2, ['label', 'url']);

  const SITEMAP = [
    {
      title: footer?.company_link_title,
      links: companyLinks,
    },
    {
      title: footer?.ecosystem_link_title,
      links: ecosystemLinks,
    },
    {
      title: footer?.support_link_title,
      links: supportLinks
    },
  ];

  return (
    <Card className="mt-[50px] lg:mt-[100px] rounded-t-none shadow-none bg-gradient-to-r from-blue-gray-800 to-gray-500">
      <footer className="relative w-full">
        <div className="mx-auto w-full px-8">
          <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-7">
            <CompanyInformation />
            {
              SITEMAP.map(({ title, links }, key) => (
                <BottomLink key={ key } title={ title } links={ links } locale={ _locales?.current } />
              ))
            }
            <SubscribeNewsLetter />
          </div>
        </div>
        <div className="border-t border-blue-gray-50 rounded-b-lg py-4 bg-blue-gray-800">
          <div className="container mx-auto flex w-full flex-col items-center justify-center md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-white md:mb-0"
              >
              <Markdown>
                { footer?.copyright.repair(currentYear, 'https://it4today.org') }
              </Markdown>
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
  );
}

export default Footer;