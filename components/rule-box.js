class RuleBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var number = this.getAttribute("number");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "rule-box">
                <span class="rule-box-number">
                    [${number}]
                </span>
                <span class="rule-box-rule">
                    ${description}
                </span>
            </div>
            <br>`
    }
}

customElements.define('rule-box', RuleBox);