class ApplicationBulletPoint extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var description = "yoo"
        var description = this.getAttribute("text");
        this.innerHTML = `
            <i class="icon-small icon-blue" data-feather="hexagon"></i> ${description}`
    }
}

customElements.define('application-bullet-point', ApplicationBulletPoint);