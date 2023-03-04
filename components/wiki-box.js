class WikiBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var background = this.getAttribute("background");
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="${background}">
                <div class="wiki-box content-section content-pad-top content-pad-bottom text-paragraph">
                    <hr>
                    ${content}
                </div>
            </div>`
    }
}

customElements.define('wiki-box', WikiBox);