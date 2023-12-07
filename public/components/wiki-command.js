class WikiCommand extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var content = this.innerHTML;
        this.innerHTML = `
            <div class="wiki-command">
                <div class="wiki-command-icon-div">
                    <img src="/image/icons/console.svg" class = "wiki-command-icon-image">
                </div>
                <div class="wiki-command-text-div">
                    <div class="wiki-command-text-content">
                        <pre><code class="language-bash">${content}</code></pre>
                    </div>
                </div>
            </div>`
    }
}

customElements.define('wiki-command', WikiCommand);