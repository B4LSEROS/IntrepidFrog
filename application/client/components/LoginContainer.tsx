import React, { useState } from "react";
import Image from "next/image";
import login from "../css/login.module.scss";

export default function LoginContainer({ logo }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(event): void {
    event.preventDefault();

    if (username.length <= 3) {
      alert("username is too short.");
    } else {
    alert(username);
    }
  }

  function handleDisabled(): boolean {
    const MIN_USERNAME_SIZE = 4;
    const MIN_PASSWORD_SIZE = 8;

    return(
      username.length <= MIN_USERNAME_SIZE || password.length < MIN_PASSWORD_SIZE
    )
  }

  return (
    <div className={login.main}>
      <header className={login.logoContainer}>
        <Image className={login.logo} alt="IntrepidFrog Logo" src={logo} />
        <h1 className={login.title}>Login</h1>
      </header>

      <form onSubmit={handleSubmit} className = {login["form-container"]}>

        <div className={login["input-container"]}>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            onChange={(event): void => setUsername(event.target.value)}
            required 
          />
        </div>

        <div className={login["input-container"]}>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event): void => setPassword(event.target.value)}
            required
          />
          <span className={login["form-icon"]}></span>
        </div>
        <button 
          type="submit" 
          disabled={handleDisabled()}
          className={login["submit-button"]}>
            Submit
        </button>
        <button type="button">Create an Account</button>
      </form>
    </div>
  );
}
