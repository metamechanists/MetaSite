class ApplicationLongText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var internal_id = this.getAttribute("internal_id");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class="application-long-text-container">
                <h2 class="text-question">
                    ${description}
                </h2>
                <br>
                <textarea class="application-long-text-input" type="text" id="${internal_id}"></textarea><br>
            </div>`
    }
}

customElements.define('application-long-text', ApplicationLongText);