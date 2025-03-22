import { auth, signOut, signIn } from "@/auth";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {

    const session = await auth();

    return (
        <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={144} height={30}></Image>
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    {
                        session && session?.user ? (
                            <>
                                <Link href={"/startup/create"}>
                                    <span>Create</span>
                                </Link>
                                <button onClick={async () => {
                                    "use server"
                                    await signOut({redirectTo: "/"})
                                }}>
                                    <span>Logout</span>
                                </button>
                                <Link href={`/user/${session.id}`}>
                                    <span>{session?.user?.name}</span>
                                </Link>
                            </>
                        ) : (
                            <button onClick={async () => {
                                "use server"
                                await signIn("github")
                            }}>
                                <span>Login</span>
                            </button>
                            // <form action={async () => {
                            //     "use server"
                            //     await signIn("github")
                            // }}>
                            //     <button type='submit'>Login</button>
                            // </form>
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar