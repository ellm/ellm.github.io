import React, { useEffect } from 'react';
import './App.css';
import WebFont from 'webfontloader';

const App = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['PT Sans']
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="AppHeader" role="banner">
        <h1>A Virtual Model of Matthew Ell</h1>
        <figure className="Headshot">
          <img
            src="http://www.gravatar.com/avatar/149e1efe4ff927426b6b9b8e27d2a0ad.png"
            alt="Matthew Ell Headshot"
          />
        </figure>
      </header>
      <section class="Networks">
        <h2>Networks</h2>
        <ul>
          <li><a href="http://www.github.com/ellm">Github</a></li>
          <li><a href="http://www.twitter.com/matthewell">Twitter</a></li>
          <li><a href="http://codepen.io/ellm/">CodePen</a></li>
          <li><a href="http://www.linkedin.com/in/mattell">LinkedIn</a></li>
          <li><a href="https://play.spotify.com/user/matthewell">Spotify</a></li>
          <li><a href="https://www.youtube.com/user/ieatflamingos">YouTube</a></li>
          <li><a href="https://profiles.wordpress.org/wp-architect">WordPress</a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
