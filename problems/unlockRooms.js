function unlockRooms(rooms) {
  const unlockedRooms = new Set([0]); // Add room 0 to the list
  let roomsToVisit = []; // JS Array might have O(1) unshift
  let currentRoom;

  roomsToVisit = roomsToVisit.concat(rooms[0]);

  while (roomsToVisit.length !== 0) {
    currentRoom = roomsToVisit.shift();
    if (!unlockedRooms.has(currentRoom)) {
      unlockedRooms.add(currentRoom);
      roomsToVisit = roomsToVisit.concat(rooms[currentRoom]);
    }
  }

  return unlockedRooms.size === rooms.length;
}

const houseA = [[]];
const houseB = [[1],[2],[]];
const houseC = [[1,2],[2],[]];
const houseD = [[2],[2],[]];

console.log(unlockRooms(houseA));
console.log(unlockRooms(houseB));
console.log(unlockRooms(houseC));
console.log(unlockRooms(houseD));
