import * as status from "../statusEnums";

function getSelectAllValue(count, length) {
  if (count === length) return status.CHECKED;
  if (count > 0) return status.INDETERMINATE;

  return status.UNCHECKED;
}

export default {
  getSelectAllValue,
};
