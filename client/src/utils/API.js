import axios from "axios";

export default {

    //get events from the seedDB file
    getEvents: () => {axios.get("/api/events");}
};