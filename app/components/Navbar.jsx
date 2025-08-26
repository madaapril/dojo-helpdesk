'use client'

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Logo from './dojo-logo.png';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div>
            <nav>
                <Image
                    src={Logo}
                    alt='Dojo Helpdesk logo'
                    width={70}
                    quality={100}
                />
                <h1>Dojo Helpdesk</h1>
                <Link 
                    href="/" 
                    className={pathname === "/" ? "font-bold text-primary-600" : ""}>
                        Dashboard
                </Link>
                <Link 
                    href="/tickets"
                    className={pathname === "/tickets" ? "font-bold text-primary-600" : ""}
                >
                    Tickets
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
