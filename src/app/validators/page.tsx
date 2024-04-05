import s from '@/app/validators/validators.module.scss'
import ContainerValidators from "@/app/validators/Validators/ContainerValidators"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Validators",
    description: "Case for STAKEME",
};

export default function Validators() {
    return (
        <main className={s.container}>
            <ContainerValidators/>
        </main>
    );
}
