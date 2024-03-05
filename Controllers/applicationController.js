const Models = require("../Models");

const createApplication = async (req, res) => {
  try {
    const Application = await Models.application.create(req.body);

    res.status(200).json(Application);
  } catch (error) {
    console.log("error.message");
    res.status(500).json({ message: "error" });
  }
}
const getApplicationsByEventId = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Models.application.find({eventId: id});
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
}

const getApplicationsByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Models.application.find({userId: id});
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const applicationInfo = await Models.application.findByIdAndDelete(id);
    res.status(200).json(applicationInfo);
    console.log(applicationInfo);
  } catch {
    res.status(500).json({ message: "error.message" });
  }
};

module.exports = {createApplication, getApplicationsByEventId, getApplicationsByUserId, deleteApplication};