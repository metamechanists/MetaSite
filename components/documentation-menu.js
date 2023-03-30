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
                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Commands
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Consequences
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Ban Appeals
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Communication
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Governance
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">INFRASTRUCTURE</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="docs-infrastructure-overview.html">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Overview
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      DNS
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Tunnel
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      SSH
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Reverse Proxy
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Website
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Map
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Analytics
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Jenkins
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      MySQL
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Postgres
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Synapse
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Coturn
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Bungee
                  </a>

                  <a href="TODO">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Cable
                  </a>
              </ul>
          </div>`
  }
}

customElements.define('documentation-menu', DocumentationMenu);