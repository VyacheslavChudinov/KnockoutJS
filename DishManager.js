
var model = [
    new Dish("Heaven and Earth", 10, "image1"),
    new Dish("Charcuterie board", 20, "image2"),
    new Dish("Salt beef bagel", 30, "image2"),
    new Dish("Wiener Schnitzel", 40, "image2"),
    new Dish("Bacon naan", 50, "image2"),

    new Dish("Ajo blanco", 5, "image2"),
    new Dish("Beetroot ravioli", 10, "image2"),
    new Dish("Buratta with blood orange and coriander seeds", 15, "image2"),
    new Dish("Cabbage thoran", 20, "image2"),
    new Dish("Chestnut tagiatelle", 25, "image2"),

    new Dish("Matcha green bubble tea", 13, "image2"),
    new Dish("Blueberry eclairs", 31, "image2"),
    new Dish("Barley sponge", 22, "image2"),
    new Dish("Apple tarte tatin", 51, "image2"),
    new Dish("Blood orange granita", 23, "image2")
];

var extendedModel = [];
for(var i = 0; i < model.length; ++i)
{
    extendedModel.push({
        name: model[i].name,
        price: model[i].price,
        imageURL: model[i].imageURL,
        index: i,
        isChecked: ko.observable(false)
    });
}

function dishesViewModel() {
    var self = this;
    self.dishes = ko.observableArray(extendedModel);
    self.total = ko.computed(function(){
        var result = 0;
        for(var i = 0; i < self.dishes().length; ++i)
        {
            var dish = self.dishes()[i];
            result += +(dish.isChecked() ? dish.price : 0);
        }
        return result;
    });
}
ko.applyBindings( new dishesViewModel() );


/*var dishes = [
    new Dish("Heaven and Earth", 10, "image1"),
    new Dish("Charcuterie board", 20, "image2"),
    new Dish("Salt beef bagel", 30, "image2"),
    new Dish("Wiener Schnitzel", 40, "image2"),
    new Dish("Bacon naan", 50, "image2"),

    new Dish("Ajo blanco", 5, "image2"),
    new Dish("Beetroot ravioli", 10, "image2"),
    new Dish("Buratta with blood orange and coriander seeds", 15, "image2"),
    new Dish("Cabbage thoran", 20, "image2"),
    new Dish("Chestnut tagiatelle", 25, "image2"),

    new Dish("Matcha green bubble tea", 13, "image2"),
    new Dish("Blueberry eclairs", 31, "image2"),
    new Dish("Barley sponge", 22, "image2"),
    new Dish("Apple tarte tatin", 51, "image2"),
    new Dish("Blood orange granita", 23, "image2")
];*/