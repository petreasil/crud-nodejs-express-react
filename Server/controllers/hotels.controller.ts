import * as admin from "firebase-admin";
import { HotelModel } from "../models/hotel.model";
export class HotelsController {
  db: FirebaseFirestore.Firestore;
  constructor() {
    this.db = admin.firestore();
  }

  async getall(): Promise<HotelModel[]> {
    const hotels = await this.db.collection("hotels").get();
    return hotels.docs.map((item) => new HotelModel(item.data()));
  }

  async addHotel(item: HotelModel): Promise<HotelModel> {
    const jsonHotel = JSON.stringify(item);
    const ref = await this.db.collection("hotels").add(JSON.parse(jsonHotel));
    const hotelItem = await this.db.collection("hotels").doc(ref.id).get();
    return new HotelModel(hotelItem.data());
  }

  async getone(id: any): Promise<HotelModel> {
    const res = await this.db.collection("hotels").where("id", "==", id).get();
    return res.docs.map((doc) => new HotelModel(doc.data()))[0];
  }
  async updateHotel(id: any, data) {
    const ref = await this.db.collection("hotels").where("id", "==", id).get();

    return ref.forEach((el) => el.ref.set(data));
  }

  async deleteHotel(id: any) {
    const res = await this.db.collection("hotels").where("id", "==", id).get();

    return res.forEach((element) => {
      element.ref.delete();
      console.log(`deleted: ${element.id}`);
    });
  }
}
