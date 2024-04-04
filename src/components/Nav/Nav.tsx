'use client';

import s from './Nav.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import blocks from '@/../public/nav/blocks.svg';
import dashboard from '@/../public/nav/dashboard.svg';
import network from '@/../public/nav/network.svg';
import proposals from '@/../public/nav/proposals.svg';
import transactions from '@/../public/nav/transactions.svg';
import utilities from '@/../public/nav/utilities.svg';
import validators from '@/../public/nav/validators.svg';
import arrow from '@/../public/arrow.svg';


export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className={s.container}>
            <div className={s.header}>
                <p>
                    <Link href={`/`}>EXPLOREME</Link>
                </p>
                <button>MAINNET</button>
            </div>
            <div className={s.navItems}>
                <Link href={`/dashboard`} className={pathname == '/dashboard' ? s.active : ''}>
                    <Image src={dashboard} alt={`D`}/>
                    <p>Dashboard</p>
                    {pathname == '/dashboard'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/blocks`} className={pathname == '/blocks' ? s.active : ''}>
                    <Image src={blocks} alt={`B`}/>
                    <p>Blocks</p>
                    {pathname == '/blocks'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/transactions`} className={pathname == '/transactions' ? s.active : ''}>
                    <Image src={transactions} alt={`T`}/>
                    <p>Transactions</p>
                    {pathname == '/transactions'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/validators`} className={pathname == '/validators' ? s.active : ''}>
                    <Image src={validators} alt={`V`}/>
                    <p>Validators</p>
                    {pathname == '/validators'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/proposals`} className={pathname == '/proposals' ? s.active : ''}>
                    <Image src={proposals} alt={`P`}/>
                    <p>Proposals</p>
                    {pathname == '/proposals'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/utilities`} className={pathname == '/utilities' ? s.active : ''}>
                    <Image src={utilities} alt={`U`}/>
                    <p>Utilities</p>
                    {pathname == '/utilities'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
                <Link href={`/network`} className={pathname == '/network' ? s.active : ''}>
                    <Image src={network} alt={`N`}/>
                    <p>Network</p>
                    {pathname == '/network'
                        ? ''
                        : <Image src={arrow} alt={`>`}/>
                    }
                </Link>
            </div>
        </nav>
    );
}