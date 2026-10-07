 export default function App() {

  function handleClick (){
    console.log("Ich wurde geklickt")
  }

  return (
    <div className="App">
      <button id="meinButton" onClick={handleClick}>klick mich</button>
      <button id="meinButton2" onClick={() => (handleClick)}>klick mich auch</button>
      <input onChange={(e) => {console.log(e.target.value);}}type="text"></input>
    </div>
  );
}
