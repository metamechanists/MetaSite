class WikiQuote extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var person = this.getAttribute("person");
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-quote">
                <div class="wiki-quote-icon-div">
                    <img src = "image/icons/format-quote-close-outline.svg" class = "wiki-quote-icon-image"></i>
                </div>      
                <div class="wiki-quote-text-div">
                    <div class="wiki-quote-text-content">
                        ${content}
                        <br>
                        <text class="wiki-quote-text-person">
                            ${person}
                        </text>
                    </div>
                </div>
            </div>`
    }
}

customElements.define('wiki-quote', WikiQuote);