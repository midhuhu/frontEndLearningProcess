import { createRenderer } from "vue";
import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";

const renderer = createRenderer({
  createElement(type) {
    // 创建元素
    console.log(type);
    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
      case "circle":
        element = new Graphics();
        element.beginFill(0xffff00);
        element.drawCircle(0, 0, 50);
        element.endFill();
        break;
      default:
        break;
    }
    return element;
  },
  setElementText(node, text) {
    console.log(node);
    const canvasText = new Text(text);
    node.addChild(canvasText);
  },
  insert(el, parent) {
    console.log(el, parent);
    if (el && parent) {
      parent.addChild(el);
    }
  },
  nextSibling() {},
  parentNode(node) {
    console.log(node);
    return node.parent;
  },
  remove(el) {
    console.log(el);
    if (el.parent) {
      el.parent.removeChild(el);
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    // console.log(key);
    console.log(el, key);
    switch (key) {
      case "texture":
        // 单独处理
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        el.on("pointertap", nextValue);
        break;
      default:
        // 常规操作
        el[key] = nextValue;
    }
  },
  createText(text) {
    console.log(text);
  },
  createComment(text) {
    console.log(text)
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
