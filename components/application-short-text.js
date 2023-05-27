class ApplicationShortText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var internal_id = this.getAttribute("internal_id");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class="application-short-text-container">
                <h2 class="text-question">
                    ${description}
                </h2>
                <br>
                <input class="application-short-text-input" type="text" id="${internal_id}"><br>
            </div>`
    }
}

customElements.define('application-short-text', ApplicationShortText);