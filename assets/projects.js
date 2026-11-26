/*
  Project albums. To add photos to a project, put them in images/projects/<slug>/
  and list them in "photos". "cover" is the smaller image used on the project tiles.
  cat: 0 = Домови/Homes, 1 = Кујни/Kitchens, 2 = Бањи/Bathrooms, 3 = Деловни простори/Commercial
*/
var PROJECTS = [
  {slug:"timber-slats", cat:1, cover:"images/timber-slats.jpg",
   name:{mk:"Кујна со декоративен дрвен ѕид", en:"Timber Slats"},
   desc:{mk:"Модерна кујна со остров и декоративен дрвен ѕид со LED осветлување.", en:"Modern kitchen with an island and a decorative timber wall with LED lighting."},
   photos:["images/projects/timber-slats/01.jpg","images/projects/timber-slats/02.jpg","images/projects/timber-slats/03.jpg"]},
  {slug:"island-glass-cabinet", cat:1, cover:"images/island-glass-cabinet.jpg",
   name:{mk:"Кујнски остров и стаклена витрина", en:"Island and Glass Cabinet"},
   desc:{mk:"Кујнски остров и стаклена витрина, изработени по мерка.", en:"Kitchen island and glass display cabinet, made to measure."},
   photos:["images/projects/island-glass-cabinet/01.jpg","images/projects/island-glass-cabinet/02.jpg"]},
  {slug:"fabu-spot", cat:3, cover:"images/fabu-spot.jpg",
   name:{mk:"Fabu Spot", en:"Fabu Spot"},
   desc:{mk:"Продавница во трговски центар: полици по мерка, излог и осветлување.", en:"Shop in a shopping centre: custom shelving, shop front and lighting."},
   photos:["images/projects/fabu-spot/01.jpg","images/projects/fabu-spot/02.jpg","images/projects/fabu-spot/03.jpg","images/projects/fabu-spot/04.jpg","images/projects/fabu-spot/05.jpg","images/projects/fabu-spot/06.jpg"]},
  {slug:"classic-white-kitchen", cat:1, cover:"images/classic-white-kitchen.jpg",
   name:{mk:"Класична бела кујна", en:"Classic White Kitchen"},
   desc:{mk:"Класична бела кујна со елементи изработени по мерка.", en:"Classic white kitchen with made-to-measure units."},
   photos:["images/projects/classic-white-kitchen/01.jpg","images/projects/classic-white-kitchen/02.jpg","images/projects/classic-white-kitchen/03.jpg","images/projects/classic-white-kitchen/04.jpg","images/projects/classic-white-kitchen/05.jpg"]},
  {slug:"olive-green-kitchen", cat:0, cover:"images/olive-green-kitchen.jpg",
   name:{mk:"Маслинесто зелена кујна", en:"Olive Green Kitchen"},
   desc:{mk:"Кујна во маслинесто зелена боја, изработена по мерка.", en:"Olive green kitchen, made to measure."},
   photos:["images/projects/olive-green-kitchen/01.jpg","images/projects/olive-green-kitchen/02.jpg","images/projects/olive-green-kitchen/03.jpg","images/projects/olive-green-kitchen/04.jpg"]},
  {slug:"delicia", cat:3, cover:"images/delicia.jpg",
   name:{mk:"Delicia", en:"Delicia"},
   desc:{mk:"Продавница за слатки со декоративен таван, полици по мерка и пулт со витрина.", en:"Sweet shop with a decorative ceiling, custom shelving and a display counter."},
   photos:["images/projects/delicia/01.jpg","images/projects/delicia/02.jpg","images/projects/delicia/03.jpg"]},
  {slug:"dark-walnut-kitchen", cat:1, cover:"images/dark-walnut-kitchen.jpg",
   name:{mk:"Темна кујна со финиш од орев", en:"Dark Walnut Kitchen"},
   desc:{mk:"Темна кујна со финиш од орев, изработена по мерка.", en:"Dark kitchen with a walnut finish, made to measure."},
   photos:["images/projects/dark-walnut-kitchen/01.jpg","images/projects/dark-walnut-kitchen/02.jpg","images/projects/dark-walnut-kitchen/03.jpg","images/projects/dark-walnut-kitchen/04.jpg","images/projects/dark-walnut-kitchen/05.jpg"]}
];
