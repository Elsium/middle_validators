'use client';

import Statistics from "@/app/validators/Statistics/Statistics";
import Table from "@/app/validators/Table/Table";
import {useState} from "react";


export default function ContainerValidators() {

    const [active, setActive] = useState(true);
    const [search, setSearch] = useState('');

    const onActive = () => {
        setActive(true);
    }

    const onInactive = () => {
        setActive(false);
    }

    const onType = (text: string) => {
        setSearch(text);
    }

    return (
        <div>
            <Statistics active={active}/>
            <Table active={active} search={search} onActive={onActive} onInactive={onInactive} onType={onType}/>
        </div>
    )
}