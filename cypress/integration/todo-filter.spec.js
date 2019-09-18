/// <reference types="cypress" /> 
describe('Filter Test' , () =>{

    beforeEach(()=>{

        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type('Clean Room1{enter}')
        cy.get('.new-todo').type('Clean Room2{enter}')
        cy.get('.new-todo').type('Clean Room3{enter}')

        cy.get('.todo-list li:nth-child(1) .toggle').click()
        

    })

    it('Filter Active' , ()=>{



    })

})