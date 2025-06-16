import { useState, useEffect } from "react"
import Folder from "./Folder"

function EditFolders({userFolders, setUserFolders}){

    /* ------------Create-New-Folder------------ */

    const [newFolder, setNewFolder] = useState({
        folderName: "new folder"
    })

    const handleFolderName = (e) => {
        setNewFolder((prev) => ({
            ...prev,
            folderName: e.target.value
        }))
    }

    const handleAddFolder = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch("http://localhost/portfolio/folder-app/backend/userData.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: 'insert',
                    loggedUser: localStorage.getItem('user'),
                    folderName: newFolder.folderName
                })
            })
            const folders = await res.json()
            localStorage.setItem('userData', JSON.stringify(folders))
            setUserFolders(folders)

            setNewFolder({
                folderName: "new folder"
            })
        }
        catch (err){
            console.log(err)
        }
    }

    return <section className="w-full">
        {/* ------------Create-New-Folder------------ */}

        <div className="folder relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
            <span className="inline-flex justify-between w-full">
                <input onChange={handleFolderName} autoComplete="off" name="folderName" type="text" placeholder="new folder" value={newFolder.folderName} maxLength='16' className="w-full cursor-pointer outline-0 uppercase inputBtn placeholder:text-[var(--dark-color)]"/>
                <button onClick={handleAddFolder} className="w-fit cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z" fill="currentColor"/>
                    </svg>
                </button>
            </span>
        </div>

        {/* ------------Folder-List------------ */}

        <div className="grid gap-5 mt-10">
            {userFolders.map((folder, index) => (
                <Folder text={folder.folder_name} key={index} userFolders={userFolders} setUserFolders={setUserFolders}></Folder>
            ))}
        </div>
    </section>
}
export default EditFolders