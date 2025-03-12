class Navigation {
    visitHomepage() {
        cy.visit('https://www.mitrakeluarga.com/');
    }
    loginSubmit() {
        cy.visit('https://www.mitrakeluarga.com/login');
    }
}

export default new Navigation();