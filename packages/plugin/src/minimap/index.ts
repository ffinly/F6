import { Canvas as GCanvas, Group } from '@antv/g-canvas';
import { Canvas as GSVGCanvas } from '@antv/g-svg';
import { Event as GraphEvent, Point } from '@antv/g-base';
import { isString, isNil, each, debounce } from '@antv/util';
import { createDom, modifyCSS } from '@antv/dom-util';
import { Matrix, ShapeStyle, IAbstractGraph as IGraph } from '@antv/f6-core';
import { ext } from '@antv/matrix-util';
import Base, { IPluginBaseConfig } from '../base';

import { createUI, createSegmentNode } from '@antv/f6-ui';


const { max } = Math;
const { transform } = ext;

const DEFAULT_MODE = 'default';
const KEYSHAPE_MODE = 'keyShape';
const DELEGATE_MODE = 'delegate';
const SVG = 'svg';

interface MiniMapConfig extends IPluginBaseConfig {
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}

export default class MiniMap extends Base {
  constructor(config?: MiniMapConfig) {
    super(config);
  }
  this: IGraph;
  public getDefaultCfgs(): MiniMapConfig {
    return {
      container: null,
      className: 'f6-minimap',
      // viewportClassName: 'f6-minimap-viewport',
      // Minimap 中默认展示和主图一样的内容，KeyShape 只展示节点和边的 key shape 部分，delegate表示展示自定义的rect，用户可自定义样式
      type: 'default',
      padding: 50,
      size: [200, 120],
      delegateStyle: {
        fill: '#40a9ff',
        stroke: '#096dd9',
      },
      // getContent: () => {  // f6-ui  draggable=true 需要
      //   return `
      //     <div class="f6-minimap-root"></div>
      //   `;
      // },

      // getCss: () => {
      //   const graph: IGraph = this.get('graph');
      //   // const graphWidth = graph.get('width');
      //   // const graphHeight = graph.get('height');
      //   // const minZoom = this.get('minZoom');
      //   // const maxZoom = this.get('maxZoom');
      //   // const sliderWidthPercent = this.get('sliderWidthPercent');
      //   // const containerWidth = Math.floor(graphWidth * sliderWidthPercent);
      //   // const resultX = containerWidth * ((1 - minZoom) / (maxZoom - minZoom));
      //   return `
      //     .f6-minimap-root {
      //       position:absolute;
      //       left:0;
      //       top:0;
      //       box-sizing:border-box;
      //       outline: 2px solid #1980ff';
      //     }
      //   `;
      // },

      refresh: true,
    };
  }

  public getEvents() {
    return {
      beforepaint: 'updateViewport',
      beforeanimate: 'disableRefresh',
      afteranimate: 'enableRefresh',
      viewportchange: 'disableOneRefresh',
    };
  }

  // 若是正在进行动画，不刷新缩略图
  protected disableRefresh() {
    this.set('refresh', false);
  }

  protected enableRefresh() {
    this.set('refresh', true);
    this.updateCanvas();
  }

  protected disableOneRefresh() {
    this.set('viewportChange', true);
  }

  private initViewport() {
    const cfgs: MiniMapConfig = this._cfgs as MiniMapConfig;
    const { size, graph } = cfgs;
    if (this.destroyed) return;
    // const canvas = this.get('canvas');
    // const uiGroup = graph.get('uiGroup');
    // const html = this.get('getContent')();
    // const css = this.get('getCss')();
    // const miniMapUI = createUI(html, css, uiGroup);
    // const handleUI = miniMapUI.query('.f6-minimap-root');

    // const containerDOM = canvas.get('container');
    // viewport 就是minimap的缩略图 拖拽方框  小程序模式下 不能使用createDom 使用createUi替代

    const handleUI = this.get('container').query('.viewport');

    // const handleUI = createSegmentNode(`<div class='handler'> </div>`,'.handler{with: 100; height: 100; background: black;}');
    // contianer.appendChild(handleUI)

    // const isFireFox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    // 计算拖拽水平方向距离
    let x = 0;
    // 计算拖拽垂直方向距离
    let y = 0;
    // 是否在拖拽minimap的视口
    let dragging = false;
    // 缓存viewport当前对于画布的x
    let left = 0;
    // 缓存viewport当前对于画布的y
    let top = 0;
    // 缓存viewport当前宽度
    let width = 0;
    // 缓存viewport当前高度
    let height = 0;
    let ratio = 0;
    let zoom = 0;

    console.log(handleUI)
    // 拖拽start事件
    handleUI.on('panstart', (e: GraphEvent) => {
        console.log('jjjjjj', e)
        // if ((e as any).dataTransfer) {
        //   const img = new Image();
        //   img.src =
        //     "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' %3E%3Cpath /%3E%3C/svg%3E";
        //   (e as any).dataTransfer.setDragImage?.(img, 0, 0);
        //   try {
        //     (e as any).dataTransfer.setData('text/html', 'view-port-minimap');
        //   } catch {
        //     // support IE
        //     (e as any).dataTransfer.setData('text', 'view-port-minimap');
        //   }
        // }

        cfgs.refresh = false;
        // if (e.target !== handleUI) {
        //   return;
        // }

        // 如果视口已经最大了，不需要拖拽
        const left = parseInt(handleUI.getStyle('left'), 10);
        const top = parseInt(handleUI.getStyle('top'),10);
        const width = parseInt(handleUI.getStyle('width'),10);
        const height = parseInt(handleUI.getStyle('height'),10)


        if (width > size[0] || height > size[1]) {
          return;
        }

        zoom = graph!.getZoom();
        ratio = this.get('ratio');

        dragging = true;
        // x = e.clientX;
        // y = e.clientY;

        x = e.x;
        y = e.y;
      }
    );

    handleUI.on(
      "panmove",
      (e: GraphEvent) => {

        if (!dragging || isNil(e.x) || isNil(e.y)) {
          return;
        }

        let dx = x - e.x;
        let dy = y - e.y;

        // 若视口移动到最左边或最右边了,仅移动到边界
        if (left - dx < 0 || left - dx + width >= size[0]) {
          dx = 0;
        }

        // 若视口移动到最上或最下边了，仅移动到边界
        if (top - dy < 0 || top - dy + height >= size[1]) {
          dy = 0;
        }

        left -= dx;
        top -= dy;

        // 先移动视口，避免移动到边上以后出现视口闪烁  先不处理 看看f6-ui有没有这个问题
        // modifyCSS(viewport, {
        //   left: `${left}px`,
        //   top: `${top}px`,
        // });

        // graph 移动需要偏移量 dx/dy * 缩放比例才会得到正确的移动距离
        graph!.translate((dx * zoom) / ratio, (dy * zoom) / ratio);

        x = e.x;
        y = e.y;
      },
      false,
    );

    handleUI.on(
      'panend',
      () => {
        dragging = false;
        cfgs.refresh = true;
      },
      false,
    );

    this.set('viewport', handleUI);  // 这里viewport的 key 先保留，下面继续使用

    console.log(this.get('viewport'), "-------lkjjklj");
    // containerDOM.appendChild(handleUI);  ？  采用f6-ui 这一步骤不需要了？
  }

  /**
   * 更新 viewport 视图
   */
  private updateViewport() {
    if (this.destroyed) return;
    const ratio: number = this.get('ratio');
    const dx: number = this.get('dx');
    const dy: number = this.get('dy');
    const totaldx: number = this.get('totaldx');
    const totaldy: number = this.get('totaldy');
    const graph: IGraph = this.get('graph');
    const size: number[] = this.get('size');
    const graphWidth = graph.get('width');
    const graphHeight = graph.get('height');
    const topLeft: Point = graph.getPointByCanvas(0, 0);
    const bottomRight: Point = graph.getPointByCanvas(graphWidth, graphHeight);
    const viewport = this.get('viewport');
    
    // viewport宽高,左上角点的计算
    let width = (bottomRight.x - topLeft.x) * ratio;
    let height = (bottomRight.y - topLeft.y) * ratio;

    let left = topLeft.x * ratio + totaldx;
    let top = topLeft.y * ratio + totaldy;

    const right = left + width;
    const bottom = top + height;

    if (left < 0) {
      width += left;
      left = 0;
    }
    if (right > size[0]) {
      width = width - (right - size[0]);
    }
    if (top < 0) {
      height += top;
      top = 0;
    }
    if (bottom > size[1]) {
      height = height - (bottom - size[1]);
    }

    // 缓存目前缩放比，在移动 minimap 视窗时就不用再计算大图的移动量
    this.set('ratio', ratio);

    const correctLeft: number | string = `${left}`;
    const correctTop: number | string = `${top}`;


    console.log(correctLeft, correctTop, "---correctTop---");

    // 更新 viewport 的位置
    console.log(viewport, "----viewport");

    if(viewport){
      console.log(viewport)
      viewport.setStyle('left', correctLeft);
      viewport.setStyle('top', correctTop);
      
    }

    // modifyCSS(viewport, {
    //   left: correctLeft,
    //   top: correctTop,
    //   width: `${width}px`,
    //   height: `${height}px`,
    // });
  }

  /**
   * 将主图上的图形完全复制到小图
   */
  private updateGraphShapes() {
    const { graph } = this._cfgs;
    const canvas: GCanvas = this.get('canvas');
    const graphGroup = graph!.get('group');
    if (graphGroup.destroyed) return;
    const clonedGroup = graphGroup.clone();

    const uiGroup = this.get('groupCanvas')

    clonedGroup.resetMatrix();

    // canvas.clear();
    uiGroup.add(clonedGroup);

    // 当 renderer 是 svg，由于渲染引擎的 bug，这里需要将 visible 为 false 的元素手动隐藏
    const renderer = graph.get('renderer');
    if (renderer === SVG) {
      // 递归更新子元素
      this.updateVisible(clonedGroup);
    }
  }

  // svg 在 canvas.add(clonedGroup) 之后会出现 visible 为 false 的元素被展示出来，需要递归更新
  private updateVisible(ele) {
    if (!ele.isGroup() && !ele.get('visible')) {
      ele.hide();
    } else {
      const children = ele.get('children');
      if (!children || !children.length) return;
      children.forEach((child) => {
        if (!child.get('visible')) child.hide();
        this.updateVisible(child);
      });
    }
  }

  // 仅在 minimap 上绘制 keyShape
  // FIXME 如果用户自定义绘制了其他内容，minimap上就无法画出
  private updateKeyShapes() {
    const { graph } = this._cfgs;

    const canvas: GCanvas = this.get('canvas');
    const group = this.get('groupCanvas');  // canvas.get('children')[0] || canvas.addGroup();

    each(graph!.getEdges(), (edge) => {
      this.updateOneEdgeKeyShape(edge, group);
    });
    each(graph!.getNodes(), (node) => {
      this.updateOneNodeKeyShape(node, group);
    });
    const combos = graph!.getCombos();
    if (combos && combos.length) {
      const comboGroup =
        group.find((e) => e.get('name') === 'comboGroup') ||
        group.addGroup({
          name: 'comboGroup',
        });
      setTimeout(() => {
        if (this.destroyed) return;
        each(combos, (combo) => {
          this.updateOneComboKeyShape(combo, comboGroup);
        });
        comboGroup?.sort();
        comboGroup?.toBack();
        this.updateCanvas();
      }, 250);
    }
    this.clearDestroyedShapes();
  }

  /**
   * 增加/更新单个元素的 keyShape
   * @param item ICombo 实例
   */
  private updateOneComboKeyShape(item, comboGroup) {
    if (this.destroyed) return;
    const itemMap = this.get('itemMap') || {};

    // 差量更新 minimap 上的一个节点，对应主图的 item
    let mappedItem = itemMap[item.get('id')];
    const bbox = item.getBBox(); // 计算了节点父组矩阵的 bbox
    const cKeyShape = item.get('keyShape').clone();
    const keyShapeStyle = cKeyShape.attr();
    let attrs: any = {
      x: bbox.centerX,
      y: bbox.centerY,
    };
    if (!mappedItem) {
      mappedItem = cKeyShape;
      comboGroup.add(mappedItem);
    } else {
      attrs = Object.assign(keyShapeStyle, attrs);
    }
    const shapeType = mappedItem.get('type');
    if (shapeType === 'rect' || shapeType === 'image') {
      attrs.x = bbox.minX;
      attrs.y = bbox.minY;
    }
    mappedItem.attr(attrs);
    if (!item.isVisible()) mappedItem.hide();
    else mappedItem.show();
    mappedItem.exist = true;
    const zIndex = item.getModel().depth;
    if (!isNaN(zIndex)) mappedItem.set('zIndex', zIndex);
    itemMap[item.get('id')] = mappedItem;
    this.set('itemMap', itemMap);
  }

  /**
   * 增加/更新单个元素的 keyShape
   * @param item INode 实例
   */
  private updateOneNodeKeyShape(item, group) {
    const itemMap = this.get('itemMap') || {};

    // 差量更新 minimap 上的一个节点，对应主图的 item
    let mappedItem = itemMap[item.get('id')];
    const bbox = item.getBBox(); // 计算了节点父组矩阵的 bbox
    const cKeyShape = item.get('keyShape').clone();
    const keyShapeStyle = cKeyShape.attr();
    let attrs: any = {
      x: bbox.centerX,
      y: bbox.centerY,
    };
    if (!mappedItem) {
      mappedItem = cKeyShape;
      group.add(mappedItem);
    } else {
      attrs = Object.assign(keyShapeStyle, attrs);
    }
    const shapeType = mappedItem.get('type');
    if (shapeType === 'rect' || shapeType === 'image') {
      attrs.x = bbox.minX;
      attrs.y = bbox.minY;
    }
    mappedItem.attr(attrs);
    if (!item.isVisible()) mappedItem.hide();
    else mappedItem.show();
    mappedItem.exist = true;
    const zIndex = item.getModel().depth;
    if (!isNaN(zIndex)) mappedItem.set('zIndex', zIndex);
    itemMap[item.get('id')] = mappedItem;
    this.set('itemMap', itemMap);
  }

  /**
   * Minimap 中展示自定义的rect，支持用户自定义样式和节点大小
   */
  private updateDelegateShapes() {
    const { graph } = this._cfgs;

    const canvas: GCanvas = this.get('canvas');
    const group =  //canvas.get('children')[0] || canvas.addGroup();

    // 差量更新 minimap 上的节点和边
    each(graph!.getEdges(), (edge) => {
      this.updateOneEdgeKeyShape(edge, group);
    });
    each(graph!.getNodes(), (node) => {
      this.updateOneNodeDelegateShape(node, group);
    });
    // const combos = graph!.getCombos();
    // if (combos && combos.length) {
    //   const comboGroup = group.find(e => e.get('name') === 'comboGroup') ||
    //     group.addGroup({
    //     name: 'comboGroup'
    //   });
    //   setTimeout(() => {
    //     if (this.destroyed) return;
    //     each(combos, (combo) => {
    //       this.updateOneComboKeyShape(combo, comboGroup);
    //     });
    //     comboGroup?.sort();
    //     comboGroup?.toBack();
    //     this.updateCanvas();
    //   }, 250)
    // }
    this.clearDestroyedShapes();
  }

  private clearDestroyedShapes() {
    const itemMap = this.get('itemMap') || {};
    const keys = Object.keys(itemMap);
    if (!keys || keys.length === 0) return;
    for (let i = keys.length - 1; i >= 0; i--) {
      const shape = itemMap[keys[i]];
      const exist = shape.exist;
      shape.exist = false;
      if (!exist) {
        shape.remove();
        delete itemMap[keys[i]];
      }
    }
  }

  /**
   * 设置只显示 edge 的 keyShape
   * @param item IEdge 实例
   */
  private updateOneEdgeKeyShape(item, group) {
    const itemMap = this.get('itemMap') || {};
    // 差量更新 minimap 上的一个节点，对应主图的 item
    let mappedItem = itemMap[item.get('id')];
    if (mappedItem) {
      const path = item.get('keyShape').attr('path');
      mappedItem.attr('path', path);
    } else {
      mappedItem = item.get('keyShape').clone();
      group.add(mappedItem);
    }
    if (!item.isVisible()) mappedItem.hide();
    else mappedItem.show();
    mappedItem.exist = true;
    itemMap[item.get('id')] = mappedItem;
    this.set('itemMap', itemMap);
  }

  /**
   * Minimap 中展示自定义的 rect，支持用户自定义样式和节点大小
   * 增加/更新单个元素
   * @param item INode 实例
   */
  private updateOneNodeDelegateShape(item, group) {
    const delegateStyle = this.get('delegateStyle');
    const itemMap = this.get('itemMap') || {};

    // 差量更新 minimap 上的一个节点，对应主图的 item
    let mappedItem = itemMap[item.get('id')];
    const bbox = item.getBBox(); // 计算了节点父组矩阵的 bbox
    if (mappedItem) {
      const attrs = {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.width,
        height: bbox.height,
      };
      mappedItem.attr(attrs);
    } else {
      mappedItem = group.addShape('rect', {
        attrs: {
          x: bbox.minX,
          y: bbox.minY,
          width: bbox.width,
          height: bbox.height,
          ...delegateStyle,
        },
        name: 'minimap-node-shape',
      });
    }
    if (!item.isVisible()) mappedItem.hide();
    else mappedItem.show();
    mappedItem.exist = true;
    itemMap[item.get('id')] = mappedItem;
    this.set('itemMap', itemMap);
  }

  /**
   * 主图更新的监听函数，使用 debounce 减少渲染频率
   * e.g. 拖拽节点只会在松手后的 100ms 后执行 updateCanvas
   * e.g. render 时大量 addItem 也只会执行一次 updateCanvas
   */
  private handleUpdateCanvas = debounce(
    (event) => {
      const self = this;
      if (self.destroyed) return;
      self.updateCanvas();
    },
    100,
    false,
  );

  public init() {
    
    this.get('graph').on('afterupdateitem', this.handleUpdateCanvas);
    this.get('graph').on('afteritemstatechange', this.handleUpdateCanvas);
    this.get('graph').on('afteradditem', this.handleUpdateCanvas);
    this.get('graph').on('afterremoveitem', this.handleUpdateCanvas);
    this.get('graph').on('afterrender', this.handleUpdateCanvas);
    this.get('graph').on('afterlayout', this.handleUpdateCanvas);

    setTimeout(() => {
      this.initContainer();
    });
  }

  /**
   * 初始化 Minimap 的容器
   */
  public initContainer() {
    const self = this;
    const graph: IGraph = self.get('graph');
    const size: number[] = self.get('size');
    const className: string = self.get('className');
    let parentNode: string | HTMLElement = self.get('container');


    // const container: HTMLElement = createDom(
    //   `<div class='${className}' style='width: ${size[0]}px; height: ${size[1]}px; overflow: hidden'></div>`,
    // );

    const containerHtml = `<div class='${className}'>
      <div class="f6-minimap-container"></div>
      <div class="viewport"></div>
    </div>`;
    const containerCss = `
      .f6-minimap{ width: ${size[0]}; height: ${size[1]};} 
      .f6-minimap-container{position: relative;width: 100; height: 100}
      .viewport{
        border: 3;
        border-color: blue;
        width: 100;
        height: 100;
        background: rgba(0,0,0,0);
        z-index: 1000;
      }
    `
    const uiGroup = graph.get('uiGroup');

    const miniMapContainerUI = createUI(containerHtml, containerCss, uiGroup);

    const background = miniMapContainerUI.query('.f6-minimap-container')
    const group = background.gNode;
    const canvasGroup = group.addGroup();

    this.set('groupCanvas', canvasGroup)


    // if (isString(parentNode)) {
    //   parentNode = document.getElementById(parentNode) as HTMLElement;
    // }

    // if (parentNode) {
    //   parentNode.appendChild(container);

    // } else {
    //   graph.get('container').appendChild(container);
    // }

    this.set('container', miniMapContainerUI);
    // const containerDOM = createDom(
    //   '<div class="g6-minimap-container" style="position: relative;"></div>',
    // );

    // const containerDOMHtml = '<div class="g6-minimap-container"></div>';
    // const containerDOMCss = `.g6-minimap-container{ position: relative; }`;

    // const containerDOMUI = createUI(containerDOMHtml, containerDOMCss, uiGroup);

    // container.appendChild(containerDOM);
    // miniMapContainerUI.on('panstart', e => {
    //   e.preventDefault();
    // })
    // miniMapContainerUI.on('panend', e => {
    //   e.preventDefault();
    // })

    let canvas;
    const renderer = graph.get('renderer');
    // if (renderer === SVG) {
    //   canvas = new GSVGCanvas({
    //     // container: containerDOMUI,
    //     width: size[0],
    //     height: size[1],
    //   });
    // } else {
    //   canvas = new GCanvas({
    //     container: containerDOMUI,
    //     width: size[0],
    //     height: size[1],
    //   });
    // }
    self.set('canvas', canvas);
    self.updateCanvas();
    this.initViewport();
  }

  public updateCanvas() {
    if (this.destroyed) return;
    // 如果是在动画，则不刷新视图
    const isRefresh: boolean = this.get('refresh');
    if (!isRefresh) {
      return;
    }
    const graph: IGraph = this.get('graph');
    if (graph.get('destroyed')) {
      return;
    }

    // 如果是视口变换，也不刷新视图，但是需要重置视口大小和位置
    if (this.get('viewportChange')) {
      this.set('viewportChange', false);
      this.updateViewport();
    }

    const size: number[] = this.get('size'); // 用户定义的 minimap size
    const canvas: GCanvas = this.get('canvas'); // minimap 的 canvas
    const type: string = this.get('type'); // minimap 的类型
    const padding: number = this.get('padding'); // 用户额定义的 minimap 的 padding

    // if (canvas.destroyed) {
    //   return;
    // }

    switch (type) {
      case DEFAULT_MODE:
        this.updateGraphShapes();
        break;
      case KEYSHAPE_MODE:
        this.updateKeyShapes();
        break;
      case DELEGATE_MODE:
        // 得到的节点直接带有 x 和 y，每个节点不存在父 group，即每个节点位置不由父 group 控制
        this.updateDelegateShapes();
        break;
      default:
        break;
    }

    const group = this.get('groupCanvas'); // canvas.get('children')[0];
    if (!group) return;

    group.resetMatrix();
    // 该 bbox 是准确的，不计算 matrix 的包围盒
    const bbox = group.getCanvasBBox();

    const graphBBox = graph.get('canvas').getCanvasBBox(); // 主图的 bbox
    const graphZoom = graph.getZoom() || 1;
    let width = graphBBox.width / graphZoom;
    let height = graphBBox.height / graphZoom;

    if (Number.isFinite(bbox.width)) {
      // 刷新后bbox可能会变，需要重置画布矩阵以缩放到合适的大小
      width = max(bbox.width, width);
      height = max(bbox.height, height);
    }

    width += 2 * padding;
    height += 2 * padding;

    const ratio = Math.min(size[0] / width, size[1] / height);

    let matrix: Matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

    let minX = 0;
    let minY = 0;
    // 平移到左上角
    if (Number.isFinite(bbox.minX)) {
      minX = -bbox.minX;
    }
    if (Number.isFinite(bbox.minY)) {
      minY = -bbox.minY;
    }

    // 缩放到适合视口后, 平移到画布中心
    const dx = (size[0] - (width - 2 * padding) * ratio) / 2;
    const dy = (size[1] - (height - 2 * padding) * ratio) / 2;

    matrix = transform(matrix, [
      ['t', minX, minY], // 平移到左上角
      ['s', ratio, ratio], // 缩放到正好撑着 minimap
      ['t', dx, dy], // 移动到画布中心
    ]);
    group.setMatrix(matrix);

    // 更新minimap视口
    this.set('ratio', ratio);
    this.set('totaldx', dx + minX * ratio);
    this.set('totaldy', dy + minY * ratio);
    this.set('dx', dx);
    this.set('dy', dy);
    this.updateViewport();
  }

  /**
   * 获取minimap的画布
   * @return {GCanvas} G的canvas实例
   */
  public getCanvas(): GCanvas {
    return this.get('canvas');
  }

  /**
   * 获取minimap的窗口
   * @return {HTMLElement} 窗口的dom实例
   */
  public getViewport(): HTMLElement {
    return this.get('viewport');
  }

  /**
   * 获取minimap的容器dom
   * @return {HTMLElement} dom
   */
  public getContainer(): HTMLElement {
    return this.get('container');
  }

  public destroy() {
    this.get('canvas').destroy();

    const container = this.get('container');
    container.parentNode.removeChild(container);
  }
}
