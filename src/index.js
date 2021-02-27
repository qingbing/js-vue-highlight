// import component
import hljs from 'highlight.js';
// import style
import 'highlight.js/styles/tomorrow-night.css';
import "./line.css";
// highlight install
const install = function (Vue) {
  Vue.directive('highlight', {
    deep: true,
    bind(el, binding) {
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