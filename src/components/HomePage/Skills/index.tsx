import styles from "./styles.module.css"
import {Icon} from "@iconify/react";
import React from "react";
import {skillInfo} from "./data"

export default function SkillsInfo() {
    return (
        <div className={styles.skillInfoContainer}>
            {
                skillInfo.map((item, index) => (
                    <a href={item.linkUrl}>
                        <div className={styles.skillItem}>
                            <Icon icon={item.iconName} width="26"/>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}