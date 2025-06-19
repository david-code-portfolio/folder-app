import { useNavigate } from "react-router"
import { useState, useEffect } from "react"
import DocumentList from "../components/dashboard components/DocumentList"
import DocumentUpload from "../components/dashboard components/DocumentUpload"

function DashBoard(){
    const navigate = useNavigate()

    /* ------------Filter-Folders------------ */

    const [filter, setFilter] = useState('')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    /* ------------Display-Foldes------------ */

    const [userFolders, setUserFolders] = useState(() => {
        const folders = localStorage.getItem('userFolders')
        return JSON.parse(folders)
    })

    const handleSetUserFolders = (getFolders) => {
        setUserFolders(getFolders)
    }

    useEffect(() => {
        handleSetUserFolders(userFolders)
    }, [userFolders])
    
    /* ------------Dashboard-Location------------ */

    const [location, setLocation] = useState(localStorage.getItem('location'))

    const handleLocationChange = (location) => {
        localStorage.setItem('location', location)
        setLocation(location)
    }

    /* ------------Log-Out-Function------------ */

    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
        window.alert("You've been successfuly logged out")
    }

    /* ------------Hamburger-Menu-Function------------ */

    const [isToggled, setIsToggled] = useState(true)

    const toggleMenu = () => {
        setIsToggled(prev => !prev)
    }

    /* ------------OnClick-Function------------ */

    const menuIcon = !isToggled ? 
        <svg width="30" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20L0 18L8 10L0 2L2 0L10 8L18 0L20 2L12 10L20 18L18 20L10 12L2 20Z" fill="currentColor"/>
        </svg> :
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20V16.6667H30V20H0ZM0 11.6667V8.33333H30V11.6667H0ZM0 3.33333V0H30V3.33333H0Z" fill="currentColor"/>
        </svg>

    const OnClick = (folder) => {
        toggleMenu()
        handleLocationChange(folder)
    }

    return <>
        <div className='absolute w-full overflow-hidden h-fit md:top-[250px] top-[250px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[-200px] translate-x-[-300px]'>FOLDER</h1>
        </div>
        <section className="grid grid-cols-[fit-content(100%)_auto_fit-content(100%)] grid-rows-[fit-content(100%)_auto] h-[100vh] md:p-20 p-5">

            {/* ------------Top-Screen-Content------------ */}
            <div className="w-full h-fit col-span-1 relative">
                <h1 className="grid-span-1 relative uppercase md:text-[1.5rem] text-[1.25rem] cursor-default select-none w-fit h-fit">
                    folder.
                    {isToggled ? <span className="absolute text-[1rem] top-[75%] left-0 text-[var(--grey_color)] min-lg:hidden block">{location}</span> : '' }
                </h1>
                {/* ------------Hamburger-Menu------------ */}
                <div className="max-lg:flex hidden w-fit">
                    <button onClick={toggleMenu} className="cursor-pointer align-middle">
                        {menuIcon}
                    </button>
                </div>
                {!isToggled ?
                <div className="absolute right-0 top-[100%] w-full pt-20 grid gap-5 lg:hidden">
                    <button onClick={() => OnClick('dashboard')} className={`smaller_simple_btn ${location === 'dashboard' ? 'active_btn_state' : ''}`}>dashboard</button>
                    {userFolders.map((folder, index) => (
                        <button onClick={() => OnClick(folder)} key={index} className={`smaller_simple_btn ${location === folder ? 'active_btn_state' : ''}`}>{folder}</button>
                    ))}
                    <div className="flex flex-col gap-5 w-fit align-bottom mt-[80px]">
                        <button onClick={handleLogout} className="smaller_simple_btn w-fit">LOG OUT</button>
                    </div>
                </div> : '' }
            </div>
            {/* ------------Filter------------ */}
            <div className="col-span-2 2xl:ml-80 lg:ml-40 ml-0 flex gap-2 cursor-pointer items-center text-[1.25rem] filterContainer">
                <svg className="filterIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 24V16H13.3333V18.6667H24V21.3333H13.3333V24H10.6667ZM0 21.3333V18.6667H8V21.3333H0ZM5.33333 16V13.3333H0V10.6667H5.33333V8H8V16H5.33333ZM10.6667 13.3333V10.6667H24V13.3333H10.6667ZM16 8V0H18.6667V2.66667H24V5.33333H18.6667V8H16ZM0 5.33333V2.66667H13.3333V5.33333H0Z" fill="currentColor"/>
                </svg>
                <input onChange={handleFilter} type="text" maxLength='16' placeholder="filter documents" className="uppercase inputBtn placeholder:text-[var(--grey_color)] outline-0"/>
            </div>

            {/* ------------Left-Screen-Content------------ */}

            <div className="w-fit pt-20 h-full min-h-fit flex flex-col justify-between max-lg:hidden">

                {/* ------------Folders------------ */}

                <div className="flex flex-col gap-5 w-fit">
                <button onClick={() => handleLocationChange('dashboard')} className={`smaller_simple_btn ${location === 'dashboard' ? 'active_btn_state' : ''}`}>dashboard</button>
                    {userFolders.map((folder, index) => (
                        <button onClick={() => handleLocationChange(folder)} key={index} className={`smaller_simple_btn w-fit ${location === folder ? 'active_btn_state' : ''}`}>{folder}</button>
                    ))}
                </div>

                {/* ------------Actions------------ */}

                <div className="flex flex-col gap-5 w-fit align-bottom mt-[80px]">
                    <button onClick={handleLogout} className="smaller_simple_btn w-fit">LOG OUT</button>
                </div>
            </div>

            {/* ------------Center-Screen-Content------------ */}

            <section className={`mt-18 2xl:ml-80 lg:ml-40 ml-0 lg:w-3/5 max-w-[1000px] w-full lg:col-span-1 col-span-3 ${isToggled ? "max-lg:block" : "max-lg:hidden"}`}>
                {location === 'upload document' ? 
                    <DocumentUpload action={handleLocationChange} refresh={handleSetUserFolders}></DocumentUpload> : 
                    <DocumentList action={handleLocationChange} filter={filter}></DocumentList>}
            </section>
        </section>
    </>
}
export default DashBoard