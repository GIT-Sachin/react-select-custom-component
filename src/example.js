// @flow

import React from "react";
import Input from "./Input";
import Select from "react-select";
import { colourOptions } from "./docs/data";

const InputBoxWithText = props => {
  return <Input messageText={"this message"} {...props} />;
};

export default () => (
  <form>
    <Select
      closeMenuOnSelect={true}
      components={{ Input: InputBoxWithText }}
      options={colourOptions}
    />
    <input type="submit" />
  </form>
);
