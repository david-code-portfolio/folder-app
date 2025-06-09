import PageNotFound from './routes/PageNotFound'
import DashBoard from './routes/DashBoard'

function Auth(){
    let loggedIn = localStorage.getItem('user') ? <DashBoard></DashBoard> : <PageNotFound></PageNotFound>

    return loggedIn
}
export default Auth