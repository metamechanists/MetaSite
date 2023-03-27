class DocumentationMenu extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      this.innerHTML = `
          <input class = "main-menu-toggle-input" type = "checkbox" id = "main-menu-toggle-input">
          <label class = "main-menu-toggle-label" for = "main-menu-toggle-input">
              <i data-feather="menu" class = "main-menu-toggle-icon"></i>
          </label>

          <div class="main-menu-container">
              <img src = "image/banner.png" class = "main-menu-heading-image">

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">MODERATION</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="server-rules">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Commands
                  </a>

                  <a href="server-rules">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Guidelines
                  </a>
              </ul>
          </div>`
  }
}

customElements.define('documentation-menu', DocumentationMenu);