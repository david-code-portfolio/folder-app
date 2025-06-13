import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import EditFolders from "../components/dashboard components/EditFolders"

function DashBoard(){
    const navigate = useNavigate()

    /* ------------Display-Foldes------------ */

    const [userFolders, setUserFolders] = useState([])

    useEffect(() => {
        setUserFolders(JSON.parse(sessionStorage.getItem('userData')))
    }, [])
    
    /* ------------Dashboard-Locations------------ */

    const [location, setLocation] = useState(sessionStorage.getItem('location'))

        const handleLocationChange = (location) => {
            sessionStorage.setItem('location', location)
            setLocation(location)
        }

    /* ------------Log-Out-Function------------ */

    const handleLogout = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigate('/')
        window.alert("You've been successfuly logged out")
    }

    return <>
        <div className='absolute w-full overflow-hidden h-fit md:top-[250px] top-[250px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[-200px] translate-x-[-300px]'>FOLDER</h1>
        </div>
        <section className="grid grid-cols-[fit-content(100%)_auto_fit-content(100%)] grid-rows-[fit-content(100%)_auto] h-[100vh] md:p-20 p-5">

            {/* ------------Top-Screen-Content------------ */}
            <div className="w-full h-fit col-span-3 flex justify-between">
                <h1 className="relative uppercase md:text-[1.5rem] text-[1.25rem] cursor-default select-none w-full h-fit">
                    folder.
                    <span className="absolute text-[1rem] top-[75%] left-0 text-[var(--grey_color)] min-lg:hidden block">{location}</span>
                </h1>
                {/* ------------Hamburger-Menu------------ */}
                <div className="max-lg:block hidden">
                    <button className="cursor-pointer align-middle">
                        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z" fill="currentColor"/>
                        </svg>
                    </button>
                    

                </div>
            </div>

            {/* ------------Left-Screen-Content------------ */}

            <div className="w-fit pt-20 h-full min-h-fit flex flex-col justify-between max-lg:hidden">

                {/* ------------Folders------------ */}

                <div className="flex flex-col gap-5 w-fit">
                <button onClick={() => handleLocationChange('dashboard')} className={`smaller_simple_btn ${location === 'dashboard' ? 'active_btn_state' : ''}`}>dashboard</button>
                    {userFolders.map((folder, index) => (
                        <button onClick={() => handleLocationChange(folder.folder_name)} key={index} className={`smaller_simple_btn w-fit ${location === folder.folder_name ? 'active_btn_state' : ''}`}>{folder.folder_name}</button>
                    ))}
                </div>

                {/* ------------Actions------------ */}

                <div className="flex flex-col gap-5 w-fit align-bottom mt-[80px]">
                    <button onClick={() => handleLocationChange('folderEdit')} className={`smaller_simple_btn w-fit ${location === 'folderEdit' ? "active_btn_state" : ""}`}>edit folders</button>
                    <button onClick={handleLogout} className="smaller_simple_btn w-fit">LOG OUT</button>
                </div>
            </div>

            {/* ------------Center-Screen-Content------------ */}

            <section className="pt-18 xl:pl-80 pl-40 xl:w-2/3 w-4/5 min-w-[400px] max-w-[1000px] max-lg:hidden">
                {location === 'folderEdit' ? <EditFolders userFolders={userFolders} setUserFolders={setUserFolders}></EditFolders> : ""}
            </section>
        </section>
    </>
}
export default DashBoard