import { useState, useEffect } from "react"

function DashboardNavigationBtn({text, active}){

    return <button onClick={() => sessionStorage.setItem('location', text)} className={`smaller_simple_btn w-fit ${active === text ? 'active_btn_state' : ''}`}>
        {text}
    </button>
}
export default DashboardNavigationBtn