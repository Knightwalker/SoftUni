class Hotel {
  constructor(name, capacity, bookings, currentBookingNumber) {
    this.name = name;
    this.capacity = capacity;
    this.capacityRooms = {
      "single": parseInt(this.capacity * 0.50),
      "double": parseInt(this.capacity * 0.30),
      "maisonette": parseInt(this.capacity * 0.20)
    }
    this.bookings = [];
    this.currentBookingNumber = 1;
  }

  get roomsPricing() {
    return {
      single: 50,
      double: 90,
      maisonette: 135
    }
  }
  
  get servicesPricing() {
    return {
      food: 10,
      drink: 15,
      housekeeping: 25
    }
  }

  rentARoom(clientName, roomType, nights) {
    if (this.capacityRooms[roomType] > 0) {
      let currentClientBookingObj = {
        "clientName": clientName,
        "roomType": roomType,
        "nights": nights,
        "bookingNumber": this.currentBookingNumber
      }
      this.currentBookingNumber++;
      this.capacityRooms[roomType]--;
      this.bookings.push(currentClientBookingObj);
      return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`;
    } else {
      let msg = "";
      if (roomType == "single") {
        msg = `No single rooms available! Available double rooms: ${this.capacityRooms["double"]}. Available maisonette rooms: ${this.capacityRooms["maisonette"]}.`;
      } else if (roomType == "double") {
        msg = `No double rooms available! Available single rooms: ${this.capacityRooms["single"]}. Available maisonette rooms: ${this.capacityRooms["maisonette"]}.`;
      } else if (roomType == "maisonette") {
        msg = `No maisonette rooms available! Available single rooms: ${this.capacityRooms["single"]}. Available double rooms: ${this.capacityRooms["double"]}.`;
      }
      return msg;
    }
  }


  roomService(bookingNumber, serviceType) {
    let validateBookingNumber = false;
    let validateServiceType = false;
    let clientName = "";

    if (serviceType == "food" || serviceType == "drink" || serviceType == "housekeeping") {
      for(let booking in this.bookings) {
        let currentBooking = this.bookings[booking];
        let currentBookingNumber = currentBooking["bookingNumber"];
        if (bookingNumber == currentBookingNumber) {
          if (!currentBooking["services"]) {
            currentBooking["services"] = [];
          }
          currentBooking["services"].push(serviceType);
          clientName = currentBooking["clientName"];
          validateBookingNumber = true;
          break;
        }
      }
      validateServiceType = true;
    }
    if (validateServiceType == false) {
      return `We do not offer ${serviceType} service.`;
    } else if (validateBookingNumber == false) {
      return `The booking ${currentBookingNumber} is invalid.`;
    } else if (validateBookingNumber) {
      return `Mr./Mrs. ${clientName}, Your order for ${serviceType} service has been successful.`;
    }
  }


  checkOut(bookingNumber) {
    let validateBookingNumber = false;
    let validateBookingServices = false;
    let clientName = "";
    let totalMoney = 0;
    let totalServiceMoney = 0;

    for(let booking in this.bookings) {
      let currentBooking = this.bookings[booking];
      let currentBookingNumber = currentBooking["bookingNumber"];
      if (bookingNumber == currentBookingNumber) {
        clientName = currentBooking["clientName"];
        validateBookingNumber = true;

        // calculate the payment
        let nights = currentBooking["nights"];
        let roomType = currentBooking["roomType"];
        let roomsPricingObj = this.roomsPricing;
        totalMoney = roomsPricingObj[roomType] * nights;
        //console.log(totalMoney);

        this.capacityRooms[roomType]++;

        // calculate the extra payment
        if (currentBooking["services"]) {
          validateBookingServices = true; 
          let servicesPricingObj = this.servicesPricing;
          for (let i = 0; i < currentBooking["services"].length; i++) {
            let currentService = currentBooking["services"][i];
            totalServiceMoney += servicesPricingObj[currentService];
          }
        } 

        break;
      }
    }

    if (validateBookingNumber == false) {
      return `The booking ${bookingNumber} is invalid.`;
    } else if (validateBookingServices) {
      return `We hope you enjoyed your time here, Mr./Mrs. ${clientName}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;
    } else if (validateBookingServices == false && validateBookingNumber == true) {
      return `We hope you enjoyed your time here, Mr./Mrs. ${clientName}. The total amount of money you have to pay is ${totalMoney} BGN.`;
    }
  }


  report() {
    let msg = `${this.name.toUpperCase()} DATABASE:`;
    msg += "\n--------------------";

    let counter = 0;
    if (this.bookings.length > 0) {

      for(let booking in this.bookings) {
        let currentBooking = this.bookings[booking];

        let bookingNumber = currentBooking["bookingNumber"];
        let clientName = currentBooking["clientName"];
        let roomType = currentBooking["roomType"];
        let nights = currentBooking["nights"];
        msg += `\nbookingNumber - ${bookingNumber}`;
        msg += `\nclientName - ${clientName}`;
        msg += `\nroomType - ${roomType}`;
        msg += `\nnights - ${nights}`;

        if (currentBooking["services"]) {
          let servicesArr = currentBooking["services"];
          msg += `\nservices: ${servicesArr.join(", ")}`;
        }

        if (counter != this.bookings.length - 1) {
          msg += "\n----------";
        }
        counter++;
       
      }

    } else {
      msg += "\n----------";
      msg += "\nThere are currently no bookings.";
    }

    return msg;

  }

}