import { HotelsController } from "../controllers/hotels.controller";
import { HotelModel } from "../models/hotel.model";

export class HotelsRoutes {
  hotelscontroller = new HotelsController();
  constructor() {}

  routes(app) {
    app.get("/", async (req, res) => {
      const hotels = await this.hotelscontroller.getall();

      res.send(hotels);
    });
    app.get("/:id", async (req, res) => {
      const id = req.params.id;
      const hotel = await this.hotelscontroller.getone(id);

      res.send(hotel);
    });

    app.post("/", async (req, res) => {
      const body = req.body;
      const itemHotel = new HotelModel(body);
      const hotel = await this.hotelscontroller.addHotel(itemHotel);
      res.send(hotel);
    });

    app.patch("/:id", async (req, res) => {
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

      await this.hotelscontroller.updateHotel(id, data);
      res.send(data);
    });

    app.delete("/:id", async (req, res) => {
      const id = req.params.id;

      await this.hotelscontroller.deleteHotel(id);
      res.send("record deleted");
    });
  }
}
