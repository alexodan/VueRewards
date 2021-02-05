<template>
  <div>
    <h2>Monster Health</h2>
    <div :style="healthBarStyles" class="monster-health">
      <span>{{ monsterHealth }}</span>
    </div>
  </div>
  <div>
    <h2>Player Health</h2>
    <div :style="healthBarStyles" class="player-health">
      <span>{{ playerHealth }}</span>
    </div>
  </div>
  <button @click="attack">Attack</button>
  <button @click="specialAttack">Special Attack</button>
  <button @click="heal">Heal</button>
  <h1 v-if="gameOver">You {{ gameOver }}!</h1>
</template>

<script>
// What I like:
// ✅ Having a built-in and scalable way to pass variables to use in the styles is great.
// ✅ Having methods, computed properties, watchers is a super clear api and so far easy to use.
// ✅ Animations, animations, animations.

// What I don't like
// ❌ Having template, logic and styles in the same file (maybe need to look into Vue with JSX).
// ❌ The dependencies for the computed properties and watchers can be hard to track.

export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attack() {
      this.monsterHealth -= Math.floor(Math.random() * 15) + 1;
      this.playerHealth -= Math.floor(Math.random() * 20) + 1;
    },
    specialAttack() {
      this.monsterHealth -= Math.floor(Math.random() * 30) + 1;
      this.playerHealth -= Math.floor(Math.random() * 20) + 1;
    },
    heal() {
      // if > etc
      this.playerHealth += Math.floor(Math.random() * 20) + 1;
    },
  },
  computed: {
    healthBarStyles() {
      return {
        "--player-health": `${this.playerHealth}%`,
        "--monster-health": `${this.monsterHealth}%`,
      };
    },
  },
  watch: {
    playerHealth() {
      if (this.playerHealth <= 0) {
        this.gameOver = "loose";
      }
    },
    monsterHealth() {
      if (this.monsterHealth <= 0) {
        this.gameOver = "win";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.monster-health,
.player-health {
  border: 1px solid black;
  width: 100px;
  position: relative;
  &::before {
    height: 100%;
    content: "";
    background-color: lightgreen;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.monster-health {
  &::before {
    width: var(--monster-health);
  }
}
.player-health {
  &::before {
    width: var(--player-health);
  }
}
</style>
