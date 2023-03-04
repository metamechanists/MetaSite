class ApplicationShortText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var name = this.getAttribute("name");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class="application-short-text-container">
                <h class="text-question">
                    ${description}
                </h>
                <br>
                <input class="application-short-text-input" type="text" name="${name}"><br>
            </div>`
    }
}

customElements.define('application-short-text', ApplicationShortText);