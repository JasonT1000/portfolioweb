import Youtube, { YouTubeProps } from 'react-youtube'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ImageModal from './ImageModal';
import ContentSection from './ContentSection';
import { SkillsType } from '../_types/types';
import SkillList from './SkillList';

const Personal = () => {
    // Image Paths
    const blenderImages: string[] = ['/portfolioweb/Anvil1_a.png', '/portfolioweb/Axe_1.png', '/portfolioweb/AnvilAxe_1.png', '/portfolioweb/AnvilAxe_4.png']

    return (
        <div className="overflow-y-auto calculated-height lg:w-[900px] slide-in from-left place-content-center space-y-10 px-5 pb-6 lg:pb-3 lg:pr-5 scrollbar">

            <ContentSection
                sectionTitle='Blender'
                sectionDescription='I started by watching the now world renowned &apos;Donut&apos; tutorial. After completing that challenge I tried the Anvil then picked my own object to model which was an axe I had in the tool shed. Going through the whole design process from taking reference photos to modelling and rendering was a lot of fun.'
                skills={[SkillsType.BLENDER, SkillsType.GIMPTWO]}
                youtubeIds={['lev39HNa8nU']}
                imagePaths={blenderImages}
            />

            <ContentSection
                sectionTitle='Unreal Engine'
                sectionDescription='Learning Unreal Engine specifically for Virtual Reality has kept me pretty busy. An ongoing project has been recreating places from childhood in combination with movies/games that I grew up with. These are the first projects I made with no prior knowledge of Unreal Engine or Virtual reality or modelling. I had no experience with Blender and created some pretty bad models. I will be continuing on with this project shortly and hopefully can use my new skills and create some good stuff.'
                skills={[SkillsType.UNREALFIVE, SkillsType.UNREALBLUEPRINTS, SkillsType.BLENDER, SkillsType.GIMPTWO]}
                youtubeIds={['KwcxnjQw59g', '--J70RSk5uI', 'D3BaPQ1JKSI']}
            />

            <ContentSection
                sectionTitle='PERN stack'
                sectionDescription='I started a project for an early childcare centre as the software solutions they had tried did not do the things that they required. So just to see if i can do it I started with an interview with the manager of a local early child care centre. Then went about doing research on what was needed ie integration with government systems, database creation, backend routes. I then did some short online tutorials as I hadn&apos;t done relational databases since university. I designed the UI using AI tools which was a useful learning experience and very helpful. This is still very much a work in progress and after starting with the database and backend routes I have only just started the front end development. The frontend has been done using Reactjs with Typescript. The database is postgreSQL with nodejs express server as the backend.'
                skills={[SkillsType.REACTJS, SkillsType.TYPESCRIPT, SkillsType.HTML, SkillsType.CSS, SkillsType.NODE, SkillsType.EXPRESS, SkillsType.POSTGRESQL, SkillsType.REST]}
                youtubeIds={['BTARnn9_brI']}
            />

            <ContentSection
                sectionTitle='Animations'
                sectionDescription='Currently only have 1 animation which I submitted to an online render challenge. The theme was &apos;boss fight&apos; where a basic camera animation and point of interest was given and you had to make the rest up. I chose a boss fight where the hero and boss were intangled in a dance fight to the death.'
                skills={[SkillsType.BLENDER, SkillsType.EMBERGEN, SkillsType.GIMPTWO]}
                youtubeIds={['cRcMj7uK9Js']}
            />

            <div className="grid text-center gap-x-5 lg:text-left">
                <div>
                    <h2 className='mb-3 text-2xl text-center font-semibold'>
                        This website
                    </h2>
                    <SkillList skills={[SkillsType.NEXTJS, SkillsType.TYPESCRIPT, SkillsType.TAILWIND, SkillsType.HTML, SkillsType.CSS]} />
                    <p className="content-section-p">
                        I created this website using react.js, next.js, typescript and tailwindcss. I had played around with react.js a while ago when playing with some gesture recognition scripts, but nothing like this. Basically I didn&apos;t have a lot of experience in these frameworks and just wanted to have a play and see what they were like.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Personal;