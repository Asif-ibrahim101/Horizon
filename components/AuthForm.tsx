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
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'


const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fontSchema = authformSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof fontSchema>>({
        resolver: zodResolver(fontSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof fontSchema>) => {

        setIsLoading(true);
        setIsLoading(false);

        try {

            if (type === 'sign-up') {
                // const newUser = await SignUp(data)
                // setUser(newUser
            }

            if (type === 'sign-in') {
                // const response = await SignIn({
                //     email: data.email,
                //     password: data.password
                // }

                // if(response) {
                //     router.push('/')
                // }
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
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
                        >{user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
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
                            {
                                type === 'sign-up' && (
                                    <>
                                        <div className='flex gap-4'>
                                            <CustomInputs control={form.control} name='FirstName' label='First Name' placeholder='enter your first name' />
                                            <CustomInputs control={form.control} name='LastName' label='Last Name' placeholder='enter your lasy name' />
                                        </div>
                                        <CustomInputs control={form.control} name='address1' label='Address' placeholder='enter your specific address' />
                                        <CustomInputs control={form.control} name='City' label='City' placeholder='enter your city' />
                                        <div className='flex gap-4'>
                                            <CustomInputs control={form.control} name='State' label='State' placeholder='Example: LON' />
                                            <CustomInputs control={form.control} name='postalCode' label='Post Code' placeholder='Example: PR1 4NQ' />
                                        </div>

                                        <div className="flex gap-4">
                                            <CustomInputs control={form.control} name='dateOfBirth' label='Date of Birth' placeholder='YYYY-MM-DD' />
                                            <CustomInputs control={form.control} name='SSN' label='SSN' placeholder='1234' />
                                        </div>
                                    </>
                                )
                            }
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <CustomInputs control={form.control} name='email' label='Email' placeholder='enter your email' />
                                <CustomInputs control={form.control} name='password' label='Password' placeholder='enter your password' />

                                <div className='flex flex-col gap-4'>
                                    <Button className='form-btn' type="submit" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                                <Loader2 size={20} className='animate-spin' /> &nbsp;
                                                Loading...
                                            </>
                                        ) : type === 'sign-in' ? 'Sign In' : 'Sign up'}
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <footer className='flex justify-center gap-1'>
                            <p
                                className='text-14 font-normal text-gray-600'
                            >{type === 'sign-in' ? 'Dont have an account?' : 'Already have an account? '}</p>
                            <Link
                                className='form-link'
                                href={type === 'sign-in' ? '/sign-up' : '/sign-in'}>
                                {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                            </Link>
                        </footer>
                    </>
                )}
            </section>
        </>
    )
}

export default AuthForm