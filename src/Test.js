import {useEffect, useRef, useState} from "react";
import {textIntro} from "./Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Test.css';
function Test() {
    // let intro = useRef(null);
    const [music, setMusic] = useState([]);
    useEffect(() => {
        // textIntro(intro);
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
    tl.from('.intro', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        scale: -1,
        ease: "back",
      });




    tl.from('.m_Artist', {
        // tl2.from(sect3, {
        // duration: 1,
        autoAlpha: 0,
        //x: 100,
        stagger: 0.2,
        ease: "linear",
        scrollTrigger: {
            trigger: '.m_Artist',
            // markers: true,
            markers: {
                startColor: "purple",
                endColor: "fuchsia",
                fontSize: "1em",
                indent: 100,
            },
            //start: "top bottom",//first value is start, second value is scroller-start, same for end
            //  start: "top 60%",
             start: "top top",
            // end: "bottom 90%",
            // end: () => `+=${document.querySelector('.sect3').offsetHeight}`,
            // end: "top 40%",
            end: "+=100%    ",
            //  pin: true,
            toggleActions: "play none reverse reset",
            scrub: true,
        }
    })
          
    tl.from('.artists', {
        // yPosition: -50,
        y: -50,
        opacity: 0, 
        stagger:0.5, 
        duration: 15,
        // repeat: -1,
        ease: "back"
    });

    
};

// textIntro(intro);
}, []);


    return (
        <div id="test">
            {/* <h1 className ="intro" ref={(el) => (intro = el)}>My Awesome Music App!</h1> */}
            <h1 className ="intro">My Awesome Music App!</h1>
           {music.map((m) => (
               <div key={m.id} className="m_Artist">
               <h2 className="artists">Artist: {m.artistname}</h2>
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
