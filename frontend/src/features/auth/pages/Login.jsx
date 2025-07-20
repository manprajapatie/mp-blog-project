import React, { useEffect, useState } from 'react'
import { users } from '../userData'
import { useDispatch, useSelector } from "react-redux"
import { login, setError } from '../authSlice'
import { useNavigate } from "react-router-dom"

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
            <div className='min-h-screen flex justify-center items-center bg-gray-100'>

                <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md w-full max-w-md'>
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
                            className='w-full h-10 border-2 border-amber-600 border-w focus:outline-none focus:border-amber-800 rounded-xl  text-m p-2'
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
                            className='w-full h-10 border-2 border-amber-600 border-w focus:outline-none focus:border-amber-800 rounded-xl  text-m p-2'
                            required
                        />{/* required = {true} and false, for dynamic datacontroll */}
                    </div>

                    {/* button for submit login */}
                    <button
                        type='submit'
                        className='w-full bg-green-500 text-white py-2 px-4 rounded  hover:bg-green-600'
                    >
                        Login
                    </button>
                </form>

            </div>

        </>
    )
}

export default Login
