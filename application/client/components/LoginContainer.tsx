import React, { useState } from "react";
import Image from "next/image";
import login from "../css/login.module.scss";

export default function LoginContainer({ logo }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={login.main}>
      <header className={login.logoContainer}>
        <Image className={login.logo} alt="IntrepidFrog Logo" src={logo} />
        <h1 className={login.title}>Login</h1>
      </header>

      <form className = {login["form-container"]}>
        <div className={login["input-container"]}>
          <input type="text" name="username" placeholder="Username" required />
        </div>

        <div className={login["input-container"]}>

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <span className={login["form-icon"]}></span>
        </div>
        <button type="submit" className={login["submit-button"]}>Submit</button>
        <button type="button">Create an Account</button>
      </form>
    </div>
  );
}
