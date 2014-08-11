'use strict';

var model = [
    new Dish('Heaven and Earth', 10, 'Images\\heaven.jpg'),
    new Dish('Charcuterie board', 20, 'Images\\charc.jpg'),
    new Dish('Salt beef bagel', 30, 'Images\\salt.jpg'),
    new Dish('Wiener Schnitzel', 40, 'Images\\wiener.jpg'),
    new Dish('Bacon naan', 50, 'Images\\bacon.jpg'),

    new Dish('Ajo blanco', 5, 'Images\\ajo.jpg'),
    new Dish('Beetroot ravioli', 10, 'Images\\beetroot.jpg'),
    new Dish('Buratta with blood orange and coriander seeds', 15, 'Images\\buratta.jpg'),
    new Dish('Cabbage thoran', 20, 'Images\\cabbage.jpg'),
    new Dish('Chestnut tagiatelle', 25, 'Images\\chestnut.jpg'),

    new Dish('Matcha green bubble tea', 13, 'Images\\matcha.jpg'),
    new Dish('Blueberry eclairs', 31, 'Images\\blueberry.jpg'),
    new Dish('Barley sponge', 22, 'Images\\barley.jpg'),
    new Dish('Apple tarte tatin', 51, 'Images\\apple.jpg'),
    new Dish('Blood orange granita', 23, 'Images\\blood.jpg')
];

var extendedModel = [];
for(var i = 0; i < model.length; ++i)
{
    extendedModel.push({
        name: model[i].name,
        price: model[i].price,
        imageURL: model[i].imageURL,
        index: i,
        isChecked: ko.observable(false),
        amount: ko.observable(1)
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
            result += (dish.isChecked() ? dish.price : 0)*dish.amount();
        }
        return result;
    });
    self.buttonClick = function(){
        for(var i = 0; i < self.dishes().length; ++i)
        {
            self.dishes()[i].amount(1);
            self.dishes()[i].isChecked(false);
        }
        $('.elementToPopUp').bPopup();

    }
}


ko.bindingHandlers.checkedColor = {
    init: function (element, valueAccessor) {
        var value = ko.unwrap(valueAccessor());
        if (value) {
            $(element).css({
                'color': '#fff'
            });
        } else {
            $(element).css({
                'color': '#000'
            });
        }
    },

    update: function (element, valueAccessor) {
    var value = ko.unwrap(valueAccessor());
    if (value) {
        $(element).css({
            'color': '#fff'
        });
    } else {
        $(element).css({
            'color': '#000'
        });
    }
}
};

ko.applyBindings(new dishesViewModel());