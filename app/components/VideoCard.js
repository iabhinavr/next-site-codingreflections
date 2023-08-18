import Image from "next/image";

export default function VideoCard(props) {
    return (
        <a target="_blank" rel="noreferrer" className="yt-video block relative" href={props.href}>
            <Image className="rounded-t-xl w-full h-full object-contain" width="360" height="240" src={props.src} alt={props.title} />
            <div className="absolute inset-0 bg-slate-900 opacity-25"></div>
            <h3 className="px-2 py-3 absolute bottom-0 bg-gradient-to-t from-brand-dark text-brand-light font-bold text-xl z-20">{props.title}</h3>
            <div className="absolute inset-0 w-full h-full flex justify-center items-center">
                <div className="vid-play-btn z-20 absolute"></div>
            </div>
        </a>
    );
}