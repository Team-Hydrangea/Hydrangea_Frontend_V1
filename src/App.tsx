import { Global } from '@emotion/react';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  );
}

export default App;
