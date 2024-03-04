class FeatureBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var icon = this.getAttribute("icon");
        var title = this.getAttribute("title");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "pure-u-1 pure-u-md-2-4 pure-u-lg-1-4 featurebox">
                <div class="featurebox-icon-div">
                    <i data-feather = "${icon}" class = "featurebox-icon-image"></i>
                </div>
                <div class="featurebox-text-div">
                    <h2>${title}</h2>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`
    }
}

customElements.define('feature-box', FeatureBox);