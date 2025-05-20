import './index.scss'
import './components/MainBtn'
import MainBtn from './components/MainBtn'

function App(){
  return <>
    <h5 className='uppercase font-bold text-[16px] tracking-[0.25em] absolute left-[80px] top-[80px] select-none'>CREATED BY dávid kšendzuľák | 2025</h5>
    <h1 className="text-[300px]/[300px] font-medium mt-[180px] ml-[60px] cursor-default select-none">FOLDER.</h1>
    <h1 className='absolute text-[600px]/[600px] top-[95px] left-0 background_text select-none'>FOLDER</h1>
    <MainBtn></MainBtn>
  </>
}
export default App