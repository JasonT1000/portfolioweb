import { useEffect, useState } from "react";

interface Props{
    title: string,
    description: string,
    updateActivePageSection: any,
    activePageSection: string,
}

const ButtonMain = ({title, description, updateActivePageSection, activePageSection}:Props) => {
    const activeButtonClass:string = " text-black flex flex-col dark:text-white border-white bg-gray-200 dark:border-white dark:lg:border-neutral-700 dark:bg-neutral-800/30 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";
    const inactiveButtonClass:string = "group/navButton flex flex-col text-black dark:text-white rounded-lg border border-stone-600 md:border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30";
    const [currentButtonClass, setCurrentButtonClass] = useState(inactiveButtonClass)
    
    const handleClick = () =>{
        updateActivePageSection(title.toUpperCase().replace(/\s/g, ''))
    }

    useEffect(() => {
        if(title.toUpperCase().replace(/\s/g, '') === activePageSection){
            setCurrentButtonClass(activeButtonClass)
        }
        else{
            setCurrentButtonClass(inactiveButtonClass)
        }
    }, [activePageSection, title])

    return ( 
        <button
            className={currentButtonClass}
            onClick={ handleClick }
        >
            <h2 className={`lg:mb-3 text-lg 2xl:text-2xl font-semibold`}>
                {title}{' '}
                <span className="inline-block transition-transform group-hover/navButton:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 hidden short:hidden 2xl:block`}>
                {description}
            </p>
        </button>
     );
}
 
export default ButtonMain;