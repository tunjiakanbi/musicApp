import {useEffect, useRef, useState} from "react";
import {textIntro} from "./Intro";
import gsap from "gsap";
function Test() {
    let intro = useRef(null);
    const [music, setMusic] = useState([]);
    useEffect(() => {
        textIntro(intro);
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
    animate()
}, 1000);

function animate() {
    
    const tl = new gsap.timeline();
    tl.from('.intro', {
        xPercent: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        scale: -1,
        ease: "back",
      });
    tl.from('.artists', {
        yPosition: -50,
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
        <div>
            <h1 className ="intro" ref={(el) => (intro = el)}>My Awesome Music App!</h1>
            {/* <h1 className ="intro">My Awesome Music App!</h1> */}
           {music.map((m) => (
               <div key={m.id}>
               <h2 className="artists">Artist: {m.artistname}</h2>
               <h2 className="artists">Album: {m.album}</h2>
               <h2 className="artists">Record Label: {m.label}</h2>
               <h2 className="artists">Release Year: {m.year}</h2>
               <img className="artists" src={m.albumImg} alt={m.artistname}/>
               <h4 className="artists">Artist Bio:</h4>
                <p className="artists">{m.bio}</p>
               </div>
           ))} 
        </div>
    )
}

export default Test
