import s from './Search.module.scss';
import Image from "next/image";
import find from "@/app/validators/Table/Search/img/find.svg";

type Callback = {
    search: string;
    onType: (value: string) => void;
};

export default function Search({ search, onType }: Callback) {
    return (
        <div className={s.valid}>
            <h1 className={s.title}>Validators</h1>
            <div className={s.search}>
                <Image src={find} alt="findICO"/>
                <input onChange={(event) => onType(event.target.value)} value={search} type="text" placeholder='Search validator'/>
            </div>
        </div>
    )
}