class WikiBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-box content-section content-pad-top content-pad-bottom text-paragraph">
                <hr>
                ${content}
            </div>`
    }
}

customElements.define('wiki-box', WikiBox);