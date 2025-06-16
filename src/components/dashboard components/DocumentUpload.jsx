import { useState, useEffect } from "react"

function DocumentUpload({action}){
    const location = () => {
        action('dashboard')
    }

    /* ------------Get-New-Doc-Data------------ */

    const [docData, setDocData] = useState({
        file: "CHOOSE DOCUMENT",
        name: "new document",
        tag: "-",
        folder: "-"
    })
    const handleChange = (e) => {
        const {name, value, type, files} = e.target

        if(type === 'file'){
            if(files.length > 0){
                setDocData(prev => ({
                    ...prev,
                    [name]: files[0].name,
                    [fileRaw]: files[0]
                }))
            }
            else{
                setDocData(prev => ({
                    ...prev,
                    [name]: 'CHOOSE DOCUMENT',
                    [fileRaw]: null
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
        formData.append("tag", docData.tag)
        formData.append("file", docData.fileRaw)
        try{
            const res = await fetch('http://localhost/portfolio/folder-app/backend/userData.php', {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    }

    return <section>

        {/* ------------Cancel-Btn------------ */}

        <div className="folder relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
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
                <input required type="file" onChange={handleChange} name="file" className="hidden"/>
            </label>

            <label htmlFor="doctName" className="uploadDocLabel">name</label>
            <input onChange={handleChange} type="text" name="name" placeholder="new document" maxLength="16" className="uploadDocInput uppercase"/>

            <label htmlFor="docTag" className="uploadDocLabel">Tag</label>
            <input onChange={handleChange} type="text" name="tag" placeholder="-" maxLength="16" className="uploadDocInput uppercase"/>

            <label htmlFor="docFolder" className="uploadDocLabel">Folder</label>
            <input onChange={handleChange} type="text" name="folder" placeholder="-" maxLength="16" className="uploadDocInput uppercase"/>

            <button name="submit" className="smaller_simple_btn mt-10">
                save new document
            </button>
        </form>
    </section>
}
export default DocumentUpload