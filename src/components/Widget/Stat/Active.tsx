'use client';

import s from "./Stat.module.scss";

export default function Active(props: any) {
    return (
        <div className={s.statItem}>
            {props.qty} <span className={s.subStatText}>Active</span>
        </div>
    )
}