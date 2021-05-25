<template>
  <container>
    <circle :x="x"></circle>
  </container>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "../game";
export default {
  setup() {
    const x = ref(0);
    x.value = 100;

    const speed = 5;
    let dir = 1;
    const handleTicker = () => {
      x.value += speed * dir;

      // 和地图一样
      if (x.value >= 750 - 50) {
        dir = -1;
      } else if (x.value <= 0 + 50) {
        dir = 1;
      }
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });

    return {
      x,
    };
  },
};
</script>

<style scoped></style>
