ymaps.ready(init);
function init(){
    // Создание карты.
    myMap = new ymaps.Map("map", {
    center: [55.7477, 37.6278],
    zoom: 11
}, {
    balloonMaxWidth: 200,
    searchControlProvider: 'yandex#search'
});
MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Метка',
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://pngicon.ru/file/uploads/geometka-256x256.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-5, -38]
    }),
myMap.events.add('click', function (e) {
    
    if (!myMap.balloon.isOpen()) {
        myPlacemark.geometry.setCoordinates(coords);
        var coords = e.get('coords');
                myPlacemark.geometry.setCoordinates(coords)
        myMap.balloon.open(coords, {
            contentBody:[
                coords[0].toPrecision(6),
                coords[1].toPrecision(6)
                ].join(', ') + '</p>',
        });
    }
    else {
        myMap.balloon.close();
        myPlacemark.geometry.setCoordinates(coords);
    }
});
myMap.geoObjects
    .add(myPlacemark)
    .add(myPlacemarkWithContent);
// Скрываем хинт при открытии балуна.
myMap.events.add('balloonopen', function (e) {
    myMap.hint.close();
});
}