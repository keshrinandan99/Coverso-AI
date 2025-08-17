import Image from "next/image";
import Link from "next/link";
interface ComapanionCardTypes{
    id:string;
    name:string;
    topic:string
    subject:string;
    duration:number;
    color:string
}
function CompanionCard({id,name,topic,subject,duration,color}:ComapanionCardTypes) {
  return (
    <article className='companion-card' style={{backgroundColor:color}}>
        <div className="flex justify-between items-center">
        <div className="subject-badge ">{subject}</div>
        <button className="companion-bookmark">
            <Image src="/icons/bookmark.svg" alt="bookmark" width={12} height={15}/>
        </button>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>Topic: {topic}</p>

        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="clock" width={13.5} height={13.5}/>
            <p className="text-sm">{duration} minutes</p>
        </div>
        <Link href={`/companion/${id}`} className="w-full">
        <button className="btn-primary justify-center w-full">
            Launch Lesson
        </button>
        </Link>
        
       
  



    </article>
  )
}

export default CompanionCard