function ItemTypeButton(){
    return <button className="smaller_simple_btn relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
        <span className="inline-flex justify-between w-full">
            new folder
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z" fill="currentColor"/>
            </svg>
        </span>
    </button>
}
export default ItemTypeButton