describe('Watchdog', function() {

    before(() => {
            Cypress.on('uncaught:exception', (err, runnable) => {
                        // returning false here prevents Cypress from
                        // failing the test if uncaught exceptions from the application appear
                        return false;
                });
        })

        it('Take multiple screens for pixelmatch', function() {

            cy.visit('http://develop.app.review.dev.sellsy.typhon.net/login');

            //login
            cy.get('#login_email')
            .type("mnouet+watchdog@sellsy.com");
            cy.get('#login_pwd')
            .type("5b636fe2");
            cy.get('.aleft > .btn-primary')
            .click();

            //Dashboard
            cy.wait(1000);
            cy.screenshot("dashboard");

            //Invoice overview
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=invoiceOverview&id=982635");
            cy.wait(1000);
            cy.screenshot("invoiceOverview");

            //Third overview
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=third&thirdid=1266790&thirdtype=client");
            cy.wait(1000);
            cy.screenshot("thirdOverview");

            //Contact new listing
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/people");
            cy.wait(1000);
            cy.screenshot("newListingContact");

            //Opportunity overview
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=prospection_opportunity&action=overview&oid=1124933");
            cy.wait(1000);
            cy.screenshot("opportunityOverview");

            //Marketing campaign old listing
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=massmailing_campaigns");
            cy.wait(1000);
            cy.screenshot("oldCampaignListing");
            
            //Sell documents setting
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=invoicing_prefs&action=prefmain");
            cy.wait(1000);
            cy.screenshot("documentsSetting");
            //TO DO : resolve scrollTo problem

            //Create third window
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=dashboard");
            cy.get("ul.nav.tabsMenu").contains('.menuli', "Contacts").trigger('mouseover')
            cy.contains("Ajouter un client").click({ force: true })   
            cy.screenshot("createThirdWindow");  

            //Style guide
            cy.visit("http://develop.app.review.dev.sellsy.typhon.net/?_f=styleguide");
            cy.wait(100).then(() => {
                screenGuide();
            })
             
        function scroll(px){
            cy.window().then((win) => {
            win.scrollTo(0,px);
            })
        }        

        function screenGuide(){
            var px = 0;
            var nbScreen = 0;
            for(var i = 0 ; i < 37; i++){
                nbScreen++;
                cy.screenshot("guide-"+nbScreen, {"capture":"viewport"});
                scroll(px);
                px+=950;
            }  
        }
                        
        });
});
