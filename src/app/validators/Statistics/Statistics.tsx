import s from "@/app/validators/Statistics/Statistics.module.scss";
import Active from "@/app/validators/Statistics/Widget/Active";
import Inactive from "@/app/validators/Statistics/Widget/Inactive";
import Onchain from "@/app/validators/Statistics/Widget/Onchain";
import Window from "@/app/validators/Statistics/Widget/Window";

type Callback = {
    active: boolean;
};

export default function Statistics({active}: Callback) {
    return (
        <section>
            <h1 className={s.title}>Validators Statistics</h1>
            <div className={s.stat}>
                {active
                    ? <Active/>
                    : <Inactive/>
                }
                <Onchain/>
                <Window/>
            </div>
        </section>
    )
}