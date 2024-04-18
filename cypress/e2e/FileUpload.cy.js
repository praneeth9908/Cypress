import 'cypress-file-upload'
describe('File Upload', () => {
    it('Single File', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('PraneethVankadari.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('.example > h3').should('have.text', 'File Uploaded!')
    })

    it('Single File - Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'PraneethVankadari.pdf', fileName:'resume.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000).should('have.text', 'File Uploaded!')
        cy.get('.example > h3').should('have.text', 'File Uploaded!')
    })

    it('Single File - Drag n Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('PraneethVankadari.pdf', {subjectType: 'drag-n-drop'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get('h1').should('have.text', 'Internal Server Error')
    })

    it('Multiple Files', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['PraneethVankadari.pdf', 'message.txt'])
        cy.get('#fileList > li').should('have.length', 2)
    })

    it.only('File Upload - Shadow DOM', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('PraneethVankadari.pdf')
        cy.wait(3000)
        cy,get('.smart-item-name',{includeShadowDom:true}).contains('PraneethVankadari.pdf')
    })
})