import React from 'react';
import { BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
//import { Switch, Route, Link } from "react-router-dom";
import { animated, useTransition } from "react-spring";




//----------Үндсэн Layout-ууд-----------------------
import MainRoute from './Layout/MainRoute';
import AuthLayout from './Layout/AuthLayout';
import FinanceLayout from './Layout/FinanceLayout';
import QuizLayout from './Layout/QuizLayout';

// -----------------Хуудсууд---------------

import Login from './Auth/Login';
import Register from './Auth/Register';

import Finance from './Apps/Finance';
import Quiz from './Apps/Quiz';




function App() {
    const location = useLocation();
    //console.log('---------------->', location);

    const transitions = useTransition(location, location => location.pathname, {
        from: { position: 'absolute',width:'100%', opacity: 1, transform:"translate(100%,0)"},
        enter: {position: 'flex', opacity: 1, transform:"translate(0,0)"},
        leave: { opacity: 1, transform:"translate(-100%,0)" },
        config:{
            duration:1000,
            mass:6
        }
      });

    return (
        <div>
            sdks hdlgksj
            {transitions.map(({ item: location, props, key }) => (
                <animated.div style={props} key={key}>

                    <Switch location={location}>
                        <MainRoute exact path="/" layout={AuthLayout} component={Login} />
                        <MainRoute exact path="/register" layout={AuthLayout} component={Register} />

                        <MainRoute exact path="/finance" layout={FinanceLayout} component={Finance} />
                        <MainRoute exact path="/quiz" layout={QuizLayout} component={Quiz} />
                    </Switch>
                </animated.div>
            ))}
            </div>
    )
}

export default App
