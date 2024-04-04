'use client';

import s from "./Stat.module.scss";

export default function Onchain(props: any) {
    return (
        <div className={s.statItem}>
            {props.qty} <span className={s.subStatText}>Onchain APY</span>
        </div>
    )
}