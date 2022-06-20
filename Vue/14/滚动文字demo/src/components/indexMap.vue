<template>
    <div id="container">
        <div class="topMap"></div>
        <div class="bottomList"></div>
    </div>
</template>
<script src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=zVxxjTv3OHqlVISrLu8t5RCehiifRZnM"></script>
<script>
export default {
    name: "indexMap",
    methods: {
        open() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
            });
        }
    }
}

var map = new BMapGL.Map('topMap');
map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 15);
map.enableScrollWheelZoom(true);
// 创建添加点标记
var marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
var marker1 = new BMapGL.Marker(new BMapGL.Point(116.437, 39.925));
var marker2 = new BMapGL.Marker(new BMapGL.Point(116.475, 39.930));
var marker3 = new BMapGL.Marker(new BMapGL.Point(116.395, 39.935));
var marker4 = new BMapGL.Marker(new BMapGL.Point(116.415, 39.931));
map.addOverlay(marker);
map.addOverlay(marker1);
map.addOverlay(marker2);
map.addOverlay(marker3);
map.addOverlay(marker4);
</script>

<style>
    #container{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .topMap{
        height: 65%;
    }
    .bottomList{
        height:35%;
    }
</style>
