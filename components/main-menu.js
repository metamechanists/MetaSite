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
                  <a href="misc/index">
                      <img src="image/icons/home.png">
                      Home
                  </a>

                  <a href="misc/rules">
                      <img src="image/icons/format-list-bulleted-square.png">
                      Rules
                  </a>

                  <a href="misc/ranks">
                      <img src="image/icons/chevron-triple-up.png">
                      Ranks
                  </a>

                  <a href="https://map.metamechanists.org">
                      <img src="image/icons/map-marker-multiple.png">
                      Map
                  </a>

                  <a href="misc/history">
                      <img src="image/icons/progress-clock.png">
                      History
                  </a>

                  <a href="misc/staff">
                      <img src="image/icons/account-heart.png">
                      Staff
                  </a>

                  <a href="misc/application">
                    <img src="image/icons/file-document.png">
                    Applications
                  </a>
              </ul>

              <hr class="main-menu-divider">
              <h class="main-menu-section-title">SLIMEFUN</h>

              <ul class="main-menu-list main-menu-list-item main-menu-icon main-menu-text menu-divider">
                  <a href="slimefun/introduction">
                      <img src="image/icons/home.png">
                      Introduction
                  </a>
              </ul>
          </div>`
  }
}

customElements.define('main-menu', MainMenu);