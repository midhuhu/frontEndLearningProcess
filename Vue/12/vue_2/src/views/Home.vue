<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Using mustaches{{ rawHtml }}</p>
    <p>Using v-html directive:<span v-html="rawHtml"></span></p>
    <p>{{ log }}</p>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <!-- 事件处理方法 -->
    <button v-on:click.once="minus">减</button> |
    <!-- 监听事件 -->
    <button v-on:click="couter += 1">加</button> |
    <!-- 内联处理器中的方法 -->
    <button v-on:dblclick="tip(couter)">显示</button>
    <p>{{ couter }}</p>
    <br />
    <br />
    <label>按键修饰符:</label>
    <input v-on:keyup.enter="tip(message)" v-model="message" />
    <br />
    <br />
    <label>按键码:</label>
    <input v-on:keyup.1="tip(message2)" v-model="message2" />
    <br />
    <br />
    <label>系统修饰键:</label>
    <input v-on:keyup.alt="tip(message3)" v-model="message3" />
    <br />
    <br />
    <br />
    <label>多行文本:</label>
    <textarea v-model="message4"></textarea>
    <p>{{ message4 }}</p>
    <br />
    <br />
    <br />
    <!-- 复选框 -->
    <input type="checkbox" id="jack" value="jack" v-model="checkedNum" />
    <label for="jack">jack</label>

    <input type="checkbox" id="rose" value="rose" v-model="checkedNum" />
    <label for="rose">rose</label>

    <input type="checkbox" id="bnana" value="bnana" v-model="checkedNum" />
    <label for="bnana">bnana</label>
    <br />
    <span>Checked:{{ checkedNum }}</span>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      rawHtml: '<span style="color:red">This should be red.</span>',
      log: 1,
      awesome: true,
      couter: 1,
      message: "",
      message2: "",
      message3: "",
      message4: "",
      checkedNum: [],
    };
  },
  methods: {
    minus() {
      this.couter -= 1;
    },
    tip(res) {
      alert(res);
    },
  },
};
</script>
