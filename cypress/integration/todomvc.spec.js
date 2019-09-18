/// <reference types="cypress" /> 

describe('Test suite for todomvc', () => {
    it('it should be able to add a todo Item on todomvc app', () => {
        
        var strTodoItem = 'Clean the room'
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type(strTodoItem+'{enter}')
        cy.get('label').should('have.text' , strTodoItem)
        
    })

    it('Todo Item should have the text and not ' , () => {
        
        cy.get('.toggle').should('not.be.checked')
        cy.get('.toggle').click()
        
    })

    it('Once checked the text should be strike through' , () => {

        
        cy.get('label').should('have.css' , 'text-decoration-line' , 'line-through')
    })
})