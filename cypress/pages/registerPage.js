///<reference types="Cypress"/>
export class registerPage{
    weblocators={
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    
        
    }

enterLastName(LName){
    cy.get(this.weblocators.lastName).type(LName)
        
}
enterEmail(email){
    cy.get(this.weblocators.email).type(email)
        
}
enterTelephone(phoneNo){
    cy.get(this.weblocators.telephone).type(phoneNo)
        
}
enterPassword(password){
    cy.get(this.weblocators.password).type(password)
        
}
enterpasswordConfirm(passwordConfirm){
    cy.get(this.weblocators.passwordConfirm).type(passwordConfirm)
        
}
seectCheckbox(policyCheckbox){
    cy.get(this.weblocators.policyCheckbox).check()
        
}
entercontinue(cont){
    cy.get(this.weblocators.continue).click()
        
}

}
