import {useEffect, useRef, useState} from "react";
// import {textIntro} from "./Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Test.css';
function Test() {
let testDiv = useRef(null);
let testE = useRef(null);
let testH = useRef(null);
    const [music, setMusic] = useState([]);
    useEffect(() => {
        //console.log(testE);
        const getData = async () => {
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
//gsap.registerPlugin(ScrollTrigger);
const tl= new gsap.timeline();
// const t2= new gsap.timeline();
// tl.fromTo(testE.current,{ xPercent: -20,
// opacity: 0,
// duration: 0.3}, {xPercent: 0,opacity:1});
tl.to(testDiv, 4, {opacity: 1});
tl.from(testE.current, {
    x: -200,
    opacity: 0,
    stagger: 0.3,
    duration: 2,
    ease: "back"
});
console.log(testDiv);
console.log(testE);
//}


// setTimeout(()=>  {
//     animate();
// }, 1000);

// function animate() {
//     gsap.registerPlugin(ScrollTrigger);
//     const tl = new gsap.timeline();
//     tl.from('#test', {autoAlpha: 0})
//     .from('.intro', {
//         xPercent: -20,
//         opacity: 0,
//         stagger: 0.2,
//         duration: 2,
//         scale: -1,
//         ease: "back",
//       })

//     .from('.m_Artist', {
//         autoAlpha: 0,
//         //x: 100,
//         stagger: 0.2,
//         ease: "linear",
//         scrollTrigger: {
//             trigger: '.m_Artist',
//             markers: {
//                 startColor: "purple",
//                 endColor: "fuchsia",
//                 fontSize: "1em",
//                 indent: 100,
//             },
//              start: "top top",
//             end: "+=100%",
//              pin: true,
//             // toggleActions: "play none reverse reset",
//             toggleActions: "play complete reverse reset",
//             scrub: true,
//         }
//     })
          
//     tl.from('.artists', {
//         y: -50,
//         opacity: 0, 
//         stagger:0.5, 
//         duration: 15,
//         ease: "back"
//     });

    
// };

}, []);

// useEffect(()=>{
//     gsap.registerPlugin(ScrollTrigger);
// const tl= new gsap.timeline();
// tl.fromTo(testE.current,{ xPercent: -20,
// opacity: 0,
// duration: 0.3}, {opacity:1})
// },[]);

    return (
        <div id="test" ref={el => {testDiv = el}}>
            {/* <h1 className ="intro" ref={(el) => (intro = el)}>My Awesome Music App!</h1> */}
            <h1 className ="intro">My Awesome Music App!</h1>
           {music.map((m) => (
            //    <div key={m.id} className="m_Artist" ref={ref}>
               <div key={m.id} className="m_Artist">
               <h2 ref={el => {testE = el}} className="artists">Artist: {m.artistname}</h2>
               <h2 ref={el => {testE = el}} className="artists">Album: {m.album}</h2>
               <h2 ref={el => {testE = el}} className="artists">Record Label: {m.label}</h2>
               <h2 ref={el => {testE = el}} className="artists">Release Year: {m.year}</h2>
               <img ref={el => {testE = el}} className="artists" src={m.albumImg} alt={m.artistname}/>
               <h4 ref={el => {testE = el}} className="artists">Artist Bio:</h4>
                {/* <p className="artists">{m.bio}</p> */}
               </div>
           ))} 
        </div>
    )
}

export default Test
