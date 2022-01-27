import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: ${({ theme }) => theme.border};

  .selectionTools {
    align-items: center;
    display: flex;
    margin-right: 4rem;
    margin-left: 0.75rem;
    width: 25%;

    input {
      margin-right: 1rem;
    }
  }

  button {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: none;
    border: 1px solid;
    padding: 0.5em;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.buttonHoverColor};
    }

    &:disabled {
      border-color: ${({ theme }) => theme.disableColor};
      color: ${({ theme }) => theme.disableColor};
    }
  }
`;
