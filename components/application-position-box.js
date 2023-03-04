class ApplicationPositionBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var icon = this.getAttribute("icon");
        var title = this.getAttribute("title");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "pure-u-1 pure-u-md-2-5 pure-u-lg-1-2 application-position-box">
                <div class="application-position-box-icon-div">
                    <img src = "${icon}" class = "application-position-box-icon-image"></i>
                </div>
                <div class="application-position-box-text-div">
                    <h1>${title}</h1>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`
    }
}

customElements.define('application-position-box', ApplicationPositionBox);