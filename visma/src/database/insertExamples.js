import {
    addEvent,
    uploadImage,
    removeEvent,
    getEventsByTag,
    getAllEvents,
    getMostRecentEvent
} from "src/database/databaseHandler.js";

addEvent("Hackathon","challenge", new Date("24.4.2022"));
addEvent("Oprava Bojlera", "sport", new Date("12.4.2022"));

console.log("Eventy s tagom challenge: " + getEventsByTag("challenge"));

console.log("Vsetky eventy: " + getAllEvents());

console.log("Posledny event ktory bol: "+ getMostRecentEvent());





