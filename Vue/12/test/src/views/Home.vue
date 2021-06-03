<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <br /><br />
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>
    <br />
    <br />
    <input type="checkbox" v-model="toggle" />
    <br />
    <br />
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
    <br /><br /><br />
    <select v-model="selected">
      <option disabled value="">请选择一个</option>
      <option>111</option>
      <option>222</option>
      <option>333</option>
    </select>
    <br />
    <span>selected: {{ selected }}</span>
    <br /><br /><br />
    <select v-model="selected2" multiple>
      <option>111</option>
      <option>222</option>
      <option>333</option>
    </select>
    <br />
    <span>selected: {{ selected2 }}</span>
    <br /><br /><br />
    <select v-model="selected3">
      <option disabled value="">请选择一个</option>
      <option
        v-for="option in options"
        v-bind:key="option.id"
        v-bind:value="option.value"
        >{{ option.id }}
      </option>
    </select>
    <br />
    <span>selected: {{ selected3 }}</span>
    <br />
    <input v-model.trim="msg" />
    <br />
    <span>实时 输入内容为：{{ msg }}</span>
    <br />
    <input v-model.lazy="msg2" />
    <br />
    <span>延迟 输入内容为：{{ msg2 }}</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      picked: "",
      checkedNames: [],
      selected: "",
      selected2: [],
      selected3: "",
      options: [
        { id: 1, value: "苹果" },
        { id: 2, value: "香蕉" },
        { id: 3, value: "橘子" },
      ],
      msg: "",
      msg2: "",
    };
  },
};
</script>
