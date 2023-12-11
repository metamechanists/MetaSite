class WikiPath extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-path">
                <div class="wiki-path-icon-div">
                    <img src="/image/icons/folder-cog-outline.svg" class = "wiki-path-icon-image">
                </div>
                <div class="wiki-path-text-div">
                    <div class="wiki-path-text-content">
                        ${content}
                    </div>
                </div>
            </div>`
    }
}

customElements.define('wiki-path', WikiPath);