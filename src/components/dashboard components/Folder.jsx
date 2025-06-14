

function Folder({text, userFolders, setUserFolders}){
    const handleRemove = async () => {
        try{
            const res = await fetch('http://localhost/portfolio/folder-app/backend/userData.php', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "delete",
                    loggedUser: localStorage.getItem('user'),
                    folderName: text
                })
            })

            const updatedFolders = await res.json()
            setUserFolders(updatedFolders)
            sessionStorage.setItem("userData", JSON.stringify(updatedFolders));
        }
        catch{

        }
    }

    return <div className="folder md:text-[1.5rem]/[1.5rem] text-[1.25rem]/[1.25rem] relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
        <span className="inline-flex justify-between w-full">
            {text}
            <button onClick={handleRemove} className="cursor-pointer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="currentColor"/>
                </svg>
            </button>
        </span>
    </div>
}
export default Folder