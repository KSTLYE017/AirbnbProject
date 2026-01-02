const samplelistings = [
  {
    title: "Mountain View Retreat",
    description: "A peaceful getaway surrounded by scenic mountains.",
    price: 4500,
    Location: "Manali, Himachal Pradesh",
    image:{ 
      filename: "listingimage",
      url:"https://i.pinimg.com/originals/bf/af/40/bfaf4049c1fb56324b079f870ae5c67f.jpg",
    },
    country: "India"
  },
  {
    title: "Sea Breeze Villa",
    description: "Stay close to the calming blue waters.",
    price: 6200,
    Location: "Goa",
    image:{ 
      filename: "listingimage",
      url:"https://lp-cms-production.imgix.net/news/2018/01/1-Bedroom-Water-Retreat-with-Slide_Exterior-by-Mohamed-Aryf.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4",
    },
    country: "India"
  },
  {
    title: "Forest Treehouse Lodge",
    description: "A unique experience living between thick trees.",
    price: 5200,
    Location: "Kerala",
    image: {
      filename: "listingimage",
      url:"https://www.oiamare.gr/images/home/08.jpg",
    },
    country: "India"
  },
  {
    title: "Desert Safari Camp",
    description: "Beautiful tents under the starry desert sky.",
    price: 3100,
    Location: "Jaisalmer, Rajasthan",
    image: {
      filename: "listingimage",
      url:"https://hotelchantelle.com/wp-content/uploads/2023/06/how-many-7-star-hotel-in-world.jpeg",
    },
    country: "India"
  },
  {
    title: "Royal Heritage Haveli",
    description: "Experience the royal lifestyle of Rajasthan.",
    price: 8000,
    Location: "Jaipur, Rajasthan",
    image: { 
      filename: "listingimage",
      url:"https://images.rosewoodhotels.com/is/image/rwhg/three-bedroom-villa-plunge-pool",
    },
    country: "India"
  },
  {
    title: "Lake Serenity House",
    description: "Perfect lakeside views for relaxation.",
    price: 7000,
    Location: "Nainital, Uttarakhand",
    image: {
      filename: "listingimage",
      url: "https://dubaitickets.tours/wp-content/uploads/2023/03/burj-khalifa.jpg",
    },
    country: "India"
  },
  {
    title: "City Lights Apartment",
    description: "Modern apartment with skyline views.",
    price: 5500,
    Location: "Mumbai, Maharashtra",
    image: { 
      filename: "listingimage",
      url:"https://luxuriate.life/wp-content/uploads/2021/03/Burj-Al-Arab-Jumeirah-Aerial-at-Sunrise-1-1170x657.jpg",
    },
    country: "India"
  },
  {
    title: "Himalayan Snow Cabin",
    description: "Cosy cabin surrounded by snow-capped peaks.",
    price: 9000,
    Location: "Shimla, Himachal Pradesh",
    image:{
      filename: "listingimage",
      url: "https://i.pinimg.com/originals/20/07/d6/2007d6dd4ca8f4b527d19c7baaefab7e.jpg",
    },
    country: "India"
  },
  {
    title: "Jungle Adventure Cottage",
    description: "Stay deep within wildlife territory.",
    price: 4300,
    Location: "Jim Corbett, Uttarakhand",
    image: {
      filename: "listingimage",
      url:"https://besthotelshome.com/wp-content/uploads/2020/03/Titanic-Beach-Lara-best-luxury-hotels-in-Antalya.jpg",
    },
    country: "India"
  },
  {
    title: "Golden Beach Resort",
    description: "A relaxing stay with golden sand views.",
    price: 6400,
    Location: "Puri, Odisha",
    image:{
      filename: "listingimage",
      url: "https://cdn.mos.cms.futurecdn.net/sC2QxUicXK6WzJWkTmSfbG.jpg",
    },
    country: "India"
  },
  {
    title: "Luxury Houseboat",
    description: "Experience Kerala backwaters in luxury.",
    price: 9500,
    Location: "Alleppey, Kerala",
    image: {
      filename: "listingimage",
      url:"https://wallpapercave.com/wp/wp2406659.jpg",
    },
    country: "India"
  },
  {
    title: "Hilltop Tent Stay",
    description: "Adventure camping on high hills.",
    price: 2500,
    Location: "Matheran, Maharashtra",
    image: {
      filename: "listingimage",
      url:"https://elysian.com/uploads/news/618008c5e2057the-best-areas-to-buy-villas-in-jumeirah-islands.jpg",
    },
    country: "India"
  },
  {
    title: "Heritage Fort Palace",
    description: "A stay inside a historic Indian fort.",
    price: 12000,
    Location: "Udaipur, Rajasthan",
    image: {
      filename: "listingimage",
      url:"https://eskipaper.com/images/free-nature-photos-2.jpg",
    },
    country: "India"
  },
  {
    title: "Countryside Farmstay",
    description: "Chill in open green fields with fresh air.",
    price: 2800,
    Location: "Pune, Maharashtra",
    image: {
      filename: "listingimage",
      url:"https://img.freepik.com/premium-photo/minimalist-interior-villa-bali-generated-by-ai_551405-2145.jpg?w=2000",
    },
    country: "India"
  },
  {
    title: "Riverfront Bamboo Cottage",
    description: "Stay in bamboo huts beside the river.",
    price: 3700,
    Location: "Rishikesh, Uttarakhand",
    image: {
      filename: "listingimage",
      url:"https://4.bp.blogspot.com/-8vRT3ILpMpQ/URoF53WpFvI/AAAAAAAAApE/3l0Rjh1dGV4/s1600/Maldives+Island+Top+Resorts.jpg",
    },
    country: "India"
  },
  {
    title: "Island Escape Resort",
    description: "Your perfect tropical escape.",
    price: 7800,
    Location: "Andaman & Nicobar Islands",
    image: {
      filename: "listingimage",
      url:"https://do84cgvgcm805.cloudfront.net/article/362/1200/421f39e719bf40f72acaa80ba2b2ab90f1a114941e7c91ea7d651be25f26dd33.jpg",
    },
    country: "India"
  },
  {
    title: "Tea Garden Residence",
    description: "Wake up to lush tea plantations.",
    price: 5000,
    Location: "Munnar, Kerala",
    image: {
      filename: "listingimage",
      url:"https://byunique.com/gallery/?album=1168&width=1024",
    },
    country: "India"
  },
  {
    title: "Modern Studio Flat",
    description: "Minimal studio with modern interiors.",
    price: 4000,
    Location: "Bangalore, Karnataka",
    image: {
      filename: "listingimage",
      url:"https://dubainewsweek.com/wp-content/uploads/2023/10/Most-expensive-villa-in-Abu-Dhabi.webp",
    },
    country: "India"
  },
  {
    title: "Backyard Cottage",
    description: "Small cosy cottage perfect for solo stay.",
    price: 1800,
    Location: "Nagpur, Maharashtra",
    image: {
      filename: "listingimage",
      url:"https://media.cntraveler.com/photos/53e2e649dddaa35c30f6375f/16:9/w_1280,c_limit/norwegian-getaway-exterior.jpg",
    },
    country: "India"
  },
  {
    title: "Starry Night Hut",
    description: "Enjoy clear sky and star views.",
    price: 3200,
    Location: "Kutch, Gujarat",
    image: {
      filename: "listingimage",
      url:"https://i.ytimg.com/vi/QtRckTEQhxY/maxresdefault.jpg",
    },
    country: "India"
  },
  {
    title: "Luxury Sky Villa",
    description: "Top-floor villa with stunning city view.",
    price: 15500,
    Location: "Hyderabad, Telangana",
    image: {
      filename: "listingimage",
      url:"https://images.mansionglobal.com/im-522669/social",
    },
    country: "India"
  },
  {
    title: "Peaceful Countryside Cottage",
    description: "Escape to calm and greenery.",
    price: 2600,
    Location: "Coorg, Karnataka",
    image: {
      filename: "listingimage",
      url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9e/a3/b4/roof-top-infinity-pool.jpg?w=700&h=-1&s=1",
    },
    country: "India"
  },
  {
    title: "Modern Family Villa",
    description: "Large villa perfect for families.",
    price: 8500,
    Location: "Surat, Gujarat",
    image: {
      filename: "listingimage",
      url:"https://www.globalodyssey.co/hotels-in-goa/images/park_hyatt_hotel_big_img1_goa.jpg",
    },
    country: "India"
  },
  {
    title: "Cosy Coastal Hut",
    description: "Small hut near the beach shore.",
    price: 2300,
    Location: "Diu",
    image: {
      filename: "listingimage",
      url:"https://i.pinimg.com/originals/cd/bd/9c/cdbd9c927b4c79996acca1c51fbcb4a0.jpg",
    },
    country: "India"
  },
  {
    title: "Vintage Colonial Home",
    description: "Classic colonial architecture.",
    price: 6700,
    Location: "Kolkata, West Bengal",
    image: {
      filename: "listingimage",
      url:"https://cdn.sandals.com/sandals/v12/images/general/all-inclusive/over-the-water/water-villas.jpg",
    },
    country: "India"
  },
  {
    title: "Riverbend Resort",
    description: "Relax by the flowing water.",
    price: 4600,
    Location: "Haridwar, Uttarakhand",
    image: {
      filename: "listingimage",
      url:"https://wallpapercave.com/wp/wp6405920.jpg",
    },
    country: "India"
  },
  {
    title: "Hillside Eco Resort",
    description: "Eco-friendly stay in the mountains.",
    price: 7300,
    Location: "Darjeeling, West Bengal",
    image: {
      filename: "listingimage",
      url:"https://www.globalodyssey.co/hotels-in-goa/images/park_hyatt_hotel_big_img1_goa.jpg",
    },
    country: "India"
  },
  {
    title: "Cliff Edge Cabin",
    description: "Cabin located on a stunning cliff edge.",
    price: 9600,
    Location: "Meghalaya",
    image: {
      filename: "listingimage",
      url:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/1d/0c/3f/vivanta-meghalaya-shillong.jpg?w=700&h=-1&s=1",
    },
    country: "India"
  },
  {
    title: "Snow Peak Lodge",
    description: "Stay surrounded by snow peaks.",
    price: 9900,
    Location: "Gulmarg, Kashmir",
    image: {
      filename: "listingimage",
      url:"https://i.pinimg.com/originals/d5/d8/ea/d5d8eade145cb40d83370541b1a33d17.jpg",
    },
    country: "India"
  },
  {
    title: "Sunrise Cliff Resort",
    description: "Watch the sunrise from the cliff side.",
    price: 8200,
    Location: "Visakhapatnam, Andhra Pradesh",
    image: {
      filename: "listingimage",
      url:"https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/209/2020/06/06203905/Underwater-bedroom-Maldives-768x512.png",
    },
    country: "India"
  }
];

module.exports={data : samplelistings};