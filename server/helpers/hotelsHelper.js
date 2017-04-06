module.exports = {
  trimHotelBody: (data) => {
    const hotelResults = [];
    const listings = data.search_results;
    listings.forEach((elem) => {
      const list = {};
      list.hotel = 'airbnb';
      list.id = elem.listing.id;
      list.lat = elem.listing.lat;
      list.lng = elem.listing.lng;
      list.neighborhood = elem.listing.neighborhood;
      if (elem.listing.star_rating === null) {
        list.rating = 0;
      } else {
        list.rating = elem.listing.star_rating;
      }
      list.price = elem.pricing_quote.rate_with_service_fee.amount;
      list.url = `https://www.airbnb.com/rooms/${elem.listing.id}`;
      list.pictures = elem.listing.picture_urls;
      hotelResults.push(list);
    });
    return hotelResults;
  },
  sortLowestPrice: (data) => {
    const callback = (a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return priceA - priceB;
    };
    return data.sort(callback);
  },
};
