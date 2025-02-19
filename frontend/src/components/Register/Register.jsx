import React, { useState } from 'react'
import { info } from '../../constant/countries'

function Register() {
    const [nationality, setNationality] = useState('Indian')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')




    return (
        <div>
            <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                    <h1 className='text-center text-3xl font-bold'>Packers And Movers</h1>
                    <h2 className="mt-10 text-center text-xl font-semibold tracking-tight text-gray-900">Create your account</h2>
                </div>

                <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-5xl ">
                    <form className=" space-y-6" action="#" method="POST">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                            {/* email */}
                            <div>
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* register as (user/admin) */}
                            <div>
                                <label htmlFor="registerAs" className="block text-sm/6 font-medium text-gray-900">Register As</label>
                                <div className="mt-2">
                                    <select name="registerAs" id="registerAs" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" >
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                            </div>


                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* confPassword */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confpassword" className="block text-sm/6 font-medium text-gray-900">Confirm Password</label>
                                </div>
                                <div className="mt-2">
                                    <input type="password" name="confpassword" id="confpassword" autoComplete="confpassword" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* name */}
                            <div>
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Full Name</label>
                                <div className="mt-2">
                                    <input type="text" name="name" id="name" autoComplete="name" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* date of birth */}
                            <div>
                                <label htmlFor="DOB" className="block text-sm/6 font-medium text-gray-900">D.O.B</label>
                                <div className="mt-2">
                                    <input type="date" name="DOB" id="DOB" autoComplete="DOB" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="number" className="block text-sm/6 font-medium text-gray-900">Mobile Number </label>
                                <div className="mt-2">
                                    <input type="number" name="number" id="number" autoComplete="number" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* Nationality */}
                            <div>
                                <label htmlFor="nationality" className="block text-sm/6 font-medium text-gray-900">Nationality </label>
                                <div className="mt-2">
                                    <input type="text" name="nationality" id="nationality" autoComplete="nationality" defaultValue={nationality} onKeyUp={(e) => setNationality(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            {/* country */}
                            <div>
                                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">Country </label>
                                <div className="mt-2">
                                    <select
                                        name="country"
                                        id="country"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        <option value="">Select a Country</option>
                                        {
                                            info.Countries.map((option) => (
                                                <option key={option} value={option}  >{option}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            {/* State dropdown */}
                            <div>
                                <label htmlFor="state" className="block text-sm/6 font-medium text-gray-900">State </label>
                                <div className="mt-2">
                                    <select
                                        name="state"
                                        id="state"
                                        onChange={(e) => setState(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        disabled={!country}
                                    >
                                        <option value="">Select a state</option>
                                        {country === 'India' && info.State.India.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                        {country === 'Australia' && info.State.Australia.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                        {country === 'United States of America (USA)' && info.State.USA.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>



                            {/* city dropdown */}
                            <div>
                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">State </label>
                                <div className="mt-2">
                                    <select
                                        name="city"
                                        id="city"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        disabled={!country}
                                        onChange={(e) => setCity(e.target.value)}
                                    >
                                        <option value="">Select a City</option>

                                        {state === 'Maharastra' && info.City.Maharastra.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Rajasthan' && info.City.Rajasthan.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Uttarakhad' && info.City.Uttarakhad.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Goa' && info.City.Goa.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'New South Wales' && info.City.NewSouthWales.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Victoria' && info.City.Victoria.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Queensland' && info.City.Queensland.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Florida' && info.City.Florida.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Georgia' && info.City.Georgia.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Lowa' && info.City.Lowa.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                        {state === 'Alaska' && info.City.Alaska.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">Address</label>
                                <div className="mt-2">
                                    <input type="text" name="address" id="address" autoComplete="address" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                        </div>



                        {/* register button */}
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already a member?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Login</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register   
