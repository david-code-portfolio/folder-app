import SimplyfiedBtn from '../components/button components/SimplyfiedBtn'

function WelcomePage(){
    return <>
        <h5 className='uppercase font-bold text-base tracking-[0.25em] sm:ml-[80px] ml-[5.35vw] md:mt-[80px] sm:mt-[200px] mt-[240px] select-none lg:text-[1rem] text-[0.75rem] max-lg:w-[275px]'>CREATED BY dávid kšendzuľák | 2025</h5>
        <h1 className="2xl:text-[18.75rem]/[18.75rem] lg:text-[12rem]/[12rem] sm:text-[8rem]/[8rem] text-[4.5rem]/[4.5rem] font-medium xl:mt-[80px] mt-[20px] lg:ml-[70px] sm:ml-[70px] ml-[4.75vw] cursor-default select-none w-fit">FOLDER.</h1>
        <div className='absolute w-full overflow-hidden h-fit md:top-[95px] top-[220px] -z-10'>
            <h1 className='lg:text-[600px]/[600px] text-[300px]/[300px] background_text select-none sm:translate-x-[0] translate-x-[-300px]'>FOLDER</h1>
        </div>

        {/* ------------Bottom-Part-Screen------------ */}

        <section className='lg:flex justify-between sm:mx-[80px] mx-[5.35vw] lg:align-bottom md:mt-[14.5vh] mt-[200px] mb-[80px] gap-[50px]'>

            {/* ------------Button-section------------ */}

            <div className='flex-col flex lg:gap-[10px] justify-end gap-[5px] items-start lg:mb-0 md:mb-[14.5vh] mb-[200px]'>
                <SimplyfiedBtn button_text={"get started"} page_location={"register"}></SimplyfiedBtn>
                <SimplyfiedBtn button_text={"log in"} page_location={"login"}></SimplyfiedBtn>
            </div>

            {/* ------------About-section------------ */}

            <div className=''>
                <h2 className='uppercase md:text-[4rem] text-[2rem] faded_text mb-[16px]'>about</h2>
                <p className='italic faded_text text-[16px]/[32px] xl:w-[480px] lg-[25vw] w-full text-justify'>Welcome in FOLDER, a platform where you can upload, 
                    keep and manage documents you don’t want to lose. 
                    FOLDER was created by 19y.o. web developer from Slovakia. 
                    Project priority is to keep less important elements simple and 
                    highlight what matters the most.</p>
            </div>
        </section>
    </>
}
export default WelcomePage