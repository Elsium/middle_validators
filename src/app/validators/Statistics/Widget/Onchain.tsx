import s from "./Stat.module.scss";
import useSWR from "swr";
import Loading from "@/app/components/Loading/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Onchain() {

    const { data } = useSWR('https://api.seistream.app/chain/network', fetcher)

    return (
        <div className={s.statItem}>
            { data
                ? `${(data.blockTime.diffTime * 100).toFixed(2)}` + '%'
                : <Loading/>
            } <span className={s.subStatText}>Onchain APY</span>
        </div>
    )
}