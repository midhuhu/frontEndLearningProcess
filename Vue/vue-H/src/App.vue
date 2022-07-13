<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div id="vue-H">
		<div id="header"></div>
		<div id="content">
			<div id="aside">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</div>
			<div id="main">
				<RouterView />
			</div>
		</div>
		<div id="footer"></div>
	</div>
</template>

<style lang="less" scoped>
#vue-H {
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
}
#header {
	height: 80px;
	background-color: rgb(70, 117, 186);
}
#footer {
	height: 40px;
	background-color: rgb(70, 117, 186);
}
#content {
	display: flex;
	height: calc(100% - 80px);
}
#aside {
	width: 250px;
	background-color: rgb(174, 192, 226);
	display: flex;
	flex-direction: column;
}
#main {
	flex: 1;
}
a {
	color: rgb(70, 117, 186);
	text-decoration: none;
	font-size: 22px;
	text-align: center;
	padding: 10px;
}
</style>
