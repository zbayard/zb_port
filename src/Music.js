import './App.css';
import {Spotify} from "react-spotify-embed";
import ReactPlayer from 'react-player'





const Music = ()=> {
    return (
      <div className="comp music">
        <div className="music-row-box">
            <ReactPlayer url='https://youtu.be/luPmHAoAoy0?si=pK7AZwnHOXo2AV1C' width='30%' controls='true'/>
            <Spotify link="https://open.spotify.com/album/4U0pHPVVIUi2HeapNFvFGJ?si=KhpDFVH4TsaJLSpw9QypFQ" />
            <ReactPlayer url='https://www.youtube.com/watch?v=aluexDz3V4k&t' width='30%' controls='true'/>
        </div>
        <div className="socials">

        </div>
        
      </div>
    );
  }
  
  export default Music;