class ApplicationLongText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var name = this.getAttribute("name");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class="application-long-text-container">
                <h class="text-question">
                    ${description}
                </h>
                <br>
                <textarea class="application-long-text-input" type="text" name="${name}"></textarea><br>
            </div>`
    }
}

customElements.define('application-long-text', ApplicationLongText);