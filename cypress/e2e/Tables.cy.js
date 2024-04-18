describe('Handling Tables', () => {
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child>a').click()

    })

    it('Check Number of Rows and Columns', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length', 10)
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length', 7)
    })

    it('Check cell data from specific Row and Column', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(2)>td:nth-child(3)').should('have.text', 'olaola@das.com')
    })

    it('Read all Rows and Columns data in the first page', () => {
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($cell, index, $cells) => {
                    cy.log($cell.text())
                })
            })
        })
    })

    it.only('Pagination', () => {
        // Find total no of pages
        let totalPages = 10;
        // cy.get('.col-sm-6.text-end').then(($el) => {
        //     const text = $el.text()
        //     totalPages = text.substring(text.indexOf('(')+1, text.indexOf('Pages')-1);
        //     cy.log("Total Pages =====> " + totalPages)
        // })
        for(let p = 1; p < totalPages + 1; p++){
            if(totalPages > 1){
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(2000)
                cy.get('table[class="table table-bordered table-hover"]>tbody>tr').each(($row, index, $rows) => {
                    cy.wrap($row).within(() => {
                        cy.get('td:nth-child(3)').then(($cell) => {
                            const text = $cell.text()
                            cy.log("Email =====> " + text)
                        })
                    })
                })
            }
        }
    })
})