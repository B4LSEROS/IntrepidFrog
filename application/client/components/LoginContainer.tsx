import React, { FormEvent, useState } from "react";
import Image from "next/image";
import login from "../css/login.module.scss";
import { FaLock, FaUserAlt } from "react-icons/fa";
import API_SERVICE from "../services/service";
import { useRouter } from "next/router";
import lockIcon from "../public/lock.svg";
import unlockIcon from "../public/lock-unlocked.svg";
import userIcon from "../public/user-icon.svg";

export default function LoginContainer({ logo }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focus, setFocus] = useState<string>("");
  const [isPassword, setIsPassword] = useState({
    display: false,
    text: "password",
  });

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await API_SERVICE.post.login(username, password);
    const data = await response.json();
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

  function showPassword() {
    setIsPassword((isPassword) => ({
      ...isPassword,
      display: !isPassword.display,
      text: isPassword.display ? "password" : "text",
    }));
  }

  return (
    <div className={login.main}>
      <header className={login.logoContainer}>
        <Image
          className={login.logo}
          alt="IntrepidFrog Logo"
          src={logo}
          onClick={() => router.push("/Menu")}
        />
        <h1 className={login.title}>Login</h1>
      </header>

      <form
        action="POST"
        onSubmit={handleSubmit}
        className={login["form-container"]}
      >
        <div className={login["input-container"]}>
          <span className={`${login["logo-login"]} ${getModifier("password")}`}>
            <Image alt="Lock Icon" src={userIcon}></Image>
          </span>
          <input
            type="text"
            name="username"
            className={login["textareas"]}
            placeholder="Username"
            onChange={(event): void => setUsername(event.target.value)}
            onFocus={() => handleFocus(username)}
            onBlur={() => handleFocus("")}
            required
          />
        </div>

        <div className={login["input-container"]}>
          <span className={`${login["logo-login"]} ${getModifier("password")}`}>
            {isPassword.display ? (
              <Image
                onClick={showPassword}
                alt="Lock Icon"
                src={lockIcon}
              ></Image>
            ) : (
              <Image
                alt="Lock Icon"
                onClick={() => showPassword()}
                src={unlockIcon}
              ></Image>
            )}
          </span>
          <input
            type={isPassword.text}
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
        <button type="button" onClick={() => router.push("/RegisterContainer")}>
          Create an Account
        </button>
      </form>
    </div>
  );
}
