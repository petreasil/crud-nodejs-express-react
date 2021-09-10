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
exports.HotelsRoutes = void 0;
const hotels_controller_1 = require("../controllers/hotels.controller");
const hotel_model_1 = require("../models/hotel.model");
class HotelsRoutes {
    constructor() {
        this.hotelscontroller = new hotels_controller_1.HotelsController();
    }
    routes(app) {
        app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const hotels = yield this.hotelscontroller.getall();
            res.send(hotels);
        }));
        app.get("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const hotel = yield this.hotelscontroller.getone(id);
            res.send(hotel);
        }));
        app.post("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const itemHotel = new hotel_model_1.HotelModel(body);
            const hotel = yield this.hotelscontroller.addHotel(itemHotel);
            res.send(hotel);
        }));
        app.patch("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const itemHotel = req.body;
            const data = {
                id,
                createdAt: itemHotel.createdAt,
                name: itemHotel.name,
                tags: itemHotel.tags,
                selectedFile: itemHotel.selectedFile,
            };
            console.log(data);
            yield this.hotelscontroller.updateHotel(id, data);
            res.send(data);
        }));
        app.delete("/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield this.hotelscontroller.deleteHotel(id);
            res.send("record deleted");
        }));
    }
}
exports.HotelsRoutes = HotelsRoutes;
