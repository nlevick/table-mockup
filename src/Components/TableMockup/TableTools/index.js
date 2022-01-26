import React from "react";
import PropTypes from "prop-types";

import StyledTableTools from "./style";
import Checkbox from "../../Checkbox";

TableTools.propTypes = {
  getSelectedRows: PropTypes.func.isRequired,
  handleSelectAllChange: PropTypes.func.isRequired,
  selectAllValue: PropTypes.number.isRequired,
  selectedRowCount: PropTypes.number.isRequired,
};

export default function TableTools(props) {
  function handleButtonClick() {
    const selectedRows = props.getSelectedRows();
    let message = "The selected available rows are: \n";
    selectedRows.forEach((r) => {
      message += `Device: ${r.device}, Path: ${r.path} \n`;
    });
    alert(message);
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
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={!props.selectedRowCount}
      >
        Download Selected
      </button>
    </StyledTableTools>
  );
}
