new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster for ${damage}`,
      });
      this.monsterAttack();
      this.checkIfWin();
    },
    specialAttack: function() {
      let damage = this.calculateDamage(5, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: `Player hits Monster hard for ${damage}`,
      });
      this.monsterAttack();
      this.checkIfWin();
    },
    heal: function() {
      this.monsterAttack();
      this.turns.unshift({
        isPlayer: true,
        text: `Player heal for ${7}`,
      });
      this.playerHealth = (this.playerHealth >= 93) ? 100 : this.playerHealth + 7;
    },
    giveUp: function() {
      this.startGame();
    },
    checkIfWin: function() {
      if(this.playerHealth > 0 && this.monsterHealth > 0) {
        return;
      }
      else if(this.monsterHealth <= 0) {
        alert('You won!');
      }
      else if(this.playerHealth <= 0){
        alert('You lost!');
      }
      else {
        alert('Tie!');
      }
      this.startGame();
    },
    calculateDamage: function(min, max) {
        return Math.max(min,Math.floor(Math.random() * max) + 1);
    },
    monsterAttack: function() {
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: `Monster hits Player for ${damage}`,
      });
    },
  }
});
