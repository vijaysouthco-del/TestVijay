exports.HRMLogin = class orangeLogin1 {

    constructor(page) {

        this.page = page;
        this.username = page.locator("//input[@name='username']");
        this.password = page.locator("//input[@name='password']");
        this.LogButton =page.locator("//button[text()=' Login ']");
    }

    async navigation() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    }

    async enterusername(username) {

        await this.username.fill(username);
    }
    async enterpassword(password) {

        await this.password.fill(password);
    }
    async Button() {

        await this.LogButton.click();
    }

}