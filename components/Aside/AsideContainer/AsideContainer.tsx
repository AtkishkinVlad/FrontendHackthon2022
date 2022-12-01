import { Button, Toggle, Modal } from "@skbkontur/react-ui";
import React from "react";
import Image from "next/image";

import { AsideItem, IAsideItem } from "../AsideItem/AsideItem";
import style from "../AsideContainer/AsideContainer.module.css";

type IAsideContainer = {
  links: IAsideItem[];
  userName: string;
};

const formatName = (userName: string) => {
  console.log(userName)
  const nameArr = userName.split(' ');
  return `${nameArr[0]} ${nameArr[1][0]}. ${nameArr[2][0]}.`
}

export const AsideContainer = ({ links, userName }: IAsideContainer) => {
  const [opened, setOpened] = React.useState(false);
  const [panel, setPanel] = React.useState(false);

  const formatedName = formatName(userName)

  function renderModal() {
    return (
      <Modal onClose={close}>
        <Modal.Header>Title</Modal.Header>
        <Modal.Body>
          <p>Use rxjs operators with react hooks</p>

          <div>
            <Toggle checked={panel} onValueChange={setPanel} /> Panel{" "}
            {panel ? "enabled" : "disabled"}
          </div>
        </Modal.Body>
        <Modal.Footer panel={panel}>
          <Button onClick={close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <aside className={style.AsideContainer}>
      {opened && renderModal()}
      <div className={style.AsideContainer__links}>
        {links.map((link) => (
            <AsideItem link={link.link} key={link.name} name={link.name} />
        ))}
      </div>
      <button className={style.AsideContainer__profile} onClick={open}>
        <Image width={24} height={24} src="/Profile.svg" alt="Изображение профиля" />
        {formatedName}
      </button>
    </aside>
  );
};
