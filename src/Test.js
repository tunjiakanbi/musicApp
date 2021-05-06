import {useEffect, useRef, useState} from "react";
// import {textIntro} from "./Intro";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Test.css';
function Test() {
let testDiv = useRef(null);
let testE = useRef();
// let testH = useRef(null);
    const [music, setMusic] = useState([]);
    useEffect(() => {
    const getData = async () => {
        fetch("data.json", {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
        })
        .then((response) => response.json())
        .then((data) => setMusic(data));
        // setTimeout(() => {
        //     animateD();
        // }, 1000); 
        
    };
  
getData();

    // useEffect(() => {

//gsap.registerPlugin(ScrollTrigger);
function animateD(){
const tl= new gsap.timeline();

tl.to(testDiv, 4, {opacity: 1});
tl.from(testE.current, {
    x: -200,
    opacity: 0,
    // stagger: 0.3,
    duration: 2,
    ease: "back"
});
console.log(testDiv);
console.log(testE);
}
// if(window.loaded === true){
// if(getData === true){
animateD();
//}

}, []);
// animateD()
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
