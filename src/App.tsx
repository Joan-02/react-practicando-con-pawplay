// import { useState } from 'react';
import "./App.css";
import { Dogcard } from "./dog-card/Dogcard";
// import { CreateEvent } from './create-event/CreateEvent';
import { Input } from "./input/Input";

function App() {
  // const [events, setEvents] = useState([]);

  // const handleEvent = (event) => {
  //   setEvents((prevEvents) => [...prevEvents, event]);  // Usar el estado actualizado
  // };

  return (
    // <div>
    //   <CreateEvent onAddEvent={handleEvent} />  {/* Pasa handleEvent como prop */}
    //   <h2>Events List:</h2>
    //   <ul>
    //     {events.map((event, index) => (
    //       <li key={index}>{event.title}</li>  {/* Mostrar el título del evento */}
    //     ))}
    //   </ul>
    // </div>
    <>
      <Dogcard name="Rainboooooooooooooooow" rating={7} events={4} />
      <Dogcard name="Rainboow" rating={7} events={4} />
      <Dogcard name="Rainbow" rating={7} events={4} />

      {/* <Input
        name="title"
        label="Title"
        placeholder="Enter event title"
        className="input"
      />
      <Input
        name="title"
        label="Title"
        placeholder="Enter event title"
        className="input input--focus"
      />
      <Input
        name="title"
        label="Title"
        placeholder="Enter event title"
        className="input input--error"
      /> */}
    </>
  );
}

export default App;
