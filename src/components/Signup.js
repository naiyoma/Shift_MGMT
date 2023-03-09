import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// let organization = "TestOrganization"


const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");
    const [organizations, setOrganizations] = useState([]);
    const [selectedOrganization, setSelectedOrganization] = useState('');

    const navigate = useNavigate();


    useEffect(() => {
        axios.get("https://web-production-fc54.up.railway.app/api/orgs/")
            .then((response) => {
                setOrganizations(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    const handleOrganizationChange = (event) => {
        setSelectedOrganization(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: username,
            password: password,
            confirm_password: confirm_password,
            email: email,
            is_staff: false,
            department: department,
            position: "test position",
            
        };
        axios
        .post("https://web-production-fc54.up.railway.app/api/createuser/", JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then((response) => {
            console.log(response);
            navigate("/login");
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
            <div>
                <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                    <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Name
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="text"
                                        name="name"
                                        value={username}
                                        onChange={(event) => setUsername(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Email
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="email"
                                        name="email"
                                        value = {email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        required
                                        />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password"
                                        value = {password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Confirm Password
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        value = {confirm_password}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Department
                                </label>
                                <div className="flex flex-col items-start">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        value = {department}
                                        onChange={(event) => setDepartment(event.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="organization" className="block text-gray-700 text-sm font-bold mb-2">
                                    Select Organization
                                </label>
                                <div className="flex flex-col items-start">
                                     <select
                                        name="organization"
                                        value={selectedOrganization} 
                                        onChange={handleOrganizationChange}
                                        className= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                        >
                                        {organizations.map((org) => (
                                            <option key={org.id} value={org.name}>
                                                {org.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-fuchsia-900 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-grey-600">
                            Already have an account?{" "}
                            <span>
                                <a className="text-fuchsia-900 hover:underline" href="#">
                                    Log in
                                </a>
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
    

export default Signup;