import { reactive } from "vue";

export function useBullet() {
  const bullets = reactive([]);
  const addBullet = (info) => {
    bullets.push(info);
  };
  return {
    addBullet,
    bullets,
  };
}
