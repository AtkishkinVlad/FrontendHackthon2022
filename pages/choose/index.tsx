import { Link, Select } from "@skbkontur/react-ui";
import Image from "next/image";
import {default as NextLink} from "next/link";
import React from "react";

import { Tag } from "../../components/Tag/Tag";
import { Size } from "../../components/Tag/types/types";

import styles from "../choose/index.module.css";

const Choose = ({ diadocEmployees }) => {
    const [value, setValue] = React.useState();
    const diadocEmployeesFio = diadocEmployees.data.map(employee => employee.attributes.fio);
    const userTags = diadocEmployees.data.filter(employee => employee.attributes.fio === value)[0]?.attributes?.tags?.split(',');
    const infoLink = diadocEmployees.data.filter(employee => employee.attributes.fio === value)[0]?.attributes?.infoLink;
    
    window.localStorage.setItem('fio', value);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Выбирите получателя открытки
            </h1>
            <Select className={styles.select} items={diadocEmployeesFio} value={value} onValueChange={setValue} search />
            <p className={styles.telegram}>
                Telegram: {diadocEmployees.data.filter(employee => employee.attributes.fio === value)[0]?.attributes?.telegram}
            </p>
            <h2 className={styles.section__header}>
                Фоточка получателя (кисика)
            </h2>
            <div className={styles.image__container}>
                <Image className={styles.image} fill alt="Фото твоего коллеги (кисика)" src={diadocEmployees.data.filter(employee => employee.attributes.fio === value)[0]?.attributes?.avatarPath} />
            </div>
            <h2 className={styles.section__header}>
                Интересы
            </h2>
            <section className={styles.tags}>
                {userTags?.length > 0 && userTags?.map(tag => <Tag key={tag} size={Size.Big}>
                    {tag}
                </Tag>)}
                {!userTags && <p className={styles.tags__empty}>
                    Этот хитрый кисик не рассказал масонам о своих интересах, но Диадоковцы знают <Link href={infoLink}>где искать информацию</Link> :)
                </p>}
            </section>
            <NextLink className={styles.generator} href="generator">
                Сделать первую открытку →
            </NextLink>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://c489-217-114-224-0.eu.ngrok.io/api/diadoc-employees`, {
        headers: new Headers({
            'Authorization': 'Bearer f738445282099290c733a628aea3ddac70162538d172c0e65f17e82ae535dd634540ae22adde074970ae64353d71e3cb388be9266f151796028386a9e2121c36ba42cbb6002ba33cfac5f76e391f5d18ac1e48bafeb8a9c99d2a4489a3dcc46954ac62fbfe1cc9db0a5440ed75db46f2a4e3cfe477498d8f3a40b0fd155577fe',
            'Content-Type': 'application/json',
        }),
    })
    const diadocEmployees = await res.json()
    return { props: { diadocEmployees } }
  }

export default Choose