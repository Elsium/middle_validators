import Link from "next/link";

export default function ValidatorRank({params}: any) {
    return (
        <div className='text-white font-roboto mx-auto text-2xl text-center mt-20'>
            <p>Validator {params.rank}</p>
            <Link href={'/validators'} className='text-blue-300'>Go back</Link>
        </div>
    )
}