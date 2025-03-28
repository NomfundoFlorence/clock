import "./App.css";

function App() {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;

  const clock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <main>
      <button className="clock">Clock</button>
      <button className="timer">Timer</button>
      <button className="stopwatch">Stopwatch</button>

      <h1>
        {`0${minutes}`}:{`0${seconds}`}:{`0${milliseconds}`}
      </h1>
    </main>
  );
}

export default App;
