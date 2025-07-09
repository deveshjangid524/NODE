import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { register } from '../../https';
import { enqueueSnackbar } from 'notistack';
const Register = ({ setIsRegister }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        registerMutation.mutate(formData);
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    }

    const registerMutation = useMutation({
        mutationFn: (reqData) => register(reqData),
        onSuccess: (res) => {
            const { data } = res;
            enqueueSnackbar(data.message, { variant: "success" });
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                role: ""
            })

            setTimeout(() => {
                setIsRegister(false);
            }, 3000)

        },
        onError: (error) => {
            const { response } = error;
            enqueueSnackbar(response.data.message, { variant: "error" });
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='block text-[#ababab] mb-2 text-sm font-medium'>Employee Name</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter employee name'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Employee email</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter employee email'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Employee Phone</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input type="number"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter employee phone number'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Password</label>
                    <div className='flex items-center rounded-lg p-5 px-4 bg-[#1f1f1f]'>
                        <input type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter password'
                            className='bg-transparent flex-1 text-white focus:outline-none'
                            required />
                    </div>
                </div>

                <div>
                    <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>
                        Choose Your role
                    </label>
                    <div className="flex item-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Admin"].map((role) => {
                            return (
                                <button key={role} type='button'
                                    onClick={() => handleRoleSelection(role)}
                                    className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]  ${formData.role === role ? 'bg-indigo-700 text-white ' : 'hover:bg-[#2f2f2f]'}`}>
                                    {role}
                                </button>
                            )

                        })}
                    </div>
                </div>

                <button type='submit' className='w-full mt-6 py-3 text-lg bg-yellow-400 text-gray-900 font-bold rounded-lg'>Sign Up</button>
            </form>
        </div>
    )
}

export default Register
