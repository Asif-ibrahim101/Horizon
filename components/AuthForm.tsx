'use client'
import React, { useState } from 'react'
import CustomInputs from './CustomInputs'
//for forms from shadcn
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

//zod for forms
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from 'next/link'
import Image from 'next/image'

import { z } from "zod"
import { authformSchema } from '@/lib/utils'


const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);

    // 1. Define your form.
    const form = useForm<z.infer<typeof authformSchema>>({
        resolver: zodResolver(authformSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof authformSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <>
            <section className='auth-form'>
                <header className='flex flex-col gap-5 md:gap-8'>
                    <Link href='/' className='flex cursor-pointer items-center gap-1'>
                        <Image alt='logo' width={34} height={34} src="/icons/logo.svg" />
                        <h1 className='text-26 font-bold font-ibm-plex-serif text-black-1'>Horizon</h1>
                    </Link>

                    <div className="flex flex-col gap-1 md:gap-3">
                        <h1
                            className='text-24 lg:text-36 font-semibold text-gray-900'
                        >{user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Out'}
                        </h1>

                        <p className="text-16 font-normal text-gray-600">
                            {user ? 'Link your account to get started' : 'Please enter your details'}
                        </p>
                    </div>
                </header>

                {user ? (
                    <div className='flex flex-col gap-4'>
                        {/* {Plaid link acc} */}
                    </div>
                ) : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <CustomInputs control={form.control} name='email' label='Email' placeholder='enter your email'/>
                                <CustomInputs control={form.control} name='password' label='Password' placeholder='enter your password'/>

                                <Button type="submit">Submit</Button>
                            </form>
                        </Form>
                    </>
                )}
            </section>
        </>
    )
}

export default AuthForm