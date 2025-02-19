import { useRef } from "react";
import { artists, albums } from "./Artist.js";

const MainContent = () => {
  const audioRef = useRef(new Audio());

  return (
    <main className="main-content">
      <div className="section-wrapper">
        <div className="section-content">
          <h2>Popular Artists</h2>
          <div className="artists">
            {artists.map((artist) => {
              const isFeatured = artist.isFeatured;

              return (
                <div
                  className={`artist-card ${isFeatured ? "featured" : ""}`}
                  key={artist.name}
                  onMouseEnter={() => {
                    if (isFeatured && artist.Audio) {
                      audioRef.current.src = artist.Audio;
                      audioRef.current.currentTime = 0;
                      audioRef.current.play();
                    }
                  }}
                  onMouseLeave={() => {
                    if (isFeatured && artist.Audio) {
                      audioRef.current.pause();
                      audioRef.current.currentTime = 0;
                    }
                  }}
                >
                  <img src={artist.img} alt={artist.name} />
                  <p>{artist.name}</p>
                </div>
              );
            })}
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
