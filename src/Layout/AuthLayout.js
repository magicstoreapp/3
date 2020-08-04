import React from 'react';
import { Link } from "react-router-dom";
import ReactLogo from '../Images/bg-tn.svg';

const AuthLayout = ({ children }) => {
  console.log('=============Authentication layout ================');
  return (
    <div className="auth-layout">
      
      <div className="al-left">
        <div className="centered-div">
          Энэ талбарт системийн талаарх сурталчилгааны материал болон өөр системүүдийн нэрс байрлах боломжтой
        </div>
        
      </div>
      <div className="al-right">
        <nav>
          <ul>
            <li>
              <Link to="/">Нэвтрэх</Link>
            </li>
            <li>
              <Link to="/register">Бүртгүүлэх</Link>
            </li>
            <li>
              <Link to="/register">Нууц үгээ мартсан</Link>
            </li>
            {/* <li>
              <Link to="/finance">Санхүүгийн систем</Link>
            </li>
            <li>
              <Link to="/quiz">Тестийн систем</Link>
            </li>  */}

          </ul>
        </nav>

        <div>This is Authentication layout</div>
        {children}
        <div>-------------Auth Footer-------------</div>
      </div>
      <div className="show-auth-menu">
      <img src={ReactLogo} alt="React Logo" />
      </div>
    </div>

  )
}

export default AuthLayout

