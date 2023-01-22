describe('Sample Test To Upload File', function () {
    // test case
    it('upload file test', function (){
       // launch URL
       cy.visit("https://the-internet.herokuapp.com/upload")
       //upload file with attachFile
       cy.get('#file-upload').attachFile('example.json')
       //click on upload
       cy.get('#file-submit').click()
       //verify uploaded file
       cy.get('#uploaded-files').contains('example')
    });
 });