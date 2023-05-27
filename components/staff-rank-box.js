class StaffRankBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var icon = this.getAttribute("icon");
        var title = this.getAttribute("title");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "pure-u-1 pure-u-md-2-5 pure-u-lg-1-5 staff-rank-box">
                <div class="staff-rank-box-icon-div">
                    <img src = "${icon}" class = "staff-rank-box-icon-image"></i>
                </div>
                <div class="staff-rank-box-text-div">
                    <h2>${title}</h2>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`
    }
}

customElements.define('staff-rank-box', StaffRankBox);