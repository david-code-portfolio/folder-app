import { Link } from "react-router"

function SimplyfiedBtn ({button_text, page_location}){
    const formType = () => {
        button_text == 'get started' ? localStorage.setItem('register', true) : localStorage.setItem('register', false)
    }

    return <Link to={`/${page_location}`}>
        <button onClick={formType} className="simple_btn">
            {button_text}
        </button>
    </Link>
    
}
export default SimplyfiedBtn