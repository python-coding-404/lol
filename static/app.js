class Userc extends HTMLElement {
  constructor(){
    this.attachShadow({mode:"open"})
    
    this.shadowRoot.innerHTML = `<h1>${this.shadowRoot.getAttribute("name")}</h1>`
  }
}
window.customElements.define("u-u", Userc);