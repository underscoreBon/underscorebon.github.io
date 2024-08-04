class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <a href="index.html">
      <p>
        <image src="media/images/logo.svg" width="200" height="80"></image></a>
        Making Random Things, since 2022
      </p>
        <div class="topnav">
          <a href="index.html">Home</a>
          <a href="socials.html">Socials</a>
          <a href="resources.html">Resources</a>
      </div>
      `;
    }
  }
  
customElements.define("i-need-a-name", Header);
console.log("header loaded");