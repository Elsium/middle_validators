'use client';

import s from "./Stat.module.scss";

export default function Window(props: any) {
    return (
        <div className={s.statItem}>
            {props.qty} <span className={s.subStatText}>Window</span>
        </div>
    )
}