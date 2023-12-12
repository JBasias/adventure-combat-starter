class Character {

  constructor(name, description, currentRoom) {

    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    // Fill this in

  }

  applyDamage(amount) {
    // Fill this in
  }

  die() {
    // Fill this in

    console.log("You are dead!");
    process.exit();

  }

}

module.exports = {
  Character,
};
