import React from "react";
import PropTypes from "prop-types";

import StyledCell from "./style";

const AVAILABLE = "available";

StatusCell.propTypes = {
  status: PropTypes.string.isRequired,
};

function _format(string) {
  return string.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
}

export default function StatusCell({ status }) {
  const isAvailable = status === AVAILABLE;

  return (
    <StyledCell className="tableCell">
      <div className="content">
        {isAvailable && <div className="dot" />}
        {_format(status)}
      </div>
    </StyledCell>
  );
}
