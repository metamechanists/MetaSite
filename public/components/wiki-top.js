class WikiTop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"/>

    <link rel="stylesheet" href="/style/body.css">
    <link rel="stylesheet" href="/style/background.css">
    <link rel="stylesheet" href="/style/text.css">
    <link rel="stylesheet" href="/style/hljs.css">

    <link rel="stylesheet" href="/style/components/main-menu.css">
    <link rel="stylesheet" href="/style/components/wiki-box.css">
    <link rel="stylesheet" href="/style/components/wiki-path.css">
    <link rel="stylesheet" href="/style/components/wiki-command.css">
    <link rel="stylesheet" href="/style/components/wiki-quote.css">
    <link rel="stylesheet" href="/style/components/wiki-info.css">
    <link rel="stylesheet" href="/style/components/wiki-warning.css">

    <link rel="icon" type = "image/png" href="/image/logo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Overview</title>`
    }
}

customElements.define('wiki-top', WikiTop);