import { useState } from "react";
import { Input } from "../input/Input";

export const CreateEvent = ({ onAddEvent }) => {
  const [event, setEvent] = useState({
    title: '',
    location: '',
    activityType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddEvent(event);  // Llamar a la función onAddEvent que viene de App.js
    setEvent({
      title: '',
      location: '',
      activityType: '',
    });  // Reseteamos el formulario
  };

  return (
    <>
      <Input 
        name="title" 
        placeholder="Enter event title" 
        label="Title" 
        value={event.title}
        onChange={handleChange} 
      />
      <Input 
        name="location" 
        placeholder="Enter event location" 
        label="Location" 
        value={event.location}
        onChange={handleChange} 
      />
      <Input 
        name="activityType" 
        placeholder="Enter event activity type" 
        label="Activity Type" 
        value={event.activityType}
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Add event</button>  {/* Botón para agregar evento */}
    </>
  );
};
