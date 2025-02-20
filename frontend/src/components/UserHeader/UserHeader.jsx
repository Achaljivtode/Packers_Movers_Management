import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function UserHeader() {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    const toogleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const toogleSideBar = () => {
        setIsSideBarVisible(!isSideBarVisible)
    }


    // navigations
    const navigate = useNavigate();

    const goToUserLogin = () => {
        navigate('/user-login');
    }
    const goToAdminLogin = () => {
        navigate('/admin-login');
    }

    return (
        <div>
            <header className="bg-slate-800 border">
                <nav className="flex max-w-[1550px] mx-auto items-center justify-between p-6 lg:px-8" aria-label="Global">

                    {/* logo */}
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5 text-white">
                            <h1>LOGO</h1>
                        </a>
                    </div>

                    {/* hamburger menu hidden for large screen */}
                    <div className="flex lg:hidden">
                        <button type="button"
                            className=" hover:cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                            onClick={toogleSideBar}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    {/* navigation links */}
                    <div className="hidden lg:flex lg:gap-x-12">

                        <a href="/" className="text-sm/6 font-semibold text-white">Home</a>
                        <a href="/about" className="text-sm/6 font-semibold text-white">About</a>
                        <a href="/search" className="text-sm/6 font-semibold text-white">Search</a>

                        <div className="relative ">
                            <button type="button"
                                className="flex items-center gap-x-1 text-sm/6 font-semibold text-white" aria-expanded="false"
                                onClick={toogleDropDown}
                            >
                                Login
                                <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* login dropdown */}
                            {
                                isDropDownVisible && (
                                    <div className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
                                        <div className="p-4  ">
                                            <h1 onClick={goToUserLogin} className='hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-3'>User</h1>
                                            <h1 onClick={goToAdminLogin} className='hover:bg-gray-200 hover:cursor-pointer rounded-md px-3 py-3' >Admin</h1>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                        <a href="/register" className="text-sm/6 font-semibold text-white">Register</a>
                        <a href="/feedback" className="text-sm/6 font-semibold text-white">FeedBack</a>
                    </div>
                </nav>



                {/*  mobile sidebar view */}
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    {
                        isSideBarVisible && (
                            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                                {/* logo and cross icon */}
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <h1>LOGO</h1>
                                    </a>
                                    <button type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setIsSideBarVisible(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* navigation links */}
                                <div className=" mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-6">
                                            <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</a>
                                            <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
                                            <a href="/search" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Search</a>

                                            <div className="-mx-3">
                                                <button type="button"
                                                    className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false"
                                                    onClick={toogleDropDown}
                                                >
                                                    Login
                                                    <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                    </svg>
                                                </button>

                                                {/* login dropdown (mobile view) */}
                                                {
                                                    isDropDownVisible && (
                                                        <div className="mt-2 space-y-2" id="disclosure-1">
                                                            <a href="/user-login" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">User</a>
                                                            <a href="/admin-login" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Admin</a>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                            
                                            <a href="/register" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Register</a>
                                            <a href="/feedback" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">FeedBack</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </header>
        </div>
    )
}

export default UserHeader