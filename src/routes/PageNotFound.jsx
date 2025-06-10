function PageNotFound(){
    return <>
        <div className='absolute w-full overflow-hidden h-full -z-10'>
            <h1 className='text-[40vw]/[40vw] background_text select-none grid place-items-center h-full'>404</h1>
        </div>
        <h1 className="lg:text-[4rem] md:text-[2.5rem] text-[1.5rem] text-center h-[100vh] grid place-items-center select-none">Page Not Found :(</h1>
    </>
}
export default PageNotFound