function Tickets(arr, sortCriteria) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let ticketsArr = [];

  for (let i = 0; i < arr.length; i++) {
    let arrElements = arr[i].split("|");
    let destination = arrElements[0];
    let price = Number(arrElements[1]);
    let status = arrElements[2];

    let ticket = new Ticket(destination, price, status);
    ticketsArr.push(ticket);
  }

  //console.log(ticketsArr);

  if (sortCriteria == "destination") {
    ticketsArr.sort(function(a, b){
      return a.destination.localeCompare(b.destination);
    });
    return ticketsArr;
  } else if (sortCriteria == "price") {
    ticketsArr.sort(function(a, b){
      return a.price - b.price;
    });
    return ticketsArr;
  } else if (sortCriteria == "status") {
    ticketsArr.sort(function(a, b){
      return a.status.localeCompare(b.status);
    });
    return ticketsArr;
  }
}

// Tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// );