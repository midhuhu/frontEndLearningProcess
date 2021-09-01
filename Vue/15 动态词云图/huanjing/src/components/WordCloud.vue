<template>
    <div class="wordCloud" ref="wordCloud">
    </div>
</template>

<script>
export default {
    name: 'WordCloud',
    data(){
        return{
            hotWord:['小丑竟是我自己', '夺笋啊 ', '伤害不高',
                '侮辱性极强', '什么是快乐星球', '破防了', '他急了',
                '普通却自信', '爷青回', '爷青结', '潘嘎之交',
                '一爽', '打工人', '干饭人','集美','耗子尾汁',
                '不讲武德','U1S1','有内味了','尾款人','我是嫩爹'
            ],
            color:['#4f14d5', '#19f6c3', '#030303',
                '#fecfef', '#f6ce06', '#f5576c',
                '#0996ef', '#ace54a', '#9b0be3'
            ],
            wordArr:[],
            timer:null,
            resetTime:0,
            ContainerSize: ''
        }
    },
    mounted() {
        this.init()
    },
    methods:{
        init(){
            this.dealSpan();
            this.initWordPods();
            this.render();
        },
        dealSpan(){
            const wordArr =[];
            this.hotWord.forEach((value => {
                const spanDom = document.createElement('span');
                spanDom.style.position='relative';
                spanDom.style.display='inline-block';
                spanDom.style.color=this.randomColor();
                spanDom.style.fontSize = this.randomNumber(10,40)+'px';
                spanDom.innerHTML = value;
                spanDom.local = {
                    position:{
                        x:0,
                        y:0
                    },
                    direction:{
                        x:1,
                        y:1
                    },
                    velocity: {
                        // 每次位移初速度
                        x: -0.3 + Math.random(),
                        y: -0.3 + Math.random()
                    },
                }
                this.$refs.wordCloud.appendChild(spanDom);
                wordArr.push(spanDom);
            }));
            this.wordArr = wordArr;
        },
        randomColor(){
            var colorIndex=Math.floor(this.color.length * Math.random());
            return this.color[colorIndex];
        },
        randomNumber(upperInteger,lowerInteger){
            const choices = upperInteger - lowerInteger + 1;
            return Math.floor(Math.random() * choices + lowerInteger);
        },
        render(){
            if (this.resetTime<100){
                this.resetTime = this.resetTime + 1;
                this.timer = requestAnimationFrame(this.render.bind(this));
                this.resetTime = 0;
            }
            this.wordFly();
        },
        wordFly(){
            this.wordArr.forEach((value => {
                // 设置运动方向 大于边界或者小于边界的时候换方向
                if (value.local.realPos.minx + value.local.position.x < this.ContainerSize.leftPos.x || value.local.realPos.maxx + value.local.position.x > this.ContainerSize.rightPos.x) value.local.direction.x = -value.local.direction.x;
                if (value.local.realPos.miny + value.local.position.y < this.ContainerSize.leftPos.y || value.local.realPos.maxy + value.local.position.y > this.ContainerSize.rightPos.y) value.local.direction.y = -value.local.direction.y;
                //每次右移1个单位 当方向为负数时就是-1个单位也就是向左移1个单位
                value.local.position.x += value.local.velocity.x * value.local.direction.x;
                value.local.position.y += value.local.velocity.y * value.local.direction.y;
                // 给每个词云加动画过渡
                value.style.transform = 'translateX(' + value.local.position.x + 'px) translateY(' + value.local.position.y + 'px)';
            }))
        },
        initWordPods(){
            this.wordArr.forEach((value => {
                value.local.realPos = {
                    minx:value.offsetLeft,
                    maxx:value.offsetLeft + value.offsetWidth,
                    miny: value.offsetTop,
                    maxy: value.offsetTop + value.offsetHeight
                }
            }))
            this.ContainerSize = this.getContainerSize();
        },
        getContainerSize () {
            // 判断容器大小控制词云位置
            const el = this.$refs.wordCloud;
            return {
                leftPos: {
                    // 容器左侧的位置和顶部位置
                    x: el.offsetLeft,
                    y: el.offsetTop
                },
                rightPos: {
                    // 容器右侧的位置和底部位置
                    x: el.offsetLeft + el.offsetWidth,
                    y: el.offsetTop + el.offsetHeight
                }
            };
        }
    },
    destroyed() {
        cancelAnimationFrame(this.timer)
    }
}
</script>

<style scoped>
.wordCloud{
    width:100%;
    height:100%;
}
</style>
