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
              <h class="main-menu-section-title">BUILDING</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="docs-moderation-commands">
                      <img src="image/icons/alert.svg">
                      Commands
                  </a>
                  
                  <a href="docs-moderation-commands">
                      <img src="image/icons/alert.svg">
                      WorldEdit
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">MODERATION</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="docs-moderation-commands">
                      <img src="image/icons/alert.svg">
                      Commands
                  </a>

                  <a href="docs-moderation-consequences">
                      <img src="image/icons/alert.svg">
                      Consequences
                  </a>

                  <a href="docs-moderation-communication">
                      <img src="image/icons/alert.svg">
                      Communication
                  </a>

                  <a href="docs-moderation-governance">
                      <img src="image/icons/alert.svg">
                      Governance
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
                  <a href="docs-administration-permissions">
                      <img src="image/icons/alert.svg">
                      Permissions
                  </a>
                
                  <a href="docs-administration-screen">
                      <img src="image/icons/alert.svg">
                      Screen
                  </a>

                  <a href="docs-administration-systemctl">
                      <img src="image/icons/alert.svg">
                      Systemctl
                  </a>

                  <a href="docs-administration-autostart">
                      <img src="image/icons/alert.svg">
                      Autostart
                  </a>

                  <a href="docs-administration-nas">
                      <img src="image/icons/alert.svg">
                      NAS
                  </a>
          </div>`
  }
}

customElements.define('documentation-menu', DocumentationMenu);