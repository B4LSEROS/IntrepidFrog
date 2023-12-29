import React, { FormEvent, useState } from "react";
import Image from "next/image";
import login from "../css/login.module.scss";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { get } from "http";
import API_SERVICE from "../services/service";

export default function LoginContainer({ logo }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focus, setFocus] = useState<string>("");

  async function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await API_SERVICE.post.login(username, password);
    const data = await response.json();

    if (username.length <= 3) {
      alert("username is too short.");
    } else {
      alert(username);
    }
  }

  function handleDisabled(): boolean {
    const MIN_USERNAME_SIZE = 4;
    const MIN_PASSWORD_SIZE = 8;

    return (
      username.length <= MIN_USERNAME_SIZE ||
      password.length < MIN_PASSWORD_SIZE
    );
  }

  function handleFocus(text: string): void {
    setFocus(text);
  }

  function getModifier(text: string): string {
    const modifier = {
      focus: login["form-focus"],
      blur: login["form-blur"],
    };

    return focus === text ? modifier.focus : modifier.blur;
  }

  return (
    <div className={login.main}>
      <header className={login.logoContainer}>
        <Image className={login.logo} alt="IntrepidFrog Logo" src={logo} />
        <h1 className={login.title}>Login</h1>
      </header>

      <form
        action="POST"
        onSubmit={handleSubmit}
        className={login["form-container"]}
      >
        <div className={login["input-container"]}>
        <span className={`${login["logo-login"]} ${getModifier("password")}`}>
            <FaUserAlt />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event): void => setUsername(event.target.value)}
            onFocus={() => handleFocus(username)}
            onBlur={() => handleFocus("")}
            required
          />

        </div>

        <div className={login["input-container"]}>
          <span className={`${login["logo-login"]} ${getModifier("password")}`}>
              <FaLock />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(event): void => setPassword(event.target.value)}
            onFocus={() => handleFocus(username)}
            onBlur={() => handleFocus("")}
            required
          />

        </div>
        <button
          type="submit"
          disabled={handleDisabled()}
          className={login["submit-button"]}
        >
          Submit
        </button>
        <button type="button">Create an Account</button>
      </form>
    </div>
  );
}
