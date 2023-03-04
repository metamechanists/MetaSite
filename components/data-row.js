class DataRow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var name = this.getAttribute("name");
        var icon = this.getAttribute("icon");
        var key = this.getAttribute("key");
        var value = this.getAttribute("value");
        this.innerHTML = `
            <div>
                <div class = "data-row-key">
                    <i data-feather = "${icon}" class = "data-row-icon"></i>
                    ${key}
                </div>
                <div class = "data-row-key data-row-value data-row-value-normal" id = "${name}">
                    ${value}
                </div>
            </div>
            <br>`
    }
}

customElements.define('data-row', DataRow);