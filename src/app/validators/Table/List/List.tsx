import s from "./List.module.scss";
import ListItem from "@/app/validators/Table/List/ListItem/ListItem";
import useSWR from "swr";
import Loading from "@/app/components/Loading/Loading";

type Callback = {
    active: boolean;
    search: string;
    onActive: () => void;
    onInactive: () => void;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function List({active, search, onActive, onInactive}: Callback) {

    const { data, error } = useSWR('https://api.seistream.app/validators', fetcher, { dedupingInterval: 5 * 60 * 1000 })
    const filteredData = data
        ? data.filter((item: any) => item.description.moniker.toLowerCase().includes(search.toLowerCase()))
        : '';

    const items = filteredData ? filteredData.map((i: any) => <ListItem key={i.rank} show={active === !!Number((i.cumulativeShare*100).toFixed(2))}
                                          rank={i.rank}
                                          moniker={i.description.moniker}
                                          tokens={new Intl.NumberFormat("ru-RU").format(i.tokens)}
                                          votingPowerPercent={(i.votingPowerPercent*100).toFixed(2)}
                                          cumulativeShare={(i.cumulativeShare*100).toFixed(2)}
                                          rate={i.commission.commissionRates.rate/10_000_000_000_000_000}
                                          uptime={ i.jailed
                                              ? i.tombstoned ? 'Tombstoned' : 'In Jailed'
                                              : (i.uptime.windowUptime.uptime*100).toFixed(2) + '%'}
                                          participationRate={(i.participation.rate*100).toFixed(2)}
                                          participationVoted={i.participation.voted}
                                          participationTotal={i.participation.total} />)
        : <Loading/>;

    return (
        <section>
            <div className={s.listType}>
                <button onClick={onActive} className={active ? `${s.listTypeBtn} ${s.active}` : s.listTypeBtn}>
                    Active set
                </button>
                <button onClick={onInactive} className={active ? s.listTypeBtn : `${s.listTypeBtn} ${s.active}`}>
                    Inactive set
                </button>
            </div>
            <div className={s.list}>
                {!error ? items : <div>Fail to load.</div>}
            </div>
        </section>
    )
}