import { Link } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { stringify } from "postcss"

function Register(){

    /* ------------Get-Data------------ */

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost/portfolio/folder-app/backend/index.php')
        .then(response => {
            setUsers(response.data)
        })
    }, [])

    /* ------------Register------------ */

    const [formData, setFormData] = useState({
        
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return <section>
        <div className='absolute w-full overflow-hidden h-fit md:top-[95px] top-[220px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[0] translate-x-[-300px]'>FOLDER</h1>
        </div>
        <Link to='/'>
            <h1 className="uppercase text-[1.5rem] cursor-pointer select-none w-fit mt-[80px] ml-[80px]">folder.</h1>
        </Link>

        {/* ------------Register-Form------------ */}

        <h1 className="w-fit text-[3rem] m-auto mt-[60px]">Create Your Account</h1>
        <p className="italic w-[500px] m-auto mt-[1rem] text-[1rem]/[2rem] text-justify opacity-60">Create an account to access the library of opportunities and start uploading your documents right now!</p>
        <form onSubmit={handleSubmit} className="w-[500px] m-auto mt-[80px] grid gap-[2.5rem]">
            <input onChange={handleChange} type="text" name="name" placeholder="Name" required
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
            <input onChange={handleChange} type="email" name="email" placeholder="Email" required
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
            <input onChange={handleChange} type="password" name="password" placeholder="Password" required
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
            <button type="submit" className="uppercase cursor-pointer w-fit text-[2rem] hover:translate-x-[10%] hover:opacity-100 duration-200 opacity-60">get started</button>
        </form>
    </section>
}
export default Register