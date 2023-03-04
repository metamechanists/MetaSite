class RankRequirement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var requirement = this.getAttribute("requirement");
        this.innerHTML = `
            <i data-feather="arrow-left" class="rank-requirement-arrow"></i>
            ${requirement}
            <br>`
    }
}

customElements.define('rank-requirement', RankRequirement);