import { Link } from "react-router"
function Register(){
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
        <form action="" method="POST" className="w-[500px] m-auto mt-[80px]">
            <input type="text" name="name" placeholder="Name" 
                className="text-[1.5rem] outline-0 w-full border-b-1"/>
        </form>
    </section>
}
export default Register