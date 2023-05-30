import './Page1.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface User {
  email: string;
  password: string;
}

export default function Signin() {
   const [userData, setUserData] = useState([]);
  const [CheckEmail, setCheckEmail] = useState('');
  const [CheckPassword, setCheckPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

    const storedData = localStorage.getItem('userData');

    if (storedData) {

      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);
  console.log(userData)

  const handleLogin = () => {

    const matchedUser = userData.find(
      (user:User) => user.email === CheckEmail && user.password === CheckPassword
    );

    if (matchedUser) {

      alert('Login successful');
      navigate('/tables', { state: { loggedInUser: CheckEmail } })

    } else {

      alert('Invalid email or password');

    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="allover">
          <div className="main_container">
            <div className="sub_container">
              <div className="second_div">
                <h1>Get started</h1>
                <h4 className="head27">Create your account now</h4>
               
                <label className="head30">Email</label>
                <div>&nbsp;</div>
                <input value={CheckEmail} onChange={(e) => setCheckEmail(e.target.value)} type="email" className="email" id="email" name="email" />
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <label className="head32">Password</label>
                <div>&nbsp;</div>
                <input value={CheckPassword} onChange={(e) => setCheckPassword(e.target.value)} type="password" className="password" id="password" name="password" />
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <button className="btn btn button28 " type="submit">LogIn</button>
                <div>&nbsp;</div>
                <div className="head35">
                  <h4>Have an account?<span className="span35"><Link to='/login'>SignUp</Link></span></h4>
                </div>
              </div>
              <div className="first_div">
                <div>&nbsp;</div>
                <div className="small_circle"></div>
                <div className="small_div"></div>
                <div>&nbsp;</div>
                <h1 className="head16">Let us help you run your freelance business.</h1>
                <p className="para17">Our registration process is quick and easy, taking no more than 10 minutes to
                  complete.</p>
                <div className="block_div">
                  <p className="para20">I'm impressed with the result I've seen since starting to use this product, I
                    begin receiving
                    client and projects in the first week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
