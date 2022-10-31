const rooms = require("./rooms");

exports.setup = (app) => {
  app.get("/get_all_rooms", async(req, res) => {
    const all_rooms = await rooms.get_all_rooms()
    res.status(200).send(JSON.stringify(all_rooms));
  });

  app.get("/get_a_room", async(req, res) => {
  const room_no = req.query.room
  const room_details = await rooms.get_a_room(room_no)
  res.status(200).send(JSON.stringify(room_details));
  });

  app.get("/get_furniture_room", async(req, res) => {
  const room_no = req.query.room
  const furniture_details = await rooms.get_furniture_details(room_no)
  res.status(200).send(JSON.stringify(furniture_details));
  });

  app.get("/healthz", (req, res) => {
    res.status(200).send("OK");
  });
};
