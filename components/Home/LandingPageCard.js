import React from "react";

const destinations = [
  {
    name: "New York",
    imgUrl:
      "https://res.cloudinary.com/lastminute-contenthub/s--_587KB0D--/c_limit,h_999999,w_1920/f_auto/q_auto:eco/v1/DAM/Photos/Destinations/Americas/USA/New%20York/shutterstock_575711801",
  },
  {
    name: "Norway",
    imgUrl:
      "https://cdn.kimkim.com/files/a/content_articles/featured_photos/f9fd782d8a36f376d0bf9e7c248b0a0c58453213/big-4df103c2b26bf3be14086ef429126aa8.jpg",
  },
  {
    name: "Switzerland",
    imgUrl:
      "https://epiconeadventures.com/wp-content/uploads/switzerland-tour-matterhorn-village-main-image.jpg",
  },
  {
    name: "Japan",
    imgUrl:
      "https://zafigo.com/wp-content/uploads/2020/04/david-edelstein-N4DbvTUDikw-unsplash.jpg",
    discount: "20% OFF",
  },
  {
    name: "Thailand",
    imgUrl:
      "https://static.toiimg.com/photo/69543988.cms",
    discount: "15% OFF",
  },
  {
    name: "Italy",
    imgUrl:
      "https://www.followmeaway.com/wp-content/uploads/2023/01/Positano-Planning-a-Trip-to-Italy-1000x533.jpg",
  },
];

export default function DestinationGrid() {
  return (
    
    <div className="container mx-auto mt-10">
     <center> <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-950">Popular Destinations</h2></center>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={destination.imgUrl}
              alt={destination.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Discount Badge */}
            {destination.discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                {destination.discount}
              </div>
            )}
            
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="text-center text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>
                <button className="bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition-colors duration-300">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
