"use strict";
var router_1 = require("@angular/router");
var app_contentAreaComponent_1 = require("./contentArea/app.contentAreaComponent");
var app_keszitokComponent_1 = require("./keszitok/app.keszitokComponent");
var app_etelekComponent_1 = require("./etelek/app.etelekComponent");
var app_foodlist200Component_1 = require("./etelek/foodlist200/app.foodlist200Component");
var app_foodlist400Component_1 = require("./etelek/foodlist400/app.foodlist400Component");
var app_foodlist600Component_1 = require("./etelek/foodlist600/app.foodlist600Component");
var app_foodlist800Component_1 = require("./etelek/foodlist800/app.foodlist800Component");
var router = [
    { path: 'etelek', component: app_etelekComponent_1.etelekComponent },
    { path: 'keszitok', component: app_keszitokComponent_1.keszitokComponent },
    { path: '', component: app_contentAreaComponent_1.contentAreaComponent },
    { path: 'etelek/f2', component: app_foodlist200Component_1.foodlist200Component },
    { path: 'etelek/f4', component: app_foodlist400Component_1.foodlist400Component },
    { path: 'etelek/f6', component: app_foodlist600Component_1.foodlist600Component },
    { path: 'etelek/f8', component: app_foodlist800Component_1.foodlist800Component }
];
exports.routes = router_1.RouterModule.forRoot(router);
//# sourceMappingURL=app.router.js.map