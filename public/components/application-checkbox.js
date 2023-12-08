class ApplicationCheckbox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var internal_id = this.getAttribute("internal_id");
        var description = this.innerHTML;
        this.innerHTML = `
            <label class="application-checkbox-container text-question">
                <input class="application-checkbox-input" type="checkbox" id="${internal_id}">
                <span class="application-checkbox-checkmark" id="${internal_id}-span"></span>
                ${description}
            </label>`
    }
}

customElements.define('application-checkbox', ApplicationCheckbox);