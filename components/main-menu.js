class MainMenu extends HTMLElement {
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
              <h class="main-menu-section-title">MISCELLANEOUS</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="index">
                      <img src="image/icons/home.svg">
                      Home
                  </a>

                  <a href="rules">
                      <img src="image/icons/format-list-bulleted-square.svg">
                      Rules
                  </a>

                  <a href="ranks">
                      <img src="image/icons/chevron-triple-up.svg">
                      Ranks
                  </a>

                  <a href="https://map.metamechanists.org">
                      <img src="image/icons/map-marker-multiple.svg">
                      Map
                  </a>

                  <a href="history">
                      <img src="image/icons/progress-clock.svg">
                      History
                  </a>

                  <a href="staff">
                      <img src="image/icons/account-heart.svg">
                      Staff
                  </a>

                  <a href="application">
                    <img src="image/icons/file-document.svg">
                    Applications
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">SLIMEFUN</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="slimefun-introduction">
                      <img src="image/icons/account-star.svg">
                      Introduction
                  </a>

                  <a href="slimefun-electricity">
                      <img src="image/icons/lightning-bolt.svg">
                      Electricity
                  </a>

                  <a href="slimefun-networks">
                      <img src="image/icons/lan.svg">
                      Networks
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">SLIMEFUN</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="plugins-aurelium-skills">
                      <img src="image/icons/pickaxe.svg">
                      Aurelium Skills
                  </a>

                  <a href="plugins-claiming">
                      <img src="image/icons/map-marker-radius.svg">
                      Claiming
                  </a>

                  <a href="plugins-resource-world">
                      <img src="image/icons/earth.svg">
                      Resource Worlds
                  </a>

                  <a href="plugins-craftbook">
                      <img src="image/icons/book.svg">
                      Craftbook
                  </a>
              </ul>
          </div>`
  }
}

customElements.define('main-menu', MainMenu);