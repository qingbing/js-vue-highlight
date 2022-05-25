// import component
import { isEmpty } from "@qingbing/helper";
import hljs from 'highlight.js';
import "./line.css";
import codeStyles from "./codeStyle";
const install = function (Vue) {
  Vue.directive('highlight', {
    deep: true,
    bind(el, binding) {
      // 动态加入样式
      let codeStyle = 'tomorrow-night';
      if (!isEmpty(binding.arg) && (codeStyles.isElement(binding.arg))) {
        codeStyle = binding.arg;
      }
      import(`highlight.js/styles/${codeStyle}.css`).then(item => {
      });

      // on first bind, highlight all targets
      let targets = el.querySelectorAll('code');

      targets.forEach(target => {
        if (typeof binding.value === 'string') {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          target.textContent = binding.value;
        }
        // 改变code以显示添加行号
        target.innerHTML = "<ul><li>" + target.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ul>";
        hljs.highlightBlock(target);
      })
    },
    componentUpdated(el, binding) {
      // 动态加入样式
      let codeStyle = 'tomorrow-night';
      if (!isEmpty(binding.arg) && (codeStyles.isElement(binding.arg))) {
        codeStyle = binding.arg;
      }
      import(`highlight.js/styles/${codeStyle}.css`).then(item => {
      });

      // after an update, re-fill the content and then highlight
      let targets = el.querySelectorAll('code');

      targets.forEach(target => {
        if (typeof binding.value === 'string') {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          target.textContent = binding.value;
          // 改变code以显示添加行号
          target.innerHTML = "<ul><li>" + target.innerHTML.replace(/\n/g, "\n</li><li>") + "\n</li></ul>";
          hljs.highlightBlock(target);
        }
      })
    },
  })
}

if (window.Vue) {
  window['highlight'] = highlight;
  Vue.use(install); // eslint-disable-line
}

// export component
export default install;