"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function placedorder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve, reject) => {
            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    console.log(i);
                }, i * 1000);
            }
            resolve("Please placed your order");
        });
        order();
    });
}
console.log(placedorder(() => {
    new Promise((resolve, reject) => {
        for (let i = 0; i <= 5; i++) {
            setTimeout(() => {
                console.log((i));
                resolve("Please wait for your order");
            }, i * 1000);
        }
    }).then((res) => {
        console.log("Please placed your order.");
    }).then((res) => {
        console.log("Please wait for your order");
    });
}));
