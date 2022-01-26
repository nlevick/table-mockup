import styled from "styled-components";

export default styled.div`
  width: 66%;
  padding: 0.5rem;

  .table {
    display: table;
    width: 100%;
  }

  .tableBody {
    display: table-row-group;
  }

  .tableRow {
    display: table-row;

    &:hover {
      background-color: ${({ theme }) => theme.highlightColor};
    }

    &.selected {
      background-color: ${({ theme }) => theme.selectedRowColor};
    }
  }

  .tableHead {
    display: table-header-group;

    .tableRow {
      background-color: inherit;
    }
  }

  .tableCell {
    display: table-cell;
    padding: 0.75rem;
    border-bottom: ${({ theme }) => theme.border};
  }

  .header {
    font-size: 1.2rem;
    padding: 1.5rem 1rem 1rem;
  }
`;
