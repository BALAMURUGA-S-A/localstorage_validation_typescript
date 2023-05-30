import { ChangeEvent, useState } from "react";
import './Page1.css';
import bala from './bala.jpeg'
import { Link, useNavigate } from "react-router-dom";
import { Namevalid, Emailvalid, passvalid } from './Rejax';

interface InputData {
  fullname: string;
  email: string;
  password: string;
}

export default function Login() {
  const [errormsg, setErrormsg] = useState<string>("")
  const [errormsg1, setErrormsg1] = useState<string>("")
  const [errormsg2, setErrormsg2] = useState<string>("")
  const navigate = useNavigate()
  const data: InputData = {
    fullname: '',
    email: '',
    password: ''
  }
  const [inputData, setInputData] = useState<InputData>(data)

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputData.fullname === "") {
      return setErrormsg("name is required")
    }
    else if (!Namevalid(inputData.fullname)) {
      return setErrormsg(" enter character only")
    }
    else {
      setErrormsg("")
    }

    if (inputData.email === "") {
      return setErrormsg1("Email is required")
    }
    else if (!Emailvalid(inputData.email)) {
      return setErrormsg1("Enter a format")
    }
    else {
      setErrormsg1("")
    }

    if (inputData.password === "") {
      return setErrormsg2("passwordis required")
    }
    else if (!passvalid(inputData.password)) {
      return setErrormsg2("use character only")
    }
    else if (inputData.password.length < 8) {
      return setErrormsg2("minimum 8 characters")
    }
    else {
      setErrormsg2("")

      const storedData = localStorage.getItem('userData');
      let parsedData = storedData ? JSON.parse(storedData) : [];
      parsedData.push(inputData);
      localStorage.setItem('userData', JSON.stringify(parsedData));
      navigate("/");
    }
  }

  const createpass = () => {
    var passstrength = (document.getElementById("password") as HTMLInputElement).value;

    if (passstrength.length <= 2) {

      //why not symbole used this areas

      document.getElementById("span01")!.innerHTML = "WEEK";
      document.getElementById("span01")!.style.color = "red";
    }
    else if (passstrength.length <= 5) {
      document.getElementById("span01")!.innerHTML = "MEDIUM"
      document.getElementById("span01")!.style.color = "orange";
    }
    else {
      document.getElementById("span01")!.innerHTML = "STRONG"
      document.getElementById("span01")!.style.color = "green";
    }
  };


  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <div className="allover">
        <div className="main_container">
          <div className="sub_container">
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
                <div className="div_image">
                  <img src={bala} className="image24" />
                  <div className="name28">
                    <p>Balamuruga</p>
                    <p>hi i am bala</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second_div">
              <h1>Get started</h1>
              <h4 className="head27">Create your account now</h4>
              <div>&nbsp;</div>
              <label className="head28" id="head28" htmlFor="">Full name</label>
              <div>&nbsp;</div>
              <input value={inputData.fullname} onChange={handlechange} type="text" className="fullname" id="fullname" name="fullname" />
              {errormsg.length > 0 && (
                <span>{errormsg}</span>
              )}
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <label className="head30" id="head30" htmlFor="">Email</label>
              <div>&nbsp;</div>
              <input value={inputData.email} onChange={handlechange} type="email" className="email" id="email" name="email" />
              {errormsg1.length > 0 && (
                <span>{errormsg1}</span>
              )}
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div className="passdiv">
                <label className="head32" id="head32" htmlFor="">Password</label><span id="span01" className="span01"></span>
                <div>&nbsp;</div>
              </div>
              <div>&nbsp;</div>
              <input value={inputData.password} onChange={handlechange} type="password" className="password" id="password" onKeyUp={createpass} name="password" />
              {errormsg2.length > 0 && (
                <span>{errormsg2}</span>
              )}
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <button className="btn btn button28"  >Sign up</button>
              <div>&nbsp;</div>
              <div className="head35">
                <h4>Have an account?<span className="span35"><Link to='/'>Login</Link></span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>

  );
}
