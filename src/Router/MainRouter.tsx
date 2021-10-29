import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Main, Callback } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/callback' component={Callback} exact />
      </Switch>
    </>
  );
};

export default MainRouter;
