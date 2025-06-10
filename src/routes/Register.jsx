import { Link } from "react-router"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

function Register(){
    const [formType, setFormType] = useState(localStorage.getItem('register'))
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch("http://localhost/portfolio/folder-app/backend/register.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    register: localStorage.getItem('register') || ''
                })
            })
            const data = await res.json();

            if(localStorage.getItem('register') === "true"){
                if(data.loggedIn === false){
                    console.log(data.message)
                }
                else{
                    localStorage.setItem('user', formData)
                    console.log(data.message)
                    navigate('/dashboard')
                }
            }
            else{
                if(data.loggedIn === false){
                    console.log(data.message)
                }
                else{
                    localStorage.setItem('user', formData)
                    console.log(data.message)
                    navigate('/dashboard')
                }
            }
            setFormData({
                name: "",
                email: "",
                password: ""
            })
        }
        catch(error){
            console.error("Error sending data:", error);
        }
    }

    return <section>
        <div className='absolute w-full overflow-hidden h-fit md:top-[95px] top-[220px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[0] translate-x-[-300px]'>FOLDER</h1>
        </div>
        <Link to='/'>
            <h1 className="uppercase text-[1.5rem] cursor-pointer select-none w-fit mt-[80px] ml-[80px]">folder.</h1>
        </Link>

        {/* ------------Login-Form------------ */}

        <h1 className="w-[500px] text-[3rem] m-auto mt-[60px]">
            {formType == 'true' ? "Create Your Account" : "Welcome Back"}
        </h1>
        <p className="italic w-[500px] m-auto mt-[1rem] text-[1rem]/[2rem] text-justify opacity-60">
            {formType == 'true' ? 
            "Create an account to access the library of opportunities and start uploading your documents right now! " : 
            "We are glad to see you again! To access all the documents you've left here, just log in and you'll be taken to your workspace with all your documents."}
        </p>

        <form onSubmit={handleSubmit} className="w-[500px] m-auto mt-[80px] grid gap-[2.5rem]">
            {formType == 'true' ? 
                <input onChange={handleChange} type="text" name="name" placeholder="Name" required pattern="^[a-zA-Z\s]{1,30}$" maxLength='50' title="Only letters and spaces allowed (max 30 characters)" value={formData.name}
                    className="text-[1.5rem] outline-0 w-full border-b-1"/> : <></>}
            <input onChange={handleChange} type="email" name="email" placeholder="Email" required value={formData.email}
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
            <input onChange={handleChange} type="password" name="password" placeholder="Password" required minLength='6' maxLength='50' value={formData.password}
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
            <button type="submit" className="uppercase cursor-pointer w-fit text-[2rem] hover:translate-x-[10%] hover:opacity-100 duration-200 opacity-60">get started</button>
        </form>
    </section>
}
export default Register