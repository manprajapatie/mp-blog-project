import React, { useState } from 'react'
import users from '../userData'
import { useDispatch, useSelector } from "react-redux"
import { login, setError } from '../authSlice'
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [form, setForm] = useState({ username: "", password: "" })
    const error = useSelector((state) => state.auth.error) //get error msg from auth reducer
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const foundUser = users.find((user)=>{
            user.username === form.username && user.password === form.password
        })

        if(foundUser){
            dispatch(login(foundUser))
            navigate("/") //if user and pass true then navigate to home
        }
        else{
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
                            name="usename"
                            id='usename'
                            value={form.username}
                            onChange={handleChange}
                            type="text"
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
                            value={form.password}
                            onChange={handleChange}
                            type="text"
                        />
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
