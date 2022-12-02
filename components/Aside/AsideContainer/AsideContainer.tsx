import { Button, Toggle, Modal } from "@skbkontur/react-ui";
import React from "react";
// import Image from "next/image";

import { AsideItem, IAsideItem } from "../AsideItem/AsideItem";
import style from "../AsideContainer/AsideContainer.module.css";

type IAsideContainer = {
  links: IAsideItem[];
  userName: string;
};

const formatName = (userName: string) => {
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
      <div>
        <svg viewBox="0 0 68 24" focusable="false" style={{marginBottom: '-5px', width: '86px', height: '28px', display: 'inline-block'}}><path d="M9.91469 11.5948L15.0429 19H12.1719L7.75649 12.6838H5.63789V19H3.12329V7.2982H1.22249L2.48969 4.942H5.63789V10.5058H7.75649L11.9541 4.942H14.8053L9.91469 11.5948ZM14.2707 13.9312C14.2707 12.8356 14.5215 11.8786 15.0231 11.0602C15.5115 10.2946 16.1781 9.7072 17.0229 9.298C17.8677 8.8888 18.7785 8.6842 19.7553 8.6842C20.7585 8.6842 21.6627 8.8822 22.4679 9.2782C23.3127 9.6874 23.9793 10.2946 24.4677 11.0998C24.9561 11.8918 25.2003 12.8356 25.2003 13.9312C25.2003 15.04 24.9561 15.997 24.4677 16.8022C23.9793 17.5942 23.3127 18.208 22.4679 18.6436C21.6363 19.066 20.7321 19.2772 19.7553 19.2772C18.7917 19.2772 17.8875 19.066 17.0427 18.6436C16.1847 18.2212 15.5049 17.6074 15.0033 16.8022C14.5149 15.9838 14.2707 15.0268 14.2707 13.9312ZM56.9793 9.001H59.2167V10.3672C59.5599 9.8392 60.0153 9.4366 60.5829 9.1594C61.1637 8.869 61.9095 8.7238 62.8203 8.7238C63.7575 8.7238 64.5891 8.935 65.3151 9.3574C66.0147 9.793 66.5559 10.4134 66.9387 11.2186C67.3347 12.0106 67.5327 12.9214 67.5327 13.951C67.5327 14.9938 67.3347 15.9178 66.9387 16.723C66.5559 17.515 66.0147 18.1288 65.3151 18.5644C64.9851 18.7888 64.5957 18.9538 64.1469 19.0594C63.7113 19.1782 63.2691 19.2376 62.8203 19.2376C62.0415 19.2376 61.4607 19.1782 61.0779 19.0594C60.2859 18.8218 59.7249 18.4258 59.3949 17.8714V22.5442H56.9793V9.001ZM26.4873 9.001H28.8831V12.8026H32.9817V9.001H35.3577V19H32.9817V14.7826H28.8831V19H26.4873V9.001ZM36.4071 9.001H45.6141V10.9018H42.2085V19H39.7731V10.9018H36.4071V9.001ZM48.9207 9.001C49.8183 11.4562 50.6367 13.885 51.3759 16.2874C52.0755 13.9114 52.8675 11.4826 53.7519 9.001H56.1675L52.4847 19.198C52.1811 20.0296 51.8907 20.6698 51.6135 21.1186C51.3099 21.5674 50.9337 21.904 50.4849 22.1284C50.0493 22.366 49.4685 22.4848 48.7425 22.4848C48.3333 22.4848 48.1089 22.4782 48.0693 22.465L47.2575 20.5642C47.5083 20.617 47.8185 20.6434 48.1881 20.6434C48.6369 20.6434 48.9999 20.5774 49.2771 20.4454C49.5279 20.3398 49.7193 20.1946 49.8513 20.0098C49.9833 19.8382 50.0955 19.6204 50.1879 19.3564L46.3863 9.001H48.9207ZM16.7061 13.9114C16.7061 15.007 16.9701 15.8452 17.4981 16.426C18.0261 16.9936 18.7587 17.2774 19.6959 17.2774C20.6463 17.2774 21.3855 16.9936 21.9135 16.426C22.4547 15.8452 22.7253 15.007 22.7253 13.9114C22.7253 12.8422 22.4613 12.037 21.9333 11.4958C21.4053 10.9414 20.6595 10.6642 19.6959 10.6642C18.7455 10.6642 18.0063 10.9414 17.4783 11.4958C16.9635 12.037 16.7061 12.8422 16.7061 13.9114ZM59.3355 13.9312C59.3619 14.9212 59.6259 15.7132 60.1275 16.3072C60.6291 16.9012 61.3353 17.1982 62.2461 17.1982C63.1569 17.1982 63.8565 16.9012 64.3449 16.3072C64.8465 15.7132 65.1039 14.9212 65.1171 13.9312C65.1039 12.9544 64.8465 12.1756 64.3449 11.5948C63.8565 11.0008 63.1569 10.7038 62.2461 10.7038C61.3353 10.7038 60.6291 10.9942 60.1275 11.575C59.6259 12.1558 59.3619 12.9412 59.3355 13.9312Z" fill="#222222" /></svg>
        <span className={style.AsideContainer__logo}>
          Открытка 
        </span>
      </div>
      <div className={style.AsideContainer__links}>
        {links.map((link) => (
            <AsideItem link={link.link} key={link.name} name={link.name} />
        ))}
      </div>
      {/* <button className={style.AsideContainer__profile} onClick={open}>
        <Image width={24} height={24} src="/Profile.svg" alt="Изображение профиля" />
        {userName}
      </button> */}
    </aside>
  );
};
