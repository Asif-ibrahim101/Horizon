'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const SideBar = ({ user }: User) => {
    const pathname = usePathname();
    return (
        <>
            <section className='sidebar'>
                <nav className='flex flex-col gap-4'>
                    <Link href='/' className='mb-12 flex cursor-pointer items-center gap-2'>
                        <Image className='size-[24px] max-xl-[size-14]' alt='logo' width={34} height={34} src="/icons/logo.svg" />
                        <h1 className='sidebar-logo'>Horizon</h1>
                    </Link>

                    {sidebarLinks.map((item) => {
                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                        return (
                            <>
                                <Link className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} key={item.label} href={item.route}>
                                    <div className="relative size-6">
                                        <Image
                                            className={cn({
                                                'brightness-[3] invert-0': isActive
                                            })}
                                            src={item.imgURL} alt={item.label} fill />
                                    </div>
                                    <p className={cn("sidebar-label", { "!text-white": isActive })}>
                                        {item.label}
                                    </p>
                                </Link>
                            </>
                        )
                    })}

                    {/* USER */}
                    {/* USER */}
                </nav>
            </section>
        </>
    )
}

export default SideBar