function exercise(ticketsData,sortCriteria) {
    let tickets=[];
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }

    for(let ticketData of ticketsData){
        let [destination,price,status]=ticketData.split("|");
        let ticket=new Ticket(destination,Number(price),status);
        tickets.push(ticket);
    }

    tickets.sort(function(a, b) {
        if (a[sortCriteria] > b[sortCriteria]) {
            return 1;
        }
        if (a[sortCriteria] < b[sortCriteria]) {
            return -1;
        }
        return 0;
    });

    //console.log(tickets);
    return tickets;
}

// exercise(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// );

    exercise(['Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'],
        'price'
    );