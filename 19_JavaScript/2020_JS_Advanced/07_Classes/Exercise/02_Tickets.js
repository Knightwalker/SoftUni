function main(args, criteria) {

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let ticketsStorage = [];
  for (let i = 0; i < args.length; i++) {
    let lineArr = args[i].split("|");
    let destination = lineArr[0];
    let price = Number(lineArr[1]);
    let status = lineArr[2];
  
    let ticket = new Ticket(destination, price, status);
    ticketsStorage.push(ticket);
  }

  if (criteria == "price") {
    ticketsStorage.sort(function(a, b){
      if (a[criteria] > b[criteria]) {
        return 1;
      } else if (a[criteria] < b[criteria]) {
        return -1;
      }
    });
  } else {
    ticketsStorage.sort(function(a, b){
      return a[criteria].localeCompare(b[criteria]);
    });
  }

  //console.log(ticketsStorage);
  return ticketsStorage;

}

main(
  ['Philadelphia|94.20|available',
   'New York City|95.99|available',
   'New York City|95.99|sold',
   'Boston|126.20|departed'
  ],
'destination');

