import SignController from '../controllers/SignController.js'

export default class SignInView {
    constructor() {
        this.signController = new SignController();

        this.signController.logoutUser();

        // login DOM
        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = document.getElementById('txtUsername');
        this.loginPassword = document.getElementById('txtPassword');
        this.loginStaySigned = document.getElementById('checkStaySigned');
        this.loginMessage = document.getElementById('LoginMessage');

        this.bindAddLoginForm();
    }

    bindAddLoginForm() {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault(); 

            try {
                if (!this.signController.loginUser(this.loginUsername.value, this.loginPassword.value, this.loginStaySigned.checked)) {
                    window.location.href = "/html/home.html";
                } else {
                    window.location.href = "/html/admin/home.html";
                }
                //this.displayLoginMessage();
            } catch(e) {
                this.displayLoginMessage(e, 'danger');
            }
        });
    }

    displayLoginMessage(message, type) {
        this.loginMessage.innerHTML =
            `<div class="alert alert-${type}" role="alert">${message}</div>`;
    }
}
