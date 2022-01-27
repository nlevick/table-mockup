import styled from "styled-components";

export default styled.div`
  .content {
    display: flex;
    align-items: center;
  }

  .dot {
    height: 1rem;
    width: 1rem;
    background-color: ${({ theme }) => theme.availableStatusColor};
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
  }
`;
