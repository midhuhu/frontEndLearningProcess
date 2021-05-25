<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <EnemyPlane :x="enemyPlane.x" :y="enemyPlane.y"></EnemyPlane>
    <!-- <EnemyPlane
      v-for="(enemy, index) in enemyPlanes"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></EnemyPlane> -->
    <Bullet
     v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
  </container>
</template>

<script setup="props,{emit}">
/* eslint-disable no-unused-vars */
// import { reactive } from "vue";
import Map from "../components/Map";
import Plane from "../components/Plane";
import EnemyPlane from "../components/EnemyPlane";
import Bullet from '../components/Bullet'

import { useBullet } from '../game/core/Bullet'
import { usePlane } from "../game/core/Plane";
import { useEnemyPlane } from "../game/core/EnemyPlane";
import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../game";
import { hitTestObject } from "../utils";

import { useFighting } from "../game/core/Fighting";

export default {
  components: {
    Bullet,
    Map,
    Plane,
    EnemyPlane,
  },
};

const { bullets,addBullet } = useBullet();
const { planeInfo } = usePlane({
  attack(info){
    addBullet(info);
  }
});
const { enemyPlane, enemyPlanes } = useEnemyPlane();
 
const gameOver = () => {
  emit("change-view", "EndView");
};

useFighting({
  planeInfo,
  enemyPlane,
  gameOver,
});

export { planeInfo, enemyPlane, enemyPlanes ,bullets};
</script>

<style scoped></style>
 