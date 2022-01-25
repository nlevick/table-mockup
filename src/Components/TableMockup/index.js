import React, { useState } from "react";
import PropTypes from "prop-types";

import Checkbox from "../Checkbox";
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

  function toggleCheckbox(index) {
    const newRow = rows[index];
    let rowCount = selectedRowCount;
    newRow.checked = !newRow.checked;
    newRow.checked
      ? setSelectedRowCount(rowCount + 1)
      : setSelectedRowCount(rowCount - 1);
    setRows(rows);
  }

  return (
    <StyledTableContainer>
      <div>
        {selectedRowCount ? `Selected: ${selectedRowCount}` : "None Selected"}
      </div>
      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Path</th>
            <th>Device</th>
            <th>Status</th>
          </tr>
        </thead>
        {rows.map((r, i) => (
          <tr>
            <td>
              <Checkbox
                value={+r.checked}
                handleChange={() => toggleCheckbox(i)}
              />
            </td>
            <td>{r.name}</td>
            <td>{r.device}</td>
            <td>{r.path}</td>
            <td>{r.status}</td>
          </tr>
        ))}
      </table>
    </StyledTableContainer>
  );
}
