console.log('app.js is linked')

function createParagraph() {
    console.log('create Paragraph has been called');
    var color = document.getElementById('color').value;
    var noun1 = document.getElementById('noun1').value;
    var taste = document.getElementById('taste').value;
    var adj = document.getElementById('adj1').value;
    var nounPlural = document.getElementById('nounPlural').value;
    var holiday = document.getElementById('holiday').value;
    var noun2 = document.getElementById('noun2').value;
    var number = document.getElementById('number').value;
    var noun3 = document.getElementById('noun3').value;

    console.log(    color, noun1, taste, adj, nounPlural, holiday, noun2, number, noun3    );

    var paragraph = ' <p> Thanks for placing your chocolate order with the ' + color  + noun1 + ' Chocolate Company. ' + ' Unfortunately, your ' + taste + ' flavored chocolates are unavailable right now because ' + adj + nounPlural + ' accidentally fell in our chocolate vat. ' + ' We’re sorry for any inconvenience this caused. ' + '  Since you were ordering these for a party to celebrate ' + holiday + ' we would like to offer you ' + noun2 + ' -shaped truffles at a discount of ' + number + ' dollars instead ' + ' Sincerely, John ' + noun3 + ' Spooner ' + '</p>';
   
    console.log(paragraph);

    document.getElementById('answer').innerHTML = paragraph

}