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
                  <a href="docs-moderation-coreprotect">
                      <img src="image/icons/shield.svg">
                      Coreprotect
                  </a>

                  <a href="docs-moderation-commands">
                      <img src="image/icons/alert.svg">
                      Commands
                  </a>

                  <a href="docs-moderation-consequences">
                      <img src="image/icons/scale-balance.svg">
                      Consequences
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">INFRASTRUCTURE</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="docs-infrastructure-overview">
                      <img src="image/icons/home.svg">
                      Overview
                  </a>

                  <a href="docs-infrastructure-dns">
                      <img src="image/icons/dns.svg">
                      DNS
                  </a>

                  <a href="docs-infrastructure-tunnel">
                      <img src="image/icons/tunnel.svg">
                      Tunnel
                  </a>

                  <a href="docs-infrastructure-reverse-proxy">
                      <img src="image/icons/lan.svg">
                      Reverse Proxy
                  </a>

                  <a href="docs-infrastructure-map">
                      <img src="image/icons/map-marker.svg">
                      Map
                  </a>

                  <a href="docs-infrastructure-analytics">
                      <img src="image/icons/finance.svg">
                      Analytics
                  </a>

                  <a href="docs-infrastructure-jenkins">
                      <img src="image/icons/cog.svg">
                      Jenkins
                  </a>

                  <a href="docs-infrastructure-database">
                      <img src="image/icons/database.svg">
                      Database
                  </a>

                  <a href="docs-infrastructure-ports">
                      <img src="image/icons/network.svg">
                      Ports
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">LINUX ADMINISTRATION</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="docs-linux-administration-permissions">
                      <img src="image/icons/lock.svg">
                      Permissions
                  </a>
                
                  <a href="docs-linux-administration-screen">
                      <img src="image/icons/monitor.svg">
                      Screen
                  </a>

                  <a href="docs-linux-administration-autostart">
                      <img src="image/icons/power-settings.svg">
                      Autostart
                  </a>

                  <a href="docs-linux-administration-scripts">
                      <img src="image/icons/script.svg">
                      Scripts
                  </a>
          </div>`
  }
}

customElements.define('documentation-menu', DocumentationMenu);