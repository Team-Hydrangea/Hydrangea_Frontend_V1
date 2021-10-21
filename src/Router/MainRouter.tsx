import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
  Main,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <Switch>
          <Route path='/' component={Main} exact/>
        </Switch>
    </>
  );
}

export default MainRouter;