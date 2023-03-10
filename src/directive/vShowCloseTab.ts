import { Directive } from 'vue';

const directive: Directive = {
  mounted: (el: HTMLElement) => {
    const close = el.querySelector('.close') as HTMLElement;

    el.addEventListener('mouseover', () => {
      close.style.display = 'inline-block';
    });
    el.addEventListener('mouseleave', () => {
      if (!el.className.includes('is-checked')) {
        close.style.display = 'none';
      }
    });
  },
};
export default directive;
