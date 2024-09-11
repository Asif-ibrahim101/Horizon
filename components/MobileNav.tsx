'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image alt='logo' src='/icons/hamburger.svg' width={30} height={30} />
                </SheetTrigger>
                <SheetContent className='border-none bg-white' side='right'>
                    <Link href='/' className='flex cursor-pointer items-center gap-1 px-4'>
                        <Image alt='logo' width={34} height={34} src="/icons/logo.svg" />
                        <h1 className='text-26 font-bold font-ibm-plex-serif text-black-1'>Horizon</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                    return (
                                        <>
                                            <SheetClose asChild key={item.route}>
                                                <Link className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })} key={item.label} href={item.route}>

                                                    <Image
                                                        width={20}
                                                        height={20}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                        src={item.imgURL} alt={item.label}
                                                    />

                                                    <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        </>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav