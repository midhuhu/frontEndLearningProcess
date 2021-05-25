import { onMounted, onUnmounted } from "vue";
import { game } from "../../game";
import { hitTestObject } from "../../utils";
export function useFighting({ planeInfo, enemyPlane, gameOver }) {
  // 战斗逻辑
  const handleTicker = () => {
    // 碰撞检测
    if (hitTestObject(planeInfo, enemyPlane)) {
      // hit
      //   console.log("hit");
      //   emit("change-view", "EndView");
      gameOver && gameOver();
      // game over
    }
  };

  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}
