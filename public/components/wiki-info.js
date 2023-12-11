class WikiInfo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-info">
                <div class="wiki-info-icon-div">
                    <img src="/image/icons/information-outline.svg" class = "wiki-info-icon-image">
                </div>
                <div class="wiki-info-text-div">
                    <div class="wiki-info-text-content">
                        ${content}
                    </div>
                </div>
            </div>`
    }
}

customElements.define('wiki-info', WikiInfo);