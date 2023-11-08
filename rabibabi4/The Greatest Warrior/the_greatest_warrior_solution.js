// Create a Warrior class
// It must support level, rank, experience, achievements, training(event), and battle(enemy_level) methods
const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

class Warrior {
  constructor() {
    this.__level = 1;
    this.__rank = "Pushover";
    this.__experience = 100;
    this.__achievements = [];
  }

  level = () => {
    this.__level = Math.floor(this.experience() / 100);
    if (this.__level > 100) this.__level = 100;
    return this.__level;
  };
  rank = () => {
    let points = Math.floor(this.experience() / 1000);
    if (points > 10) points = 10; 
    this.__rank = ranks[points];
    return this.__rank;
  };
  experience = () => {
    if (this.__experience > 10000) this.__experience = 10000;
    return this.__experience;
  };
  achievements = () => this.__achievements;
  
  training = (event) => {
    const [desc, points, minLvl] = event;
    if (this.level() < minLvl) return "Not strong enough";
    
    this.__experience += points;
    
    this.__achievements.push(desc);
    return desc;
  }
  
  battle = (enemy_level) => {
    if (enemy_level > 100 || enemy_level < 1) return "Invalid level";
    
    if (enemy_level === this.level()) {
      this.__experience += 10;
      return "A good fight";
    } else if (enemy_level + 1 === this.level()) {
      this.__experience += 5;
      return "A good fight";
    } else if (enemy_level < this.level()) {
      return "Easy fight";
    } else if (
      enemy_level - 5 >= this.level() &&
      Math.floor(enemy_level / 10) > ranks.indexOf(this.rank())
    ) {
      return "You've been defeated";
    } else {
      const diff = enemy_level - this.level();
      this.__experience += 20 * diff * diff;
      return "An intense fight";
    }
  }
}