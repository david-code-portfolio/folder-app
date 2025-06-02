import './index.scss'
import './components/MainBtn'
import MainBtn from './components/MainBtn'
import SecondaryBtn from './components/SecondaryBtn'

function App(){
  return <>
    <h5 className='uppercase font-bold text-base tracking-[0.25em] absolute left-[80px] top-[80px] select-none'>CREATED BY dávid kšendzuľák | 2025</h5>
    <h1 className="text-[18.75rem]/[18.75rem] font-medium mt-[180px] ml-[60px] cursor-default select-none">FOLDER.</h1>
    <h1 className='absolute text-[15.625vw]/[15.625vw] top-[95px] left-0 background_text select-none'>FOLDER</h1>
    
    {/* ------------Button-section------------ */}
    
    <section className='absolute left-[80px] bottom-[80px] flex gap-[20px]'>
      <MainBtn></MainBtn>
      <SecondaryBtn></SecondaryBtn>
    </section>
    
    {/* ------------About-section------------ */}
    
    <section className='absolute right-20 bottom-20'>
      <h2 className='uppercase text-5xl faded_text mb-[16px]'>about</h2>
      <p className='italic faded_text text-[16px]/[32px] w-[480px]'>Welcome in FOLDER, a platform where you can upload, 
        keep and manage documents you don’t want to lose. 
        FOLDER was created by 19y.o. web developer from Slovakia. 
        Project priority is to keep less important elements simple and 
        highlight what matters the most.</p>
    </section>
  </>
}
export default App