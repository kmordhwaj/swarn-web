import './loginFirst.css';
import Image from '../../components/login-register/Image';
import {Link} from 'react-router-dom';


const LoginFirst = () => {
  return (
    <div className='bodyloginf'>
    <Image/>
    <div className='rightBodyf'>
      
       <span className="alreadylf">Sorry! You are Not Authenticated for access. Please Login First!  </span>
       <div className='lfrbody'>
       <Link to='/'  >
          <button className='loginfaccount'>Login</button>
       </Link>
       <Link to='/register' >
          <button className='loginfaccount'>Register</button>
       </Link>
       </div>
                 
   </div>
 </div>
  );
}

export default LoginFirst;