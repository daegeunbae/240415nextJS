import styled from 'styled-components';
export default function Custom404() {
  return (
    <Error>
      <div className="ErrorDiv">
        <div>404 Error - Page Not Found</div>
      </div>
    </Error>
  );
}
const Error = styled.div`
  max-width: 1240px;
  height: 90vh;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .ErrorDiv {
    color: #043b72;
    font-size: 32px;
    font-weight: bold;
  }
`;
