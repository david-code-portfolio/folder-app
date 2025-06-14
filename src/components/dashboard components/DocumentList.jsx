import Document from "./Document"

function DocumentList({action}){

    const location = () => {
        action('upload document')
    }

    return <section>
        <div className="folder relative after:content-[''] after:block after:h-[2px] after:bg-[var(--dark_color)] after:w-full after:mt-1 w-full">
            <span className="inline-flex justify-between w-full">
                <button onClick={location} className="inline-flex justify-between w-full cursor-pointer uppercase">
                    upload document
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z" fill="currentColor"/>
                    </svg>
                </button>
            </span>
        </div>
        <div className="mt-10 grid gap-5">
            <Document></Document>
            <Document></Document>
        </div>
    </section>
}
export default DocumentList