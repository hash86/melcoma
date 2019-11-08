export default class TFacility {
  constructor(
    id,
    location,
    price,
    area,
    room,
    estateRequestID,
    estateTypeID,
    images,
    agency,
    dateReg,
    keyValues,
  ) {
    (this.id = id),
      (this.location = location),
      (this.price = price),
      (this.area = area),
      (this.room = room),
      (this.estateRequestID = estateRequestID),
      (this.estateTypeID = estateTypeID),
      (this.images = images),
      (this.agency = agency),
      (this.dateReg = dateReg);
    this.keyValues = keyValues;
  }
}
