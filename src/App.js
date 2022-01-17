import './App.css';
import AddAlbum from './components/AddAlbum';
import Album from './components/Album';
import alubms from './components/albums';


function App() {
  return (
    <div className="App">

      {alubms.map(album => (
        <Album

          // key={album.album_cover}
          album_cover={album.album_cover}

          // key={album.album_title}
          album_title={album.album_title}

          // key={album.artist}
          artist={album.artist}

        />
      ))}
      <div>
        <AddAlbum />
      </div>
    </div>
  );
}

export default App;
