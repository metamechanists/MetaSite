class ApplicationCheckbox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var name = this.getAttribute("name");
        var description = this.innerHTML;
        this.innerHTML = `
            <label class="application-checkbox-container text-question">
                <input class="application-checkbox-input" type="checkbox" name="${name}">
                <span class="application-checkbox-checkmark"></span>
                ${description}
            </label>`
    }
}

customElements.define('application-checkbox', ApplicationCheckbox);