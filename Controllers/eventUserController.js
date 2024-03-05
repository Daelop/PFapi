const Models = require("../Models");

const createEventUser = async (req, res) => {
  try {
    const EventUser = await Models.eventUser.create(req.body);

    res.status(200).json(EventUser);
  } catch (error) {
    console.log("error.message");
    res.status(500).json({ message: "error" });
  }
}

const getEventUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await Models.eventUser.findById(id);
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}
const getEventUsersByEventId = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await Models.eventUser.find({eventId: id});
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}
const getEventUsersByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const eventUserInfo = await Models.eventUser.find({userId: id});
    res.status(200).json(eventUserInfo);
    console.log(eventUserInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}  

const deleteEventUser = async (req, res) => {
    try {
        const { id } = req.params;
        const eventUserInfo = await Models.eventUser.findByIdAndDelete(id);
        res.status(200).json(eventUserInfo);
        console.log(eventUserInfo);
    } catch {
        res.status(500).json({ message: "error.message" });
    }
    }
const updateEventUser = async (req, res) => { 
    try {
        const { id } = req.params;
        const updatedEventUser = await Models.eventUser.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedEventUser);
    } catch (error) {
        console.log("error.message");
        res.status(500).json({ message: "error.message" });
    }};
module.exports = {createEventUser, getEventUserById, getEventUsersByEventId, getEventUsersByUserId, deleteEventUser, updateEventUser};