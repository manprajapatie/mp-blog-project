import React, { useEffect, useState } from 'react'
import { users } from '../features/auth/userData'
import { useDispatch, useSelector } from "react-redux"
import { login, setError } from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom"
import img from ".././assets/FoodImg/img5.jpeg"
import logo from ".././assets/logoCol.png"

const Login = () => {

    const [form, setForm] = useState({ username: "", password: "" })
    const error = useSelector((state) => state.auth.error) //get error msg from auth reducer
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    //If Authentication is confirm then move to home page
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])


    //Take the username and password
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //Authentication verifing (check if user and password are correct)
    const handleSubmit = (e) => {
        e.preventDefault()
        const foundUser = users.find((user) => {
            return user.username === form.username && user.password === form.password

        })

        if (foundUser) {
            dispatch(login(foundUser))
            navigate("/") //if user and pass true then navigate to home
        }
        else {
            dispatch(setError("Incorrect username or password"))
        }
    }


    return (
        <>
            <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center'>

                <div className='max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center items-center overflow-hidden'>


                    {/* Side Background */}
                    <div className="w-full h-screen overflow-hidden">
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>


                    <form onSubmit={handleSubmit} className='bg-white p-8 w-full max-w-md '>

                        {/* Logo */}
                        <div className='w-full flex flex-col justify-center items-center mb-6'>
                            <img
                                src={logo}
                                alt="Logo"
                                className='w-50'
                            />
                        </div>


                        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>

                        {/*if get any error then error become true and give us the msg */}
                        {error && <p className='text-red-500 mb-4 text-center'>{error}</p>}

                        {/* For username */}
                        <div className='mb-4'>
                            <label
                                className="block mb-1 font-medium"
                                htmlFor='username' //it is used to link with input for better cordination, link with id of input
                            >
                                Username
                            </label>

                            <input
                                name="username"
                                id='username'
                                placeholder='emilys'
                                value={form.username}
                                onChange={handleChange}
                                type="text"
                                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                required
                            />

                        </div>


                        {/* For password     */}
                        <div className='mb-6'>
                            <label
                                className="block mb-1 font-medium"
                                htmlFor='password' //it is used to link with input for better cordination, link with id of input
                            >
                                Password
                            </label>

                            <input
                                name="password"
                                id='password'
                                placeholder='emilyspass'
                                value={form.password}
                                onChange={handleChange}
                                type="password"
                                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                                required
                            />{/* required = {true} and false, for dynamic datacontroll */}
                        </div>

                        {/* button for submit login */}
                        <button
                            type='submit'
                            className='w-full bg-Secondary-800 text-white py-2 px-4 rounded  cursor-pointer'>
                            Login
                        </button>
                    </form>


                </div>
            </div>

        </>
    )
}

export default Login
