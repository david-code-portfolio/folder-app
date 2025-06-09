import { useNavigate } from "react-router"

function DashBoard(){
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate('/register')
    }

    return <>
        <h1>Welcome in your Dashboard!</h1>
        <button onClick={handleLogout}>LOGOUT</button>
    </>
}
export default DashBoard