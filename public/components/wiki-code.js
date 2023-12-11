class WikiCode extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-code">
                <div class="wiki-code-icon-div">
                    <img src="/image/icons/code-tags.svg" class = "wiki-code-icon-image">
                </div>
                <div class="wiki-code-text-div">
                    <div class="wiki-code-text-content">
                        <pre><code class="language-java">${content}</code></pre>
                    </div>
                </div>
            </div>`
    }
}

customElements.define('wiki-code', WikiCode);