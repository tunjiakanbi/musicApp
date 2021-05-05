import {useEffect, useRef, useState} from "react";
// import {textIntro} from "./Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Test.css';
function Test() {
let testE = useRef(null)
    const [music, setMusic] = useState([]);
    useEffect(() => {
        console.log(testE);
        const getData = () => {
            fetch("data.json", {
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json"
                    }
            })
            .then((response) => response.json())
            .then((data) => setMusic(data));
        };
      
getData();

setTimeout(()=>  {
    animate();
}, 1000);

function animate() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = new gsap.timeline();
    tl.from('#test', {autoAlpha: 0})
    .from('.intro', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        scale: -1,
        ease: "back",
      })

    .from('.m_Artist', {
        autoAlpha: 0,
        //x: 100,
        stagger: 0.2,
        ease: "linear",
        scrollTrigger: {
            trigger: '.m_Artist',
            markers: {
                startColor: "purple",
                endColor: "fuchsia",
                fontSize: "1em",
                indent: 100,
            },
             start: "top top",
            end: "+=100%",
             pin: true,
            // toggleActions: "play none reverse reset",
            toggleActions: "play complete reverse reset",
            scrub: true,
        }
    })
          
    tl.from('.artists', {
        y: -50,
        opacity: 0, 
        stagger:0.5, 
        duration: 15,
        ease: "back"
    });

    
};

}, []);

    return (
        <div id="test">
            {/* <h1 className ="intro" ref={(el) => (intro = el)}>My Awesome Music App!</h1> */}
            <h1 className ="intro">My Awesome Music App!</h1>
           {music.map((m) => (
            //    <div key={m.id} className="m_Artist" ref={ref}>
               <div key={m.id} className="m_Artist">
               <h2 ref={el => {testE = el}} className="artists">Artist: {m.artistname}</h2>
               <h2 className="artists">Album: {m.album}</h2>
               <h2 className="artists">Record Label: {m.label}</h2>
               <h2 className="artists">Release Year: {m.year}</h2>
               <img className="artists" src={m.albumImg} alt={m.artistname}/>
               <h4 className="artists">Artist Bio:</h4>
                {/* <p className="artists">{m.bio}</p> */}
               </div>
           ))} 
        </div>
    )
}

export default Test
