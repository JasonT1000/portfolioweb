import { SkillsType } from "../_types/types";

interface Props {
    skills: SkillsType[]
}

const SkillList = (props: Props) => {

    return (
        <div className='flex flex-row flex-wrap gap-2 justify-center'>
            {
                props.skills?.map((skill, index) => (
                    <span key={index} className='flex-none px-2 rounded-full bg-slate-700 text-center'>{skill}</span>
                ))
            }
        </div>
     );
}
 
export default SkillList;