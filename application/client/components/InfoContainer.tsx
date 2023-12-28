import React, { useState } from "react";
import Image from "next/image";
import closeLogo from "../public/close-icon.svg";
import gitHubIcon from "../public/github-icon.svg";
import mailIcon from "../public/mail-icon.svg";
import { infoData } from "../utils/infoDataContainers";
import info_style from "../css/info.module.scss";

export default function InfoContainer({ lemma, handleExit }) {
  const info = infoData;

  const infoArray = Object.values(info);

  function infoContainers() {
    return infoArray
      .filter((i) => i.id === lemma)
      .map((data) => (
        <div key={data.id} className={info_style.containerStyle}>
          <Image
            alt="Close window"
            src={closeLogo}
            className={info_style.logo}
            onClick={() => handleExit("login")}
          ></Image>

          <h1>{data.title}</h1>

          <ol>
            {data.items.map((item, indexItem) => (
              <li key={indexItem} className={info_style.lists}>
                {item}
              </li>
            ))}
          </ol>
          {/*{data.github && (
            <>
            <a href={data.github}>
              <Image alt="GitHub Icon" src={gitHubIcon}></Image>
            </a>
            <a href="mailto:josebalserospinto@gmail.com">
              <Image alt="Mail Icon" src={mailIcon}></Image>
            </a>
            </>
          )}*/}
        </div>
      ));
  }

  return <div className={info_style.main}>{infoContainers()}</div>;
}
