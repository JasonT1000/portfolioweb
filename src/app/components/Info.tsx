const Info = () => {
    return ( 
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-right place-content-center space-y-10 px-5 lg:pr-5 scrollbar">
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
                A little about my job experience{' '}
            </h2>
            <div className={'space-y-2'}>
                <h3 className={`m-0 max-w-full text-md opacity-95`}>Early Days 2020</h3>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    Shortly after completing my Bachelors of Science majoring in Computer Science at Waikato University I started contract work for the <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://www.jeanswainsonfoundation.com" target='_blank'>Jean Swainson Foundation</a>. The first big project I worked on was updating a virtual marae experience using an online game engine Playcanvas. The programming language is javascript. I was tasked with creating an ingame kiosk which pops up when you stand and look at one of the many carvings within the marae. The kiosk shows information about the carving like the story behind the carving etc. The game was also linked to an online learning platform where you complete quests/lessons as you learn the Tereo maori language and unlock points. The score for each quest/lesson was linked to a carving the in the virtual experience so depending on how well you did you carving would change color and look slightly different.
                </p>
            </div>

            <div className={'space-y-2'}>
                <h3 className={`m-0 max-w-full text-md opacity-95`}>Middle of the pack 2021-2022</h3>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    In this time we completed projects for multiple marae around the country ranging in work from Wix websites and Wordpress websites to virtual experiences in Playcanvas. We also did work on the GLIMS platform overhauling the system from javascript over to vue2.js as well as trialing different interactive experiences ranging from Playcanvas to CoreGames to Unreal Engine.
                </p>
            </div>

            <div className={'space-y-2'}>
                <h3 className={`m-0 max-w-full text-md opacity-95`}>The tail end 2023</h3>
                <p className={`m-0 max-w-full text-md opacity-70`}>
                    Throughout the year predominantly doing work in Blender to create a virtual experience for a company that builds prefab steel construction buildings for fire safety teams mainly in the United States. Also continuing to develop the GLIMS platform by working with the lead programmer and performing minor changes when needed.
                </p>
            </div>
        </div> 
     );
}
 
export default Info;