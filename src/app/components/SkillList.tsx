import { SkillsType } from "../_types/types";

interface Props {
    skills: SkillsType[]
}

const SkillList = (props: Props) => {
    const getRandomTextColorClass = () => {
        const colorList = ['text-rose-400', 'text-fuchsia-400', 'text-sky-400', 'text-teal-400', 'text-lime-400']
        const randIndex = Math.floor(Math.random() * colorList.length)
        const classNameList = 'flex-none px-2 rounded-full bg-slate-700 text-center'
        return classNameList + ' ' + colorList[randIndex]
    }

    return (
        <div className='flex flex-row flex-wrap gap-2 justify-center pb-2'>
            {
                props.skills?.map((skill, index) => (
                    <span key={index} className={getRandomTextColorClass()}>{skill}</span>
                ))
            }
        </div>
    );
}

export default SkillList;