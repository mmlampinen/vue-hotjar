export default {
  /**
   * id hotjar id
   * sv hotjar sv
   */
  install (Vue, options) {
    const { id, sv } = options
    if (!id) {
      return;
    }
    const sv = props.sv || '6';
    if (typeof window !== 'undefined') {
      window._hjSettings = {
        hjid: id,
        hjsv: sv
      };
      window.hj = window.hj || ((...args) => { (window.hj.q = window.hj.q || []).push(args); });
      const a = document.getElementsByTagName('head')[0];
      const r = document.createElement('script'); r.async = true;
      r.src = `https://static.hotjar.com/c/hotjar-${id}.js?sv=${sv}`;
      a.appendChild(r);
    }
  }
}