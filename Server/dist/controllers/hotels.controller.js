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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelsController = void 0;
const admin = require("firebase-admin");
const hotel_model_1 = require("../models/hotel.model");
class HotelsController {
    constructor() {
        this.db = admin.firestore();
    }
    getall() {
        return __awaiter(this, void 0, void 0, function* () {
            const hotels = yield this.db.collection("hotels").get();
            return hotels.docs.map((item) => new hotel_model_1.HotelModel(item.data()));
        });
    }
    addHotel(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonHotel = JSON.stringify(item);
            const ref = yield this.db.collection("hotels").add(JSON.parse(jsonHotel));
            const hotelItem = yield this.db.collection("hotels").doc(ref.id).get();
            return new hotel_model_1.HotelModel(hotelItem.data());
        });
    }
    getone(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.db.collection("hotels").where("id", "==", id).get();
            return res.docs.map((doc) => new hotel_model_1.HotelModel(doc.data()))[0];
        });
    }
    updateHotel(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.db.collection("hotels").where("id", "==", id).get();
            return ref.forEach((el) => el.ref.set(data));
        });
    }
    deleteHotel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.db.collection("hotels").where("id", "==", id).get();
            return res.forEach((element) => {
                element.ref.delete();
                console.log(`deleted: ${element.id}`);
            });
        });
    }
}
exports.HotelsController = HotelsController;
