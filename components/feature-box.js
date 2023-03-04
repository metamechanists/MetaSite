class FeatureBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var icon = this.getAttribute("icon");
        var title = this.getAttribute("title");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "pure-u-1 pure-u-md-2-5 pure-u-lg-1-5 featurebox">
                <div class="featurebox-icon-div">
                    <i data-feather = "${icon}" class = "featurebox-icon-image"></i>
                </div>
                <div class="featurebox-text-div">
                    <h1>${title}</h1>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`
    }
}

customElements.define('feature-box', FeatureBox);