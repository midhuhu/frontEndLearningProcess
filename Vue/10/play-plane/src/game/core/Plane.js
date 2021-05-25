import { reactive } from "vue";
export function usePlane(attack) {
  // 先创建一个飞机数据
  const planeInfo = reactive({
    x: 100,
    y: 350,
    // width: 258,
    // height: 364,
  });

  const speed = 10;
  // 飞机移动
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        console.log("up");
        planeInfo.y -= speed;
        break;
      case "ArrowDown":
        planeInfo.y += speed;
        break;
      case "ArrowLeft":
        planeInfo.x -= speed;
        break;
      case "ArrowRight":
        planeInfo.x += speed;
        break;
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      console.log("spqce");
      attack && attack({ x: planeInfo.x + 100, y: planeInfo.y + 100 });
    }
  });

  return {
    planeInfo,
  };
}
