import PageNotFound from './routes/PageNotFound'
import DashBoard from './routes/DashBoard'

function Auth(){

        const fetchUserData = async () => {
            if(localStorage.getItem('user')){
                const res = await fetch("http://localhost/portfolio/folder-app/backend/userData.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        loggedUser: localStorage.getItem('user')
                    })
                })
                const userData = await res.json();
                console.log(JSON.stringify(userData))
                sessionStorage.setItem('userData', JSON.stringify(userData))
            }
        }

    return localStorage.getItem('user') ? sessionStorage.getItem('userData') ? <DashBoard></DashBoard> : fetchUserData() : <PageNotFound></PageNotFound>
}
export default Auth