import React, { useState } from "react";
import PropTypes from "prop-types";

import Checkbox, { CHECKED, UNCHECKED, INDETERMINATE } from "../Checkbox";
import TableTools from "../TableTools";
import StyledTableContainer from "./style";

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
    if (selectedRowCount === rows.length) return CHECKED;
    if (selectedRowCount > 0) return INDETERMINATE;

    return UNCHECKED;
  }

  function getSelectedRows() {
    return rows.filter((r) => r.checked);
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
      currentCheckState === INDETERMINATE || currentCheckState === UNCHECKED;
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
      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Device</th>
            <th>Path</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={`${r.name}_${i}`}>
              <td>
                <Checkbox
                  value={+r.checked}
                  handleChange={() => toggleRowCheckbox(i)}
                />
              </td>
              <td>{r.name}</td>
              <td>{r.device}</td>
              <td>{r.path}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  );
}
