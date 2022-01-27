import React, { useState } from "react";
import PropTypes from "prop-types";

import * as status from "../statusEnums";
import Checkbox from "../Checkbox";
import TableTools from "./TableTools";
import StatusCell from "./StatusCell";

import StyledTableContainer from "./style";
import { default as utils } from "./utils";

TableMockup.propTypes = {
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      device: PropTypes.string,
      path: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

export default function TableMockup(props) {
  const mappedRowData = _mapData(props.rowData);

  const [rows, setRows] = useState(mappedRowData);
  const [selectedRowCount, setSelectedRowCount] = useState(0);

  function _mapData(data) {
    return data.map((row) => ({ ...row, checked: false }));
  }

  function getSelectAllValue() {
    return utils.getSelectAllValue(selectedRowCount, rows.length);
  }

  function getSelectedRows() {
    return rows.filter((r) => r.checked && r.status === status.AVAILABLE);
  }

  function toggleRowCheckbox(index) {
    const newRow = rows[index];
    let rowCount = selectedRowCount;
    newRow.checked = !newRow.checked;
    newRow.checked
      ? setSelectedRowCount(rowCount + 1)
      : setSelectedRowCount(rowCount - 1);
    setRows(rows);
  }

  function toggleSelectAllRows() {
    const currentCheckState = getSelectAllValue();
    const shouldCheckAll =
      currentCheckState === status.INDETERMINATE ||
      currentCheckState === status.UNCHECKED;
    const newRows = rows.map((r) => ({ ...r, checked: shouldCheckAll }));
    setRows(newRows);
    setSelectedRowCount(shouldCheckAll ? newRows.length : 0);
  }

  return (
    <StyledTableContainer>
      <TableTools
        getSelectedRows={getSelectedRows}
        handleSelectAllChange={toggleSelectAllRows}
        selectAllValue={getSelectAllValue()}
        selectedRowCount={selectedRowCount}
      />
      <div className="table">
        <div className="tableHead">
          <div className="tableRow">
            <div className="tableCell header" />
            <div className="tableCell header">Name</div>
            <div className="tableCell header">Device</div>
            <div className="tableCell header">Path</div>
            <div className="tableCell header">Status</div>
          </div>
        </div>
        <div className="tableBody">
          {rows.map((r, i) => (
            <div
              className={`tableRow ${r.checked ? "selected" : ""}`}
              key={`${r.name}_${i}`}
            >
              <div className="tableCell">
                <Checkbox
                  value={+r.checked}
                  handleChange={() => toggleRowCheckbox(i)}
                />
              </div>
              <div className="tableCell">{r.name}</div>
              <div className="tableCell">{r.device}</div>
              <div className="tableCell">{r.path}</div>
              <StatusCell status={r.status} />
            </div>
          ))}
        </div>
      </div>
    </StyledTableContainer>
  );
}
