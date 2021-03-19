<template>
  <div>
    CompB
    <CompC></CompC>
  </div>
</template>

<script>
import CompC from "./CompC";
import { EventBus } from "../eventBus";
export default {
  components: {
    CompC,
  },
  mounted() {
    // 侦听
    EventBus.$on("child", (msg) => {
      console.log("B——",msg);
    });
  },
};
</script>

<style scoped></style>
