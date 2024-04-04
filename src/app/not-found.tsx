import Link from "next/link";

export default function NotFound() {
    return (
        <div className='flex justify-center items-center'>
            <div className='mx-auto text-white flex items-center font-roboto'>
                <p className='text-2xl'>404</p>
                <div className='h-16 w-1 border-l border-l-gray-50 mx-4'/>
                <p className='text-xm'>Page not found<br/>Return <Link className='text-amber-500 hover:underline' href={`/`}>
                    back
                </Link></p>
            </div>
        </div>
    )
}