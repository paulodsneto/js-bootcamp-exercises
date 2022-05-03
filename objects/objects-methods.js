let restaurant = {
    name: 'Varandão',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
        let seatsLefts = this.guestCapacity - this.guestCount;
        return partySize <= seatsLefts
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
    }

}
restaurant.seatParty(72);
console.log(restaurant.checkAvailability(5));
restaurant.removeParty(8);
console.log(restaurant.checkAvailability(5));
