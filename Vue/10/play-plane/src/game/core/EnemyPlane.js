/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { reactive, onMounted, onUnmounted } from "vue";
import { game } from "../../game";
export function useEnemyPlane() {
  // 敌军逻辑
  const enemyPlane = reactive({
    x: 0,
    y: 0,
    width: 308,
    height: 207,
  });

  const enemyPlanes = reactive([
    {
      x: 0,
      y: 0,
      width: 308,
      height: 207,
    },
  ]);

  // 移动
  const move = () => {
    const speed = 2;
    const handleTicker = () => {
      // 向下
      // enemyPlanes.forEach((enemy) => {
      // console.log(enemy);
      // enemy.y++;
      // enemy.y += speed;
      // enemy.y += speed;
      // });
      enemyPlane.y += speed;
    };
    // game.ticker.add(handleTicker);

    onMounted(() => {
      game.ticker.add(handleTicker);
    });

    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };

  move();

  return {
    enemyPlanes,
    enemyPlane,
  };
}
