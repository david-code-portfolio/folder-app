import { Link } from "react-router"
function SimplyfiedBtn ({button_text, page_location}){
    return <Link to={`/${page_location}`}>
        <button className="uppercase simplyfied_btn cursor-pointer lg:text-[2rem] text-[1.5rem]">
            {button_text}
        </button>
    </Link>
    
}
export default SimplyfiedBtn