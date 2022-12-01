import Image from "next/image"

import { Tag } from "../Tag/Tag";
import { Size } from "../Tag/types/types";
import styles from "../HistoryCard/HistoryCard.module.css"

export type IHistoryCard = {
    userName: string;
    tags: string[];
    imageUrl: string;
}

export const HistoryCard = ({ userName, tags, imageUrl }: IHistoryCard) => {
    return (
        <article className={styles.HistoryCard__container}>
            <div className={styles.HistoryCard__image_container}>
                <Image src={imageUrl} fill alt="Картинка из открытки" className={styles.HistoryCard__image} />
            </div>
            <div className={styles.HistoryCard__description}>
                <div className={styles.HistoryCard__description_user}>
                    <h3>
                        Кисик
                    </h3>
                    <p>
                        {userName}
                    </p>
                </div>
                <div className={styles.HistoryCard__description_tags}>
                    <h3>
                        Ключевые слова
                    </h3>
                    <div className={styles.HistoryCard__tags}>
                        {tags.map(tag => <Tag key={tag} size={Size.Small}> 
                            tag
                        </Tag>)}
                    </div>
                </div>
            </div>
        </article>
    )
}