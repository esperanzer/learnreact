

import './App.css';
const head = "welcome to las esperanza blog";
const title = "la esperanza palour";
const likes = "100";
const link ="http://espe.co.com";

function App() {
  return (

    <div className="App">
      <div className="content">
      <h2>{head}</h2>
      <p>{title}</p>
      <p>{likes}</p>
      <p>{[1,3,5,9,8]}</p>
      <p>{Math.random() *10}</p>
      <p> pleased to announce the opening of the new cosmetic in town.</p>
      <a href={link}> Google</a>

      </div>
    </div>

  );
}

export default App;
