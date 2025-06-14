import PageNotFound from './routes/PageNotFound'
import DashBoard from './routes/DashBoard'
import { useEffect } from 'react'

function Auth(){
    const fetchUserData = async () => {
        if(localStorage.getItem('user')){
            const res = await fetch("http://localhost/portfolio/folder-app/backend/userData.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    action: 'fetch',
                    loggedUser: localStorage.getItem('user'),
                    folderName: ''
                })
            })
            const userData = await res.json();
            localStorage.setItem('userData', JSON.stringify(userData))
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [localStorage.getItem('userData')])
        

    return localStorage.getItem('user') ? localStorage.getItem('userData') ? <DashBoard></DashBoard> : fetchUserData() : <PageNotFound></PageNotFound>
}
export default Auth