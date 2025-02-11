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

const artists = [
  { name: "Kendrick Lamar", img: kendrick},
  { name: "Bruno Mars", img: bruno },
  { name: "Arthur Nery", img: arthur },
  { name: "Lady Gaga", img: lady },
  { name: "Taylor Swift", img: taylor }
];

const albums = [
  { title: "SOS Deluxe: LANA", artist: "SZA", img: sza},
  { title: "GNX", artist: "Kendrick Lamar", img: gnx},
  { title: "Short n' Sweet", artist: "Sabrina Carpenter", img: sweet },
  { title: "Reputation", artist: "Taylor Swift", img: reputation },
  { title: "Freudian", artist: "Daniel Caesar", img: freudian }
];

const MainContent = () => {
    return (
      <main className="main-content">
        <div className="section-wrapper">
         <div className="section-content">
          <h2>Popular Artists</h2>
          <div className="artists">
            {artists.map((artist) => (
              <div className="artist-card" key={artist.name}>
                <img src={artist.img} alt={artist.name} />
                <p>{artist.name}</p>
              </div>
            ))}
          </div>
          <h2>Popular Albums</h2>
          <div className="albums">
            {albums.map((album) => (
              <div className="album-card" key={album.title}>
                <img src={album.img} alt={album.title} />
                <p>{album.title}</p>
                <small>{album.artist}</small>
              </div>
            ))}
            </div>
          </div>
          </div>
      </main>
    );
  };  


export default MainContent;
