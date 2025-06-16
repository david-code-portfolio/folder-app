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
                    loggedUser: localStorage.getItem('user')
                })
            })
            const userData = await res.json();
            localStorage.setItem('userFolders', JSON.stringify(userData[0]))
            localStorage.setItem('userDocs', JSON.stringify(userData[1]))
            console.log(JSON.parse(localStorage.getItem('userDocs')))
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])
        

    return localStorage.getItem('user') ? localStorage.getItem('userFolders') ? <DashBoard></DashBoard> : fetchUserData() : <PageNotFound></PageNotFound>
}
export default Auth