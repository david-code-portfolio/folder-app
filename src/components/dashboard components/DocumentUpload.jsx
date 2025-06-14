import { useState, useEffect } from "react"

function DocumentUpload({action}){
    const location = () => {
        action('dashboard')
    }
    const [uploadedDoc, setUploadedDoc] = useState('CHOOSE DOCUMENT')

    const handleFileChange = (e) => {
        if(e.target.files.length > 0){
            setUploadedDoc(e.target.files[0].name)
        }
        else{
            setUploadedDoc('CHOOSE DOCUMENT')
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

        <form className="grid mt-20 grid-cols-[max-content]">
            <label htmlFor="uploadDocument" className="uploadDocLabel">uploaded Document</label>
            <label className="uploadDocInput">
                {uploadedDoc}
                <input type="file" onChange={handleFileChange} name="uploadDocument" className="hidden"/>
            </label>

            <label htmlFor="doctName" className="uploadDocLabel">name</label>
            <input type="text" name="documentName" placeholder="new document" maxLength="16" className="uploadDocInput uppercase"/>

            <label htmlFor="docTag" className="uploadDocLabel">Tag</label>
            <input type="text" name="docTag" placeholder="-" maxLength="16" className="uploadDocInput uppercase"/>

            <label htmlFor="docFolder" className="uploadDocLabel">Folder</label>
            <input type="text" name="docFolder" placeholder="-" maxLength="16" className="uploadDocInput uppercase"/>
        </form>
    </section>
}
export default DocumentUpload