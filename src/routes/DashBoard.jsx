import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import EditFolders from "../components/dashboard components/EditFolders"

function DashBoard(){
    const navigate = useNavigate()
    
    /* ------------Dashboard-Locations------------ */

    const [location, setLocation] = useState(sessionStorage.getItem('location'))

    /* ------------Log-Out-Function------------ */

    const handleLogout = () => {
        localStorage.clear()
        sessionStorage.clear()
        navigate('/')
        window.alert("You've been successfuly logged out")
    }

    /* ------------Navigation-Function------------ */

    const [userFolders, setUserFolders] = useState([sessionStorage.getItem('userData')])

    useEffect(() => {
        setUserFolders(JSON.parse(sessionStorage.getItem('userData')))
    }, [sessionStorage.getItem('userData')])
    
    return <>
        <div className='absolute w-full overflow-hidden h-fit md:top-[250px] top-[250px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[-200px] translate-x-[-300px]'>FOLDER</h1>
        </div>
        <section className="grid grid-cols-[fit-content(100%)_auto_fit-content(100%)] grid-rows-[fit-content(100%)_auto] h-[100vh] p-20">

            {/* ------------Top-Screen-Content------------ */}
            <div className="w-full h-fit col-span-3">
                <h1 className="uppercase md:text-[1.5rem] text-[1.25rem] cursor-default select-none w-fit h-fit">folder.</h1>
            </div>

            {/* ------------Left-Screen-Content------------ */}

            <div className="w-fit pt-20 h-full min-h-fit flex flex-col justify-between">

                {/* ------------Folders------------ */}

                <div className="flex flex-col gap-5 w-fit">
                <button onClick={() => setLocation('dashboard')} className={`smaller_simple_btn ${location === 'dashboard' ? 'active_btn_state' : ''}`}>dashboard</button>
                    {userFolders.map((folder, index) => (
                        <button onClick={() => setLocation(folder)} key={index} className={`smaller_simple_btn w-fit ${location === folder ? 'active_btn_state' : ''}`}>{folder.folder_name}</button>
                    ))}
                </div>

                {/* ------------Actions------------ */}

                <div className="flex flex-col gap-5 w-fit align-bottom mt-[80px]">
                    <button onClick={() => setLocation('folderEdit')} className={`smaller_simple_btn w-fit ${location === 'folderEdit' ? "active_btn_state" : ""}`}>edit folders</button>
                    <button onClick={handleLogout} className="smaller_simple_btn w-fit">LOG OUT</button>
                </div>
            </div>

            {/* ------------Center-Screen-Content------------ */}

            <section className="pt-20 pl-80 w-2/3">
                {location === 'folderEdit' ? <EditFolders></EditFolders> : ""}
            </section>
        </section>
    </>
}
export default DashBoard