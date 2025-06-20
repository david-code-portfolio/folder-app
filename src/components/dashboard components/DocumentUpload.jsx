import { useState, useEffect } from "react"

function DocumentUpload({action, refresh}){
    const location = () => {
        action('dashboard')
    }

    const folderList = JSON.parse(localStorage.getItem('userFolders'))

    /* ------------Get-New-Doc-Data------------ */

    const [docData, setDocData] = useState({
        file: "CHOOSE DOCUMENT",
        name: "new document",
        folder: "-"
    })
    const handleChange = (e) => {
        const {name, value, type, files} = e.target

        if(type === 'file'){
            if(files.length > 0){
                setDocData(prev => ({
                    ...prev,
                    file: files[0].name,
                    fileRaw: files[0]
                }))
            }
            else{
                setDocData(prev => ({
                    ...prev,
                    file: 'CHOOSE DOCUMENT',
                    fileRaw: null
                }))
            }
        }
        else{
            setDocData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("action", "insert document")
        formData.append("loggedUser", localStorage.getItem('user'))
        formData.append("folder", docData.folder)
        formData.append("name", docData.name)
        formData.append("file", docData.fileRaw)
        if(docData.name === 'new document' || docData.file === 'CHOOSE DOCUMENT'){
            window.alert('Name or file missing')
        }
        else{
            try{
                const res = await fetch('http://localhost/portfolio/folder-app/backend/uploadDoc.php', {
                    method: "POST",
                    body: formData
                })
                const data = await res.json()

                e.target.reset()
                setDocData({
                    file: "CHOOSE DOCUMENT",
                    name: "new document",
                    folder: "-"
                })

                location()

                const refetchData = await fetch('http://localhost/portfolio/folder-app/backend/userData.php', {
                    method: "POST",
                    body: JSON.stringify({
                        action: 'fetch',
                        loggedUser: localStorage.getItem('user')
                    })
                })
                const userData = await refetchData.json()
                localStorage.setItem('userFolders', JSON.stringify(userData[0]))
                localStorage.setItem('userDocs', JSON.stringify(userData[1]))
                refresh(JSON.parse(localStorage.getItem('userFolders')))
            }
            catch(err){
                console.log(err)
            }
        }
    }

    /* ------------DropDown-Function------------ */

    const [dropdownToggle, setDropdownToggle] = useState(false)

    const chooseFolder = (chosed) => {
        console.log(chosed)
        setDocData(prev => ({
            ...prev,
            folder: chosed
        }))
        setDropdownToggle(false)
    }

    return <section>

        {/* ------------Cancel-Btn------------ */}

        <div className="folder opacity-50 relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
            <span className="inline-flex justify-between w-full">
                <button onClick={location} className="inline-flex justify-between w-full cursor-pointer uppercase">
                    cancel
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="currentColor"/>
                    </svg>
                </button>
            </span>
        </div>

        {/* ------------New-Doc-Details------------ */}

        <form onSubmit={handleSubmit} className="grid mt-20 grid-cols-[max-content]">
            <label htmlFor="uploadDocument" className="uploadDocLabel">uploaded Document</label>
            <label className="uploadDocInput">
                {docData.file}
                <input type="file" onChange={handleChange} name="file" className="hidden"/>
            </label>

            <label htmlFor="docName" className="uploadDocLabel">name</label>
            <input onChange={handleChange} autoComplete="off" type="text" name="name" placeholder={docData.name} maxLength="16" className="uploadDocInput uppercase"/>

            <span className="grid relative container z-[9999]">
                <label htmlFor="docFolder" className="uploadDocLabel">Folder</label>
                <input onClick={() => setDropdownToggle(true)} onChange={handleChange} autoComplete="off" type="text" name="folder" placeholder='-' value={docData.folder === '-' ? '' : docData.folder} maxLength="16" className="uploadDocInput uppercase"/>
                {/* ------------DropDown-Menu------------ */}
                <div className={`absolute top-[90%] z-[999] dropDown`}>
                    {folderList.map((folder, key) => (
                        <button type="button" onClick={() => chooseFolder(folder)} key={key} className="uppercase cursor-pointer w-fit">{folder}</button>
                    ))}
                </div>
            </span>
            

            <button name="submit" className="smaller_simple_btn mt-10">
                save new document
            </button>
        </form>
    </section>
}
export default DocumentUpload