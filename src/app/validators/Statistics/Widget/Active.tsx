import s from "./Stat.module.scss";
import useSWR from "swr";
import Loading from "@/app/components/Loading/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Active() {
    const { data } = useSWR('https://api.seistream.app/chain/network', fetcher)

    return (
        <div className={s.statItem}>
            {data
                ? data.validators.active
                : <Loading/>
            } <span className={s.subStatText}>Active</span>
        </div>
    )
}