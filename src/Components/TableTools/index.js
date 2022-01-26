import React from "react";
import PropTypes from "prop-types";

import StyledTableTools from "./style";
import Checkbox from "../Checkbox";

TableTools.propTypes = {
  selectedRowCount: PropTypes.number.isRequired,
  handleSelectAllChange: PropTypes.func.isRequired,
  selectAllValue: PropTypes.number.isRequired,
};

export default function TableTools(props) {
  function handleButtonClick() {
    alert("Insert data");
  }

  return (
    <StyledTableTools>
      <Checkbox
        value={props.selectAllValue}
        handleChange={props.handleSelectAllChange}
      />
      <div>
        {props.selectedRowCount
          ? `Selected: ${props.selectedRowCount}`
          : "None Selected"}
      </div>
      <button type="button" onClick={handleButtonClick}>
        Download Selected
      </button>
    </StyledTableTools>
  );
}
