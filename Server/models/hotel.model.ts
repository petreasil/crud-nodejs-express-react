export class HotelModel {
  id: number;
  name: string;
  selctedFile: string;
  tags: string[];
  createdAt: string;
  constructor(obj) {
    Object.assign(this, obj);
  }
}
