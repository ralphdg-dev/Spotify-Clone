import "./MainContent.css";
import bruno from "../assets/bruno.jpg";
import arthur from "../assets/arthur.jpg";
import lady from "../assets/lady.jpg";
import taylor from "../assets/taylor.jpg";
import sza from "../assets/sza.jpg";
import gnx from "../assets/gnx.jpeg";
import freudian from "../assets/freudian.jpg";
import reputation from "../assets/reputation.jpg";
import sweet from "../assets/sweet.jpeg";
import kendrick from "../assets/kendrick.jpg"
import luther from "../assets/luther.mp3"; 
import smile from "../assets/brunoSong.mp3"


export const artists = [
  { name: "Kendrick Lamar", img: kendrick, isFeatured: true, Audio: luther },
  { name: "Bruno Mars", img: bruno, isFeatured: true, Audio: smile },
  { name: "Arthur Nery", img: arthur, isFeatured: false },
  { name: "Lady Gaga", img: lady, isFeatured: false },
  { name: "Taylor Swift", img: taylor, isFeatured: false }
];


export const albums = [
  { title: "SOS Deluxe: LANA", artist: "SZA", img: sza},
  { title: "GNX", artist: "Kendrick Lamar", img: gnx},
  { title: "Short n' Sweet", artist: "Sabrina Carpenter", img: sweet },
  { title: "Reputation", artist: "Taylor Swift", img: reputation },
  { title: "Freudian", artist: "Daniel Caesar", img: freudian }
];


