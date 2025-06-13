import { useState, useEffect } from "react"

function Folder({text}){
    const [userFolders, setUserFolders] = useState(JSON.parse(sessionStorage.getItem('userData')))

    const handleRemove = () => {
        const updatedFolders = userFolders.filter(folder => folder.folder_name !== text)
        setUserFolders(updatedFolders)
        sessionStorage.setItem("userData", JSON.stringify(updatedFolders));
    }

    return <div className="folder relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
        <span className="inline-flex justify-between w-full">
            {text}
            <button onClick={handleRemove}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="currentColor"/>
                </svg>
            </button>
        </span>
</div>
}
export default Folder