function Document({name, key}){
    return <div className="folder md:text-[1.5rem]/[1.5rem] text-[1.25rem]/[1.25rem] relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
        <button className="inline-flex justify-between w-full cursor-pointer uppercase">
            {name}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49333 16L0 14.5067L12.3733 2.13333H5.33333V0H16V10.6667H13.8667V3.62667L1.49333 16Z" fill="currentColor"/>
            </svg>
        </button>
    </div>
}
export default Document