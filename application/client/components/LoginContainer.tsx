import React from "react";
import Image from "next/image";
import login from "../css/login.module.scss";

export default function LoginContainer({ logo }) {
  return (
    <div className={login.loginContainer}>
        <div className={login.logoContainer}>
            <Image className={login.logo} alt="IntrepidFrog Logo" src={logo} />

        </div>
      <h1 className={login.title}>Login</h1>

        <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required/>

      <button type="submit">Submit</button>
  
    </div>
  );
}
