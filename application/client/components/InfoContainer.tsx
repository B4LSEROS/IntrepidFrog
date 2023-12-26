import React, { useState } from "react";
import Image from "next/image";
import closeLogo from "../public/close-icon.svg";
import { infoData } from "../utils/infoDataContainers";
import info_style from "../css/info.module.scss";

export default function InfoContainer({ lemma, handleExit }) {
  const info = infoData;

  const infoArray = Object.values(info);

  function infoContainers() {
    return infoArray
      .filter((i) => i.id === lemma)
      .map((data, index) => (
        <div key={index} className={info_style.containerStyle}>
          <Image
            alt="Close window"
            src={closeLogo}
            className={info_style.logo}
            onClick={() => handleExit("login")}
          ></Image>

          <h1>{data.title}</h1>

          <ul>
            {data.items.map((item, indexItem) => (
              <li key={indexItem} className={info_style.lists}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ));
  }

  return <div className={info_style.main}>{infoContainers()}</div>;
}
