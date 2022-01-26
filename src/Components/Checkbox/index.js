import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { CHECKED, INDETERMINATE } from "../statusEnums";
import StyledInput from "./style";

Checkbox.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default function Checkbox({ value, handleChange }) {
  const checkRef = useRef();

  useEffect(() => {
    checkRef.current.checked = value === CHECKED;
    checkRef.current.indeterminate = value === INDETERMINATE;
  }, [value]);

  return <StyledInput type="checkbox" ref={checkRef} onChange={handleChange} />;
}
