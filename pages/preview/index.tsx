import { Button } from '@skbkontur/react-ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import EmptyLayout from '../../components/Layouts/EmptyLayout';

import style from './index.module.css'

export const LOCAL_STORAGE_INFO_KEY = 'LOCAL_STORAGE_INFO_KEY'

const print = () => {
  window.print()
}

const Users = () => {
  const [name, setName] = useState('Новогодний')
  const [src, setSrc] = useState('https://staff.skbkontur.ru/api/images/ubt1yuho/89c6ecf530398bae040a2ab6b69c0266.jpg?size=l')
  const [text, setText] = useState('С новым годом поздравляю всего доброго желаю')
  useEffect(() => {
    const savedName = window.localStorage.getItem('fio')
    const savedImg = window.localStorage.getItem('imgUrl')
    const savedText = window.localStorage.getItem('text')
    savedName && setName(savedName.split(' ')[1])
    savedImg && setSrc(savedImg)
    savedText && setText(savedText)
  }, [])

  return (
    <div className={style.user}>
      <Button
        arrow="left"
        className={style.user__back}
      >
        <Link href={"/generatorr"}>
          Вернуться назад
        </Link>
      </Button>
      <div className={style.user__container}>
        <h1 className={style.user__header}>Кисик, {name}</h1>
        <div className={style.user__img}>
          <img
            width={100}
            height={100}
            alt="alt text"
            src={src}
            className={style.user__picture}
          />
          <Image
            width={113}
            height={113}
            alt="alt text"
            src="/balls.svg"
            className={style.user__balls}
          />
        </div>
        <p className={style.user__p}>{text}</p>
        <Button size='large' className={style.user__button} onClick={print}>Скачать pdf</Button>
      </div>
    </div>
  )
}

Users.getLayout = EmptyLayout;

export default Users;