import { Global } from '@emotion/react';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import RootRouter from './Router/RootRouter';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <Global styles={GlobalStyle} />
          <RootRouter />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
