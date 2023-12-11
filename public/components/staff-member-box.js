class StaffMemberBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var icon = this.getAttribute("icon");
        var title = this.getAttribute("title");
        var alias = this.getAttribute("alias");
        var rank = this.getAttribute("rank");
        var description = this.innerHTML;
        this.innerHTML = `
            <div class = "pure-u-1 pure-u-md-2-5 pure-u-lg-1-5 staff-member-box">
                <div class="staff-member-box-icon-div">
                    <img src = "${icon}" class = "staff-member-box-icon-image"></i>
                </div>
                <div class="staff-member-box-text-div">
                    <h2>${title}</h2>
                    <h3>${alias}</h3>
                    <h4 class = "${rank}">${rank}</h4>
                    <p>
                        ${description}
                    </p>
                </div>
            </div>`
    }
}

customElements.define('staff-member-box', StaffMemberBox);