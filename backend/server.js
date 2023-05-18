const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

const rooms = [];

function generateRoomId(){
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let roomId = '';
  for (let i = 0; i < 6; i++) {
    roomId += characters.charAt(Math.floor(Math.random()*characters.length));
    
  }
  return roomId;
}

app.listen(PORT, () => {
  const roomId = generateRoomId();

  const NewRoom = {
    id : roomId,

  };

  rooms.push(NewRoom);

  res.json({ roomId });
});
