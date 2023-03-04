class RewardRequirement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var requirement = this.getAttribute("reward");
        this.innerHTML = `
            <i data-feather="arrow-right" class="rank-reward-arrow"></i>
            ${requirement}
            <br>`
    }
}

customElements.define('rank-reward', RewardRequirement);