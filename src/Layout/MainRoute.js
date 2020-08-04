import React from 'react';
import { Route } from "react-router-dom";


const MainRoute = ({ component: Component, layout: Layout, ...rest }) => {
  console.log('----------Main route called ----------------');
  return(
    <Route {...rest} render={props => (
      <Layout>

        <Component {...props} />
        
      </Layout>
    )} />
  )}

export default MainRoute
