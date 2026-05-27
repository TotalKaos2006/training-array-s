// Opdracht 1
const passagiers = [
    {id: 1, naam: "Leo Daams", saldo: 34, woonplaats: "Den bosch", telefoon: "06-12345678"},
    {id: 2, naam: "Nicole Hops", saldo: 18, woonplaats: "Maastricht", telefoon: "06-87654321"}
];

//Nieuwe passagier toevoegen
function voegPassagiersToe(id, naam, saldo, woonplaats, telefoon) {
    passagiers.push({id: id, naam: naam, saldo: saldo, woonplaats: woonplaats, telefoon: telefoon});
    console.log(naam + " is toegevoegd!");
}

voegPassagiersToe(3, "Anna", 12, "Amsterdam", "06-12345678");

// Inchecken en uitchecken
function checkin(id, bedrag) {
    const passagier = passagiers.find(function(p) {
        return p.id === id;
    });
    passagier.saldo += bedrag;
    console.log(passagier.naam + " heeft ingecheckt. Saldo: " + passagier.saldo);
}

function checkout(id, bedrag) {
    const passagier = passagiers.find(function(p) {
        return p.id === id;
    });
    passagier.saldo -= bedrag;
    console.log(passagier.naam + " heeft uitgecheckt. Saldo: " + passagier.saldo);
}

checkin(1, 2.50);
checkout(1, 1);

//Passagier verwijderen
function verwijderPassagier(id) {
    const index = passagiers.findIndex(function(p) {
        return p.id === id;
    });
    passagiers.splice(index, 1);
    console.log(id + " is verwijderd!");
}

verwijderPassagier(2);

//Lijst tonen
function toonPassagiers() {
    for (let i = 0; i < passagiers.length; i++) {
        console.log(passagiers[i].naam + " - Saldo: " + passagiers[i].saldo + " - Woonplaats: " + passagiers[i].woonplaats);
    }
}

toonPassagiers();