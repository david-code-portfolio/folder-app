import ItemTypeButton from "../button components/ItemTypeButton"
import { useState, useEffect } from "react"
import Item from "./Item"

function EditFolders(){

    const [userFolders, setUserFolders] = useState([])

    useEffect(() => {
        setUserFolders(JSON.parse(sessionStorage.getItem('userData')))
    }, [])

    return <section className="">
        <ItemTypeButton></ItemTypeButton>
        <div className="grid gap-5 mt-10">
            {userFolders.map((folder, index) => (
                <Item text={folder.folder_name} key={index}></Item>
            ))}
        </div>
    </section>
}
export default EditFolders