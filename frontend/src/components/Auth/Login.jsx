import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { FaPencilAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const {isAthorized, setIsAuthorized, user, setUser} = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault = async();
    try {
      const {} = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setEmail("");
      setRole("");
      setPassword("");
      setIsAuthorized("");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  if (isAthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Login to your account account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  vavlue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ps@gmail.com"
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  vavlue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <RiLock2Fill />
              </div>
            </div>
            <button onClick={handleLogin} type="submit">
            Login
              </button>
            <Link to={'/register'}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </div>
    </>
  );
}

export default Login;
