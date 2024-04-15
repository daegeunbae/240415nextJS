import styled from 'styled-components';
import Home from 'components/Home';

export default function index() {
  return (
    <AppWrap className="App">
      <Home />
    </AppWrap>
  );
}
const AppWrap = styled.div``;
