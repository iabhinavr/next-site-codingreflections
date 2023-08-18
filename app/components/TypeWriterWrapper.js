"use client";
import Typewriter from "typewriter-effect";

export default function TypeWriterWrapper() {
    return (
        <div className="text-2xl md:text-5xl font-bold z-20 pb-6">
            <Typewriter onInit={(typewriter) => {
                typewriter
                    .typeString("I'm Abhinav")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('let\'s <span class="text-brand-violet">learn coding,</span>')
                    .pauseFor(1000)
                    .deleteChars(13)
                    .typeString('<span class="text-brand-yellow">build the web together.</span>')
                    .pauseFor(2000)
                    .start();
            }} options={{
                loop: true,
                autoStart: true
            }} />
        </div>
    )

}