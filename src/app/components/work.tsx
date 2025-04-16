import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import { SkillsType } from '../_types/types';
import ContentSection from './ContentSection';

const Work = () => {
    // Image Paths
    const glimsImages: string[] = ['/portfolioweb/GLIMS_web_1.jpg', '/portfolioweb/GLIMS_web_2.jpg', '/portfolioweb/GLIMS_web_3.jpg']

    return (
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-right place-content-center space-y-20 px-5 pb-6 lg:pb-3 lg:pr-5 scrollbar">

            <h1 className={`text-3xl text-center font-semibold mb-8`}>
                Wairoa Appliance Centre{' '}
            </h1>

            <ContentSection
                sectionTitle='EXO POS report converter'
                sectionDescription='For a small retail appliance shop in Wairoa called Wairoa Appliance Centre I was responsible for identifying a solution to access customer invoice data from the previous point of sale system, MYOB EXO, after the web portal was deactivated. I created a custom report to export customer warranty data, then created a NextJS webapp that could convert the .csv file into a local database. This allowed the business to view customer invoice data offline and on a local computer. I added functionality to search for specific invoices and view the data in a table format. Users can also print specific invoices if needed. I then recreated the webapp in Windows Forms using C# to allow businesses to use the application if they have older systems or dont want to install the aditional dependencies for the webapp'
                skills={[SkillsType.NEXTJS, SkillsType.TYPESCRIPT, SkillsType.TAILWIND, SkillsType.REST, SkillsType.JSON, SkillsType.CSHARP]}
                youtubeIds={['8WeSTRnORcY', 'LXO6ifQ4leA']}
            />

            <ContentSection
                sectionTitle='Web & Android App'
                sectionDescription='For the same retail appliance shop I created a stock taking web application previously written with HTML, javascript and CSS. I rewrote it in React with Typescript and created a Nodejs server which runs along side it. I also created an accompanying Android application coded with ReactNative which lets employees use their phones as scanners to upload stock counts to the main pc app. I also setup and maintained their Wordpress website.'
                skills={[SkillsType.REACTJS, SkillsType.REACTNATIVE, SkillsType.TYPESCRIPT, SkillsType.CSS, SkillsType.REST, SkillsType.NODE, SkillsType.JSON]}
                youtubeIds={['x6I5056uxFo', 'xjbrUTmjmmo']}
            />

            <h2 className={`mb-3 text-3xl text-center font-semibold`}>
                Jean Swainson Foundation{' '}
            </h2>

            <ContentSection
                sectionTitle='Blender'
                sectionDescription='Apart from some minor 3d asset creation I was tasked with using Blender to create from real life building schematics a prefabricated building used for fire/police safety training. I recreated everything from the concrete foundation, studs/joists, stairs, walls and even an example wall which had their patented fire insulation which allows these buildings to be continuously lit on fire and put out by training fire fighters.'
                skills={[SkillsType.BLENDER, SkillsType.GIMPTWO]}
                youtubeIds={['sibpJ7O4gBo']}
            />

            <ContentSection
                sectionTitle='Playcanvas'
                sectionDescriptionHTML={<p className="content-section-p">
                    Using the online 3d engine Playcanvas. I created multiple projects. I worked on the coding which was done primarily in javascript with some HTML and CSS when UI was involved. For one project I was tasked with creating an interactive marae experience where as players completed lessons/quests on the GLIMS platform different parts of a marae were unlocked. You can also see information about specific carvings/buildings which is displayed on an in game kiosk. For another project I recreated an Unreal Engine avatar system in Playcanvas where you can buy and sell gear and view your avatar which was linked up to the online learning platform GLIMS. The latest project I did for <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://playcanv.as/p/G8x53x9D/" target='_blank'>FireFacilities</a> recreated a fire safety building where players are able to walk throughout the building to get a better idea of the layout and size.
                </p>}
                skills={[SkillsType.PLAYCANVAS, SkillsType.BLENDER, SkillsType.HTML, SkillsType.CSS, SkillsType.JAVASCRIPT]}
                youtubeIds={['f5VyI8u00W0', 'n1HBvVlhOEo', 'G_yu7YLvEew', 'xD3Lu968Q0o']}
            />

            <ContentSection
                sectionTitle='Unreal Engine'
                sectionDescription='I designed an Unreal Engine level for a project that tied together with a players progress from the online learning platform GLIMS. You could either progress through lessons/quests through the web application or complete quests through the Unreal game. I created 1 of about 3 levels which is shown in the videos. This was my first time creating something like this which I really enjoyed. I also got to do some blueprint programming to add things like different sounds playing as the player moved over different terrain and getting different fire particles to play during different times of the day/night cycle.'
                skills={[SkillsType.UNREALFOUR, SkillsType.UNREALBLUEPRINTS]}
                youtubeIds={['amMytHUVcNw', '0aPOS-wi1ns']}
            />

            <ContentSection
                sectionTitle='GLIMS'
                sectionDescription=''
                sectionDescriptionHTML={
                    <p className="content-section-p">
                        I was involved in multiple projects over the last 3 years I contracted for the Jean Swainson Foundation. My work ranged from javascript programming in Playcanvas to Blueprint programming in Unreal Engine to 3D model creation using Blender. I Managed development of their online learning platform <a className="underline font-semibold text-blue-600 bg-gray-100 hover:text-black hover:bg-white rounded px-1" href="https://afedsquad.co.nz/glims" target='_blank'>GLIMS</a> working closely with the lead programmer. I also got to a point where I could make small fixes and additions to the platform which uses Vue2.js.
                    </p>
                }
                skills={[SkillsType.HTML, SkillsType.CSS, SkillsType.JAVASCRIPT, SkillsType.PLAYCANVAS, SkillsType.VUE2JS]}
                imagePaths={glimsImages}
            />
        </div>
    );
}

export default Work;