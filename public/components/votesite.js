class VoteSite extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var name = this.getAttribute("name");
        var url = this.getAttribute("url");
        this.innerHTML = `
            <div class = "votesite">
                <a href="${url}" target="_blank"><strong>${name}</strong> <span>(${url})</span></a>
            </div>`
    }
}

customElements.define('vote-site', VoteSite);