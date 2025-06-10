import { Link } from "react-router"
import { useEffect, useState } from "react"

function SimplyfiedBtn ({button_text, page_location}){
    const formType = () => {
        button_text == 'get started' ? localStorage.setItem('register', true) : localStorage.setItem('register', false)
    }

    return <Link to={`/${page_location}`}>
        <button onClick={formType} className="uppercase simplyfied_btn cursor-pointer lg:text-[2rem] text-[1.5rem]">
            {button_text}
        </button>
    </Link>
    
}
export default SimplyfiedBtn