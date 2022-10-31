/**
 * @api {get} /get_all_rooms List all rooms
 * @apiGroup Rooms
 * @apiSuccess {Object[]} rooms Rooms's list
 * @apiSuccess {json} rooms.Furniture Room Furniture
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "Room_number": 1,
 *      "Furniture": {"Table":1,"Cupboard":2,"Sofa":1}
 *    },
 *    {
 *      "Room_number": 2,
 *      "Furniture": {"Table":1,"Cupboard":2,"Sofa":1}
 *    },
 * ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.get_all_rooms = async() => {
  let rooms = [{"Room_number":"1",Furniture:{"Table":1,"Cupboard":2,"Sofa":1}},
  {"Room_number":"2",Furniture:{"Table":2,"Cupboard":1,"Sofa":1}},
  {"Room_number":"3",Furniture:{"Table":5,"Cupboard":2,"Sofa":2}},
  {"Room_number":"4",Furniture:{"Table":6,"Cupboard":1,"Sofa":5}},
  {"Room_number":"5",Furniture:{"Table":4,"Cupboard":3,"Sofa":1}},
  {"Room_number":"6",Furniture:{"Table":2,"Cupboard":2,"Sofa":2}},
  {"Room_number":"7",Furniture:{"Table":5,"Cupboard":7,"Sofa":3}},
  {"Room_number":"8",Furniture:{"Table":3,"Cupboard":8,"Sofa":7}},
  {"Room_number":"9",Furniture:{"Table":9,"Cupboard":4,"Sofa":5}},
  {"Room_number":"10",Furniture:{"Table":6,"Cupboard":3,"Sofa":4}}
]
  return rooms
}
/**
 * @api {get} /get_a_room/:room Get a room details with room number
 * @apiGroup Rooms
 * @apiParam {room} room Room number
 * @apiSuccess {Object[]} rooms Rooms's list
 * @apiSuccess {json} rooms.Furniture Room Furniture
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "Room_number": 1,
 *      "Furniture": {"Table":1,"Cupboard":2,"Sofa":1}
 *    }
 * ]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

exports.get_a_room = async(room_no) => {
  let rooms = await exports.get_all_rooms() 
  const room_details = rooms.filter(room => room.Room_number === room_no)

  if(room_details.length===0){
    return {"Error":"Invalid room number"}
  }

  return room_details
}
/**
 * @api {get} /get_furniture_details/:room Get furniture in the room
 * @apiGroup Rooms
 * @apiParam {room} room Room number
 * @apiSuccess {json} rooms.Furniture Room Furniture
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "Furniture": {"Table":1,"Cupboard":2,"Sofa":1}
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
exports.get_furniture_details = async(room_no) => {
  let rooms = await exports.get_all_rooms() 
  const room_details = rooms.filter(room => room.Room_number === room_no)

  if(room_details.length===0){
    return {"Error":"Invalid room number"}
  }

  return room_details[0]["Furniture"]
}
