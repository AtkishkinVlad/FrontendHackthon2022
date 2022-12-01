import classNames from "classnames";

import { ITag } from "./types/types"
import { randomColorName } from "../../utils/randomColor"
import styles from '../Tag/Tag.module.css'

export const Tag = ({ size, children }: ITag) => {
    const colorName = randomColorName();
    const className = classNames(styles['base'], styles[`${size}`], styles[`${colorName}`]);

    return (<div className={className}>
        {children}
    </div>)
}