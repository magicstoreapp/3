import React, { useState , useEffect} from 'react';
import WncLogo from '../../Images/bg.jpg';
import SVG from 'react-inlinesvg';
import { useSpring, animated } from 'react-spring';


const Login = () => {

    useEffect(() => {    // Update the document title using the browser API   
        document.title = `Login of magicstore`; 
        console.log('----->',toggle);
        },[]); 

    const [toggle, setToggle] = useState(false);
    const myprops = useSpring({ opacity: toggle ? 1 : 0 })
    console.log('----->',toggle);

    return (
        <div className="login"            
        >

            <img src={WncLogo} alt="React Logo" className="wnc-logo" />
            <animated.div style={myprops}>This is main route</animated.div>
Энэ бол шинэ нэвтрэх цонх
            <button onClick={() => setToggle(!toggle)}>click me</button>
</div>
     
    )
}

export default Login
