import Link from "next/link";
import Image from "next/image";

import style from "../AsideItem/AsideItem.module.css";

export type IAsideItem = {
  name: string;
  link: string;
};

export const AsideItem = ({ name, link }: IAsideItem) => {
  return (
    <Link className={style.AsideItem} href={link}>
      {name === "Открытки" && (
        <Image
          width={24}
          height={24}
          src="/Icon.svg"
          alt="Изображение открытки"
        />
      )}
      {name === "Пользователи" && (
        <Image
          width={24}
          height={24}
          src="/Users.svg"
          alt="Изображение открытки"
        />
      )}
      {name}
    </Link>
  );
};
