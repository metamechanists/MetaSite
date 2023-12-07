class WikiWarning extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-warning">
                <div class="wiki-warning-icon-div">
                    <img src="/image/icons/alert-outline.svg" class = "wiki-warning-icon-image"></i>
                </div>      
                <div class="wiki-warning-text-div">
                    <text class="wiki-warning-text-content">
                        ${content}
                    </text>
                </div>
            </div>`
    }
}

customElements.define('wiki-warning', WikiWarning);