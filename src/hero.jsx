import React from "react";

function Hero(props) {
    return (
          <div className="card-body">
                <h4 className="hero-name">{props.name}</h4>
                <img src={props.url} alt={props.title}/>
                <p className="hero-occupation">{props.occupation}</p>
                <p className="hero-superpowers">{props.superpowers}</p>
                <p className="hero-info">{props.info}</p>
            </div>  
    );
  }

  export default Hero

  // export default function Hero({name, url, occupation, superpowers, info}) {
    //     return (
    //         <div>
    //           <div className="hero">
    //                 <h2 className="hero-name">{name}</h2>
    //                 {/* <img alt="hero" src={url}/> */}
    //                 <p className="hero-occupation">{occupation}</p>
    //                 <p className="hero-superpowers">{superpowers}</p>
    //                 <p className="hero-info">{info}</p>
    //             </div>  
    //         </div>
    //     );
    //   }