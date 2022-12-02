import { useState } from "react";
import Image from "next/image";
import { Input, Button, Textarea } from "@skbkontur/react-ui";

import styles from "../generator/index.module.css";

const Generator = () => {
    const [imageUrl, setImageUrl] = useState('https://replicate.delivery/pbxt/wDTf6b1GOox3KyGbGdVijX7asfMLZasVx5wmhm0fk10XWJLgA/out-0.png');
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    const body = JSON.stringify({
        version: "be04660a5b93ef2aff61e3668dedb4cbeb14941e62a3fd5998364a32d613e35e",
        input: value,
    });

    const fetchData = () => {
        setLoading(true);
        fetch(`https://api.replicate.com/v1/predictions`, {
            method: "POST",
            mode: "no-cors",
            headers: {
              Authorization: `Token 2e1ddf7781b00bb03c4f2c688c12fba1b00c920c`,
              "Content-Type": "application/json"
            },
            body,
        }).then((res) => {
            console.log({res})
            return res.text()
        })
        .then((response) => { 
            setImageUrl(response)
        })
        .catch(console.log)
        .finally(() => setLoading(false))
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
                <Button loading={loading} className={styles.button} onClick={() => fetchData(value)}>
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