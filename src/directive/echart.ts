import { Directive, DirectiveBinding } from 'vue';
import { throttle } from 'lodash';
import * as echarts from 'echarts';
export default <Directive>{
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const myChart = echarts.init(el);
    myChart.setOption(binding.value);
    const resizeObserver = new ResizeObserver(
      //防抖
      throttle(() => {
        myChart.resize();
      }, 800),
    );
    resizeObserver.observe(el);
  },
  unmounted() {
    console.log(123);
  },
};
