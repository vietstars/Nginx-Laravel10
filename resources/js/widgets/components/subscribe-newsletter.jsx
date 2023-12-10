import React from "react";

import {
  useResource
} from '@context/useResource';

import {
  Typography,
  Button,
  Input
} from "@material-tailwind/react";

import {
  Dicon
} from '@widget/modules';

const SubscribeNewsLetter = () => {
  const { _lg } = useResource();
  const { common, footer } = _lg ? _lg : {};

  const [email, setEmail] = React.useState("");
  const [valid, setValid] = React.useState(false);

  const onChange = ({ target }) => {
    setEmail(target.value);
    setValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(target.value));
  }

  return (
    <div className="col-span-2 w-full">
      <Typography
        variant="h5"
        color="white"
        className="mb-4 font-bold uppercase"
      >
        { footer?.subcribe_title }
      </Typography>
      <ul className="space-y-1">
          <Typography as="li" color="white" 
            className={ common?.locale === "vi"? "font-robo font-normal" : "font-normal" }
            >
            { footer?.subcribe_desciption }
          </Typography>
          <Typography as="li">
            <div className="relative flex w-full max-w-[24rem] pt-3 mt-2">
              <Input
                variant="standard"
                type="email"
                label={ footer?.subcribe_input }
                value={ email }
                onChange={ onChange }
                containerProps={{
                  className: "min-w-0",
                }}
                color="white"
              />
              <Button
                size="sm"
                color={ valid ? "black dark:white" : "white dark:black" }
                disabled={ !valid }
              >
                <Dicon icon="PaperAirplane" className="h-5 w-5" />
              </Button>
            </div>
          </Typography>
      </ul>
    </div>
  );
}

export default SubscribeNewsLetter;