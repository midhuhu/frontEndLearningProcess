<template>
  <container>
    <sprite :texture="endPageImg"> </sprite>
    <sprite
      :texture="restartBtnImg"
      x="255"
      y="550"
      :interactive="true"
      @click="handleClick"
    >
    </sprite>
  </container>
</template>

<script>
import endPageImg from "../assets/end_page.jpg";
import restartBtnImg from "../assets/restartBtn.png";

export default {
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    function handleClick() {
      console.log("click");
      emit("change-view", "GameView");
    }

    return {
      handleClick,
      endPageImg,
      restartBtnImg,
    };
  },
};
</script>

<style scoped></style>
