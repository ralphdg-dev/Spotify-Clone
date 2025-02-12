import { artists } from "./Artist.js"
import { albums } from "./Artist.js"

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
