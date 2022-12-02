import { useState } from "react";
import Image from "next/image";
import { Input, Button, Textarea } from "@skbkontur/react-ui";

import styles from "../generator/index.module.css";

const Generator = () => {
    const [imageUrl, setImageUrl] = useState('https://replicate.delivery/pbxt/wDTf6b1GOox3KyGbGdVijX7asfMLZasVx5wmhm0fk10XWJLgA/out-0.png');
    const [value, setValue] = useState('');

    const fetchData = async (text: string) => {
        await fetch(`https://6dfd-217-114-224-7.eu.ngrok.io/model?text=${text}`, { mode: 'no-cors' }).then(async (res) => {
            const response = await res.json();
            setImageUrl(response);
        })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>
                Создание открытки
            </h1>
            <h2>
                Картинка
            </h2>
            <Image src={imageUrl} width={455} height={455} alt="Картинка для открытки" className={styles.image} />
            <div className={styles.input__block}>
                <Input className={styles.input} onChange={(e) => setValue(e.target.value)}/>
                <Button className={styles.button} onClick={() => fetchData(value)}>
                    Нарисовать
                </Button>
            </div>
            <h2 className={styles.block}>
                Текст поздравления
            </h2>
            <Textarea className={styles.textarea} />
        </div>
    )
}

export default Generator;