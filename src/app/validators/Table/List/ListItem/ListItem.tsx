import s from "./ListItem.module.scss";
import status from '@/app/validators/Table/List/ListItem/img/status.svg'
import Image from "next/image";
import Link from "next/link";

type OutData ={
    show: boolean;
    rank: number;
    moniker: string;
    tokens: string;
    votingPowerPercent: string;
    cumulativeShare: string;
    rate: number;
    uptime: string;
    participationRate: string;
    participationTotal: number;
    participationVoted: number;
}

export default function ListItem({rank, show, moniker, tokens, votingPowerPercent, cumulativeShare, rate, uptime, participationRate, participationTotal, participationVoted}: OutData) {
    if (!show) return '';
    return (
        <Link href={`/validators/${rank}`} className={s.item}>
            <div className={s.nameBox}>
                <p className={s.id}>{rank}</p>
                <img
                    src="https://s3-alpha-sig.figma.com/img/c88d/9479/c22bedcfbca01204a86ff8d0a82cd649?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIwoVCrw0eHsjruD7n96xc1PTzjyRgiJ3PNq9FBkvMDp37MDSOL3HvGpr8iTXOnsDtqCl5EpysMILxVFxMcF6Nr1W0389CszGjraKQiKl7Sxmno-9mTWnEz2G9P9jrlO5jpjYU9ABrq7SlZeQNzD7S5-srnZ~qCCGoMgW5yI3~wpf31YIU-9McNqmfpVUOjYrRMPF-5NlwbdXuG0JuyAJv~ac4lBja59ANYVAZVfmcJvoDxlKzjAVEdjDB17-eKpPCJN1m3dLVFJ9LKc3kJUSC4mMGDSUJrQqNUcYPRJHCFS7YELDGjobOob7kHDkmO7Lw1-BplOw3fBw8RutSCtJg__"
                    alt=""/>
                <p className={s.name}>{moniker}</p>
            </div>
            <p className={s.additional}>Voting Power</p>
            <div className={s.status}>
                <Image src={status} alt={`P`}/>
                <p className={s.text}>{tokens}</p>
                <p className={s.textGray}>{votingPowerPercent}%</p>
            </div>
            <div className={s.progress}>
                <div className={s.line}><div style={{width: `${cumulativeShare}%`}} /></div>
                <p className={s.textGray}>{cumulativeShare}%</p>
            </div>
            <p className={s.additional}>Comm.</p>
            <p className={s.text}>{rate}%</p>
            <p className={s.additional}>Uptime</p>
            <p className={uptime == 'In Jailed' ? `${s.jailed} ${s.text}` : uptime == 'Tombstoned' ? `${s.tombstoned} ${s.text}` : s.text}>{uptime}</p>
            <p className={s.additional}>Participation</p>
            <p className={participationVoted ? s.text : `${s.text} ${s.inactive}`}>{participationRate}% <span className={s.textGray}>{participationVoted}/{participationTotal}</span></p>
            <div className={s.arrow}>→</div>
        </Link>
    )
}