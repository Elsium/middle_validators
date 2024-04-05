import useSWR from 'swr'
import s from "./Stat.module.scss";
import Loading from "@/app/components/Loading/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Window() {
    const { data } = useSWR('https://api.seistream.app/chain/network', fetcher)
    return (
        <div className={s.statItem}>
            {data
                ? data.window.round
                : <Loading/>
            } <span className={s.subStatText}>Window</span>
        </div>
    )
}