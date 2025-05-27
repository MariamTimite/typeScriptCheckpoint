var Voiture = /** @class */ (function () {
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
var maVoiture = new Voiture("Peugeot", "208", 2023);
maVoiture.start();
