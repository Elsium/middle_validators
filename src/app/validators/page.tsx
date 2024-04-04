import s from './validators.module.scss'
import Image from "next/image";
import find from '@/../public/find.svg'
import Active from "@/components/Widget/Stat/Active";
import Onchain from "@/components/Widget/Stat/Onchain";
import Window from "@/components/Widget/Stat/Window";

export default function Home() {
    return (
        <main className={s.container}>
            <h1 className={s.title}>Validators Statistics</h1>
            <div className={s.stat}>
                <Active qty={100}/>
                <Onchain qty={65.80}/>
                <Window qty={10}/>
            </div>
            <div className={s.valid}>
                <h1 className={s.title}>Validators</h1>
                <div className={s.search}>
                    <Image src={find} alt="findICO"/>
                    <input type="text" placeholder='Search validator'/>
                </div>
            </div>
            <div className={s.listType}>
                <button className={`${s.listTypeBtn} ${s.active}`}>
                    Active set
                </button>
                <button className={`${s.listTypeBtn}`}>
                    Inactive set
                </button>
            </div>
            {/*<div className={s.list}>*/}
            {/*    <div className={s.item}>*/}
            {/*        <p className={s.id}>1</p>*/}
            {/*        <div className={s.name}>*/}
            {/*            <img src="https://s3-alpha-sig.figma.com/img/c88d/9479/c22bedcfbca01204a86ff8d0a82cd649?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CIwoVCrw0eHsjruD7n96xc1PTzjyRgiJ3PNq9FBkvMDp37MDSOL3HvGpr8iTXOnsDtqCl5EpysMILxVFxMcF6Nr1W0389CszGjraKQiKl7Sxmno-9mTWnEz2G9P9jrlO5jpjYU9ABrq7SlZeQNzD7S5-srnZ~qCCGoMgW5yI3~wpf31YIU-9McNqmfpVUOjYrRMPF-5NlwbdXuG0JuyAJv~ac4lBja59ANYVAZVfmcJvoDxlKzjAVEdjDB17-eKpPCJN1m3dLVFJ9LKc3kJUSC4mMGDSUJrQqNUcYPRJHCFS7YELDGjobOob7kHDkmO7Lw1-BplOw3fBw8RutSCtJg__" alt=""/>*/}
            {/*            <p>Haqq Association</p>*/}
            {/*        </div>*/}
            {/*        <div className={s.status}>*/}
            {/*            <img src="" alt=""/>*/}
            {/*            <p className={s.textWhite}>254 476 433</p>*/}
            {/*            <p className={s.textGray}>12.93%</p>*/}
            {/*        </div>*/}
            {/*        <div className={s.progress}>*/}
            {/*            <div className={s.line}></div>*/}
            {/*            <p className={s.textGray}>12.93%</p>*/}
            {/*        </div>*/}
            {/*        <p className={s.textWhite}>10%</p>*/}
            {/*        <p className={s.textWhite}>99.99%</p>*/}
            {/*        <p className={s.textWhite}>100.00% <span className={s.textGray}>8/9</span></p>*/}
            {/*        <div className={s.arrow}>→</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>
    );
}
