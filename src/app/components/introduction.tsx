const Introduction = () => {
    return ( 
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-right place-content-center space-y-10 px-5 lg:pr-5 scrollbar">
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                About This website{' '}
            </h2>
            <div className={'space-y-2'}>
                <h3 className={`m-0 max-w-full text-md opacity-95`}>Coder</h3>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    Hi my name is Jason and this is my portfolio website. A collection of projects I have been apart of for work and some personal projects I have embarked on in my spare time.
                </p>
            </div>
            <div className={'space-y-2'}>
                <h3 className={`m-0 max-w-full text-md opacity-95`}>Coding</h3>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    This website was coded using React.js/Next.js, TailwindCSS and Typescript. I hadn't even heard of Tailwind before starting this site and I only had limited experience with the others so this was a great opportunity to learn something new.
                </p>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    My contact details can be found using the navigation buttons below if you would like to get in touch.
                </p>
            </div>
        </div>
     );
}
 
export default Introduction;