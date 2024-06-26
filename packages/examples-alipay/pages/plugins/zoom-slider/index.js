import { ZoomSlider } from "@antv/f6-plugin";
import data from "./data";
import F6 from "@antv/f6";

Page({
  data: {
    width: 375,
    height: 600,
    pixelRatio: 2,
    forceMini: false,
  },

  onLoad() {
    // 同步获取window的宽高
    const { windowWidth, windowHeight, pixelRatio } = my.getSystemInfoSync();
    this.setData({
      width: windowWidth,
      height: windowHeight,
      pixelRatio,
    });
  },

  /**
   * 初始化canvas回调，缓存获得的context
   * @param {*} ctx 绘图context
   * @param {*} rect 宽高信息
   * @param {*} canvas canvas对象，在render为mini时为null
   * @param {*} renderer 使用canvas 1.0还是canvas 2.0，mini | mini-native
   */
  handleInit(ctx, rect, canvas, renderer) {
    const zoomSlider = new ZoomSlider();
    const { width, height, pixelRatio } = this.data;
    console.log("------->", ctx, rect, canvas, renderer);
    this.graph = new F6.Graph({
      context: ctx,
      width,
      height,
      pixelRatio,
      linkCenter: true,
      renderer,
      defaultNode: {
        size: 30,
      },
      modes: {
        default: ["drag-canvas", "zoom-canvas", "drag-node"],
      },
      plugins: [zoomSlider],
    });
    this.graph.data(data);
    this.graph.render();

    // 目前在使用plugin时,需要关闭局部刷新
    this.graph.get("canvas").set("localRefresh", false);
  },

  /**
   * canvas派发的事件，转派给graph实例
   */
  handleTouch(e) {
    this.graph && this.graph.emitEvent(e);
  },

  onUnload() {
    this.graph && this.graph.destroy();
  },
});
