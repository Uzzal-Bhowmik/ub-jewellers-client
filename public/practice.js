const oldArr = [
  {
    img: "https://i.ibb.co/8Bbq7JP/1.png",
    name: "Elegant Diamond Earring",
    category: "Earrings",
    newArrival: true,
    badge: "HOT",
    price: 2499.99,
    review: [
      {
        reviewerName: "Alice Johnson",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4.5,
        reviewDate: "2023-05-15",
        id: 0,
      },
      {
        reviewerName: "David Smith",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
        reviewDate: "2023-08-22",
        id: 1,
      },
    ],
    id: 0,
    details: {
      description:
        "Sparkling diamonds delicately set in polished metal, these earrings exude timeless elegance. Perfect for day or night, they add a touch of sophistication to any ensemble.",
      advantages: [
        "Crafted with genuine diamonds for brilliance and sparkle.",
        "Versatile design complements both formal and casual attire.",
        "Comfortable and secure for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/pP0fHr6/2.png",
    name: "Radiant Starburst Pendant",
    category: "Pendants",
    newArrival: true,
    price: 899.99,
    discountPrice: 799.99,
    discountPercentage: 11.12,
    review: [
      {
        reviewerName: "Sophia Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-10-03",
        id: 0,
      },
      {
        reviewerName: "Daniel White",
        reviewerImg: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
        id: 1,
      },
    ],
    id: 1,
    details: {
      description:
        "A starburst of dazzling stones captures the eye in this eye-catching pendant. Symbolizing hope and guidance, it makes a stunning statement piece.",
      advantages: [
        "Multi-faceted stones create a dynamic play of light and color.",
        "Unique design stands out and sparks conversation.",
        "Available in various stone options to suit your personal style.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/sj8z8y6/3.png",
    name: "Diamond Elegance Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Olivia Taylor",
        reviewerImg: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 5,
        reviewDate: "2023-07-27",
        id: 0,
      },
      {
        reviewerName: "Mason Hall",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
        id: 1,
      },
    ],
    id: 2,
    details: {
      description:
        "A single, sparkling diamond takes center stage in this minimalist pendant. The epitome of understated luxury, it adds a touch of class to any neckline.",
      advantages: [
        "Single diamond emphasizes quality and sophistication.",
        "Classic design never goes out of style.",
        "Pairs effortlessly with layered necklaces or worn alone.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/TYgR1NS/instagram-gallery-img-6-768x804.png",
    name: "Gold Plated Charm Bracelet",
    category: "Bracelets",
    price: 499.99,
    review: [
      {
        reviewerName: "Emma Williams",
        reviewerImg: "https://randomuser.me/api/portraits/women/75.jpg",
        rating: 4,
        reviewDate: "2023-11-10",
        id: 0,
      },
      {
        reviewerName: "Chris Anderson",
        reviewerImg: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 3.5,
        reviewDate: "2024-01-02",
        id: 1,
      },
    ],
    id: 3,
    details: {
      description:
        "Delicate charms dangle from a gleaming gold-plated chain, creating a playful and personalized bracelet. Layer it with other bracelets or wear it solo for a touch of charm.",
      advantages: [
        "Gold plating adds a touch of luxury at an affordable price.",
        "Interchangeable charms allow for customization and storytelling.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/8PnS3XT/5.png",
    name: "Elegant Diamond Necklace",
    category: "Necklace",
    price: 2499.99,
    review: [
      {
        reviewerName: "Alice Johnson",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4.5,
        reviewDate: "2023-05-15",
        id: 0,
      },
      {
        reviewerName: "David Smith",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
        reviewDate: "2023-08-22",
        id: 1,
      },
    ],
    id: 4,
    details: {
      description:
        "A string of sparkling diamonds gracefully adorns the neck in this timeless necklace. It's a symbol of everlasting elegance and sophistication, perfect for special occasions.",
      advantages: [
        "Genuine diamonds offer unmatched brilliance and fire.",
        "Classic design complements any neckline and style.",
        "Makes a memorable gift for a loved one.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/WtN1XNb/6.png",
    name: "Radiant Starburst Gold Ring",
    category: "Gold Rings",
    newArrival: true,
    price: 899.99,
    review: [
      {
        reviewerName: "Sophia Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-10-03",
        id: 0,
      },
      {
        reviewerName: "Daniel White",
        reviewerImg: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
        id: 1,
      },
    ],
    id: 5,
    details: {
      description:
        "A dazzling burst of stones set in polished gold makes this ring a statement piece. Perfect for adding glamour to any outfit, it exudes confidence and individuality.",
      advantages: [
        "Bold design makes a lasting impression.",
        "Available in various metals and stones to suit your taste.",
        "Comfortable fit for everyday wear.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/5hFXLw5/7.png",
    name: "Diamond Elegance Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Olivia Taylor",
        reviewerImg: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 5,
        reviewDate: "2023-07-27",
        id: 0,
      },
      {
        reviewerName: "Mason Hall",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
        id: 1,
      },
    ],
    id: 6,
    details: {
      description:
        "A single, sparkling diamond takes center stage in this minimalist pendant. The epitome of understated luxury, it adds a touch of class to any neckline.",
      advantages: [
        "Single diamond emphasizes quality and sophistication.",
        "Classic design never goes out of style.",
        "Pairs effortlessly with layered necklaces or worn alone.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/sJ8gx1X/earrings-category.png",
    name: "Crystal Harmony Earrings",
    category: "Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Isabella Brown",
        reviewerImg: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 4,
        reviewDate: "2023-09-14",
        id: 0,
      },
      {
        reviewerName: "Ethan Clark",
        reviewerImg: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 5,
        reviewDate: "2023-12-30",
        id: 1,
      },
    ],
    id: 7,
    details: {
      description:
        "Shimmering crystals catch the light and create a sense of ethereal beauty in these earrings. Perfect for adding a touch of magic to any outfit, they inspire feelings of peace and serenity.",
      advantages: [
        "Crystals offer an alternative to diamonds with unique light play.",
        "Lightweight and comfortable for all-day wear.",
        "Available in various crystal colors to match your mood.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/mHKyM04/8.png",
    name: "Chic Diamond Choker",
    category: "Choker",
    newArrival: true,
    price: 1199.99,
    discountPrice: 899.99,
    discountPercentage: 25,
    review: [
      {
        reviewerName: "Ava Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/women/14.jpg",
        rating: 4.5,
        reviewDate: "2023-08-01",
        id: 0,
      },
      {
        reviewerName: "Logan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        reviewDate: "2023-10-25",
        id: 1,
      },
    ],
    id: 8,
    details: {
      description:
        "A close-fitting band of sparkling diamonds adds a touch of edgy glamour to the neckline. This statement piece is sure to turn heads and make a lasting impression.",
      advantages: [
        "Trendy choker style adds a modern twist to classic diamonds.",
        "Makes a bold statement and draws attention.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/sKd58y3/slider-list-img-new-5.png",
    name: "Diamond Sparkle Gold Ring",
    category: "Diamond Rings",
    price: 1899.99,
    review: [
      {
        reviewerName: "Harper Hernandez",
        reviewerImg: "https://randomuser.me/api/portraits/women/46.jpg",
        rating: 4.5,
        reviewDate: "2023-06-12",
        id: 0,
      },
      {
        reviewerName: "Leo Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/94.jpg",
        rating: 4,
        reviewDate: "2023-09-29",
        id: 1,
      },
    ],
    id: 9,
    details: {
      description:
        "A single row of pave diamonds encircles the band of this ring, creating a mesmerizing display of sparkle. Perfect for adding a touch of everyday luxury, it's a versatile piece for any occasion.",
      advantages: [
        "Pave diamonds offer maximum sparkle and brilliance.",
        "Sleek and sophisticated design complements any style.",
        "Comfortable and versatile for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/VYZgVn1/9.png",
    name: "Pearl Elegance Necklace",
    category: "Necklace",
    newArrival: true,
    price: 1699.99,
    review: [
      {
        reviewerName: "Grace Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4,
        reviewDate: "2023-07-18",
        id: 0,
      },
      {
        reviewerName: "Carter Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
        id: 1,
      },
    ],
    id: 10,
    details: {
      description:
        "Classic pearls strung on a delicate chain create a timeless necklace that exudes sophistication and grace. Perfect for adding a touch of elegance to any outfit, it's a versatile piece for day or night.",
      advantages: [
        "Pearls offer a timeless and sophisticated look.",
        "Versatile design pairs well with both formal and casual attire.",
        "Available in various pearl sizes and lengths to suit your preference.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/C70GRjw/10.png",
    name: "Silver Dangle Earrings",
    category: "Earrings",
    price: 499.99,
    review: [
      {
        reviewerName: "Aria Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-09-05",
        id: 0,
      },
      {
        reviewerName: "Gavin Hill",
        reviewerImg: "https://randomuser.me/api/portraits/men/53.jpg",
        rating: 4,
        reviewDate: "2023-12-12",
        id: 1,
      },
    ],
    id: 11,
    details: {
      description:
        "Delicate chains adorned with shimmering pendants create a playful and eye-catching look in these earrings. Perfect for adding a touch of movement and personality, they're a great everyday accessory.",
      advantages: [
        "Silver offers a cool and contemporary aesthetic.",
        "Lightweight and comfortable for all-day wear.",
        "Available in various pendant styles to suit your taste.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/Q6G0zw8/12.png",
    name: "Classic Diamond Ring",
    category: "Diamond Rings",
    price: 1499.99,
    review: [
      {
        reviewerName: "Natalie Rodriguez",
        reviewerImg: "https://randomuser.me/api/portraits/women/89.jpg",
        rating: 5,
        reviewDate: "2023-06-28",
        id: 0,
      },
      {
        reviewerName: "Liam Evans",
        reviewerImg: "https://randomuser.me/api/portraits/men/11.jpg",
        rating: 4.5,
        reviewDate: "2023-10-14",
        id: 1,
      },
    ],
    id: 12,
    details: {
      description:
        "A single, brilliant diamond takes center stage in this solitaire ring. The epitome of timeless elegance, it's a symbol of love and commitment that never goes out of style.",
      advantages: [
        "Single diamond symbolizes enduring love and commitment.",
        "Classic design transcends trends and remains forever stylish.",
        "Makes a perfect engagement ring or special occasion gift.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/ftRVGpj/13.png",
    name: "Luxurious Star Pendant",
    category: "Pendants",
    price: 2199.99,
    review: [
      {
        reviewerName: "Zoe Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
        id: 0,
      },
      {
        reviewerName: "Owen Murphy",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        reviewDate: "2023-11-22",
        id: 1,
      },
    ],
    id: 13,
    details: {
      description:
        "A cascade of sparkling stones forms a dazzling star in this pendant, symbolizing hope, guidance, and achievement. It's a statement piece that adds instant glamour to any outfit.",
      advantages: [
        "Luxurious design exudes confidence and individuality.",
        "Multi-stone construction creates a dynamic play of light and color.",
        "Available in various stone options and sizes to suit your style.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/QCpJshN/jewelry-scale1.png",
    name: "Mother of Pearl Charm Bracelet",
    category: "Bracelets",
    price: 699.99,
    review: [
      {
        reviewerName: "Aiden Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4.5,
        reviewDate: "2023-09-18",
        id: 0,
      },
      {
        reviewerName: "Victoria Perry",
        reviewerImg: "https://randomuser.me/api/portraits/men/35.jpg",
        rating: 4,
        reviewDate: "2023-12-05",
        id: 1,
      },
    ],
    id: 14,
    details: {
      description:
        "Iridescent mother-of-pearl charms dangle from a delicate chain, creating a unique and eye-catching bracelet. Perfect for adding a touch of organic beauty and personal style, it's a conversation starter on any wrist.",
      advantages: [
        "Mother-of-pearl offers a unique and shimmering appearance.",
        "Interchangeable charms allow for customization and storytelling.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/MSTBbYw/15.png",
    name: "Diamond Solitaire Necklace",
    category: "Necklace",
    price: 2899.99,
    review: [
      {
        reviewerName: "Eva Barnes",
        reviewerImg: "https://randomuser.me/api/portraits/women/82.jpg",
        rating: 5,
        reviewDate: "2023-07-04",
        id: 0,
      },
      {
        reviewerName: "Miles Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 4.5,
        reviewDate: "2023-11-16",
        id: 1,
      },
    ],
    id: 15,
    details: {
      description:
        "A single, dazzling diamond takes center stage on a delicate chain in this timeless necklace. Minimalist in design, it exudes an aura of understated elegance and sophistication. Perfect for everyday wear or special occasions.",
      advantages: [
        "Single diamond showcases undeniable brilliance and fire.",
        "Classic solitaire design transcends trends and always remains stylish.",
        "Versatile piece easily layers with other necklaces or worn alone.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/2nhLSXN/17.png",
    name: "Sapphire Drop Pendant",
    category: "Pendants",
    price: 1299.99,
    review: [
      {
        reviewerName: "Lily Howard",
        reviewerImg: "https://randomuser.me/api/portraits/women/27.jpg",
        rating: 4,
        reviewDate: "2023-08-27",
        id: 0,
      },
      {
        reviewerName: "Samuel Young",
        reviewerImg: "https://randomuser.me/api/portraits/men/74.jpg",
        rating: 5,
        reviewDate: "2023-12-02",
        id: 1,
      },
    ],
    id: 16,
    details: {
      description:
        "A vibrant sapphire gem suspended from a delicate chain creates a captivating pendant. The deep blue of the sapphire symbolizes wisdom, loyalty, and serenity. A beautiful statement piece for adding a touch of color and elegance to any outfit.",
      advantages: [
        "Dazzling sapphire captivates the eye with its vibrant hue.",
        "Elegant drop design adds movement and sophistication.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/WcY0R1k/19.png",
    name: "Rhodolite Garnet Earrings",
    category: "Diamond Earrings",
    newArrival: true,
    price: 999.99,
    review: [
      {
        reviewerName: "Hannah Rivera",
        reviewerImg: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4.5,
        reviewDate: "2023-07-15",
        id: 0,
      },
      {
        reviewerName: "Nathan Murphy",
        reviewerImg: "https://randomuser.me/api/portraits/men/17.jpg",
        rating: 4,
        reviewDate: "2023-10-28",
        id: 1,
      },
    ],
    id: 17,
    details: {
      description:
        "Sparkling rhodolite garnets dangle from delicate hooks in these earrings. The unique pink-purple hue of these gems adds a touch of individuality and romance. Perfect for everyday wear or a special occasion.",
      advantages: [
        "Rhodolite garnets offer a unique and eye-catching color.",
        "Versatile design complements both casual and formal attire.",
        "Lightweight and comfortable for all-day wear.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/ftqh4MG/amethyst-refinement-main1-768x768.png",
    name: "Classic Gold Band Ring",
    category: "Rings",
    price: 699.99,
    review: [
      {
        reviewerName: "Liam Watson",
        reviewerImg: "https://randomuser.me/api/portraits/women/15.jpg",
        rating: 4.5,
        reviewDate: "2023-06-22",
        id: 0,
      },
      {
        reviewerName: "Grace Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
        reviewDate: "2023-09-10",
        id: 1,
      },
    ],
    id: 18,
    details: {
      description:
        "A simple, polished gold band forms this timeless ring. The epitome of understated elegance, it's a symbol of commitment and enduring love. Perfect for everyday wear or as a wedding band.",
      advantages: [
        "Classic gold band never goes out of style.",
        "Simple design complements any style and personality.",
        "Available in various gold tones to suit your preference.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/Z2bTH98/bracelets-category.png",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 3499.99,
    review: [
      {
        reviewerName: "Madison Harris",
        reviewerImg: "https://randomuser.me/api/portraits/women/69.jpg",
        rating: 4,
        reviewDate: "2023-07-12",
        id: 0,
      },
      {
        reviewerName: "Elijah Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 4.5,
        reviewDate: "2023-11-30",
        id: 1,
      },
    ],
    id: 19,
    details: {
      description:
        "A sparkling diamond surrounded by a ring of smaller diamonds creates a dazzling halo effect in this exquisite engagement ring. It symbolizes eternal love and commitment, making it a perfect choice for a special proposal.",
      advantages: [
        "Halo design enhances the central diamond's brilliance.",
        "Classic symbol of love and commitment.",
        "Available in various diamond sizes and settings to personalize your choice.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/mtWmDRS/crystal-elegance-main1-1-650x650.png",
    name: "Rose Gold Love Pendant",
    category: "Pendants",
    price: 899.99,
    review: [
      {
        reviewerName: "Avery Rogers",
        reviewerImg: "https://randomuser.me/api/portraits/women/49.jpg",
        rating: 5,
        reviewDate: "2023-08-17",
        id: 0,
      },
      {
        reviewerName: "Cameron Nelson",
        reviewerImg: "https://randomuser.me/api/portraits/men/97.jpg",
        rating: 4.5,
        reviewDate: "2023-12-15",
        id: 1,
      },
    ],
    id: 20,
    details: {
      description:
        "The word love delicately inscribed in flowing script on a rose gold pendant creates a romantic and meaningful statement piece. Perfect for expressing your affection for yourself or someone special.",
      advantages: [
        "Unique inscription speaks volumes without words.",
        "Warm rose gold adds a touch of femininity and elegance.",
        "Perfect gift for a loved one or a reminder for yourself.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/cYF0XtW/crystal-harmony-main1-768x768.png",
    name: "Emerald Elegance Necklace",
    category: "Necklace",
    price: 1799.99,
    review: [
      {
        reviewerName: "Zara Martinez",
        reviewerImg: "https://randomuser.me/api/portraits/women/83.jpg",
        rating: 4,
        reviewDate: "2023-09-02",
        id: 0,
      },
      {
        reviewerName: "Henry King",
        reviewerImg: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        reviewDate: "2023-11-20",
        id: 1,
      },
    ],
    id: 21,
    details: {
      description:
        "A radiant emerald gemstone takes center stage on a delicate chain in this necklace. The vibrant green of the emerald symbolizes growth, prosperity, and new beginnings. A stunning statement piece for adding a touch of color and luxury to any outfit.",
      advantages: [
        "Dazzling emerald captures the eye with its vibrant green hue.",
        "Elegant design exudes sophistication and luxury.",
        "Available in various emerald sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/F8zGH9m/diamond-shine-main1-768x768.png",
    name: "Diamond Solitaire Earrings",
    category: "Diamond Earrings",
    price: 1299.99,
    review: [
      {
        reviewerName: "Luna Adams",
        reviewerImg: "https://randomuser.me/api/portraits/women/61.jpg",
        rating: 4.5,
        reviewDate: "2023-06-30",
        id: 0,
      },
      {
        reviewerName: "Blake Reed",
        reviewerImg: "https://randomuser.me/api/portraits/men/38.jpg",
        rating: 5,
        reviewDate: "2023-10-08",
        id: 1,
      },
    ],
    id: 22,
    details: {
      description:
        "Two sparkling diamonds stud delicate posts in these classic earrings. The timeless design never goes out of style, making them a perfect everyday accessory or a versatile addition to a formal ensemble.",
      advantages: [
        "Diamonds offer unmatched brilliance and sparkle.",
        "Classic stud design complements any style and occasion.",
        "Comfortable and secure for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/sJ8gx1X/earrings-category.png",
    name: "Standing Silver Rings Set",
    category: "Rings",
    price: 599.99,
    featured: true,
    review: [
      {
        reviewerName: "Chloe Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/31.jpg",
        rating: 4,
        reviewDate: "2023-07-22",
        id: 0,
      },
      {
        reviewerName: "Jack Parker",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 4.5,
        reviewDate: "2023-11-10",
        id: 1,
      },
    ],
    id: 23,
    details: {
      description:
        "A trio of stacked silver rings creates a modern and edgy look. Each ring features a unique design, from geometric textures to delicate engravings. Perfect for layering or wearing individually, this set adds a touch of personality to any outfit.",
      advantages: [
        "Stacked design adds a trendy and contemporary feel.",
        "Versatile pieces can be worn together or separately.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/t8QLfBL/eternal-love-main1-768x768.png",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 2999.99,
    review: [
      {
        reviewerName: "Sophie Wood",
        reviewerImg: "https://randomuser.me/api/portraits/women/77.jpg",
        rating: 5,
        reviewDate: "2023-08-05",
        id: 0,
      },
      {
        reviewerName: "Michael Stewart",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-25",
        id: 1,
      },
    ],
    id: 24,
    details: {
      description:
        "A sparkling diamond surrounded by a ring of smaller diamonds creates a dazzling halo effect in this exquisite engagement ring. It symbolizes eternal love and commitment, making it a perfect choice for a special proposal.",
      advantages: [
        "Halo design enhances the central diamond's brilliance.",
        "Classic symbol of love and commitment.",
        "Available in various diamond sizes and settings to personalize your choice.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/t2Mp4zn/Frame-1000001387-1-scaled-1.png",
    name: "Rose Gold Love Pendant",
    category: "Pendants",
    price: 1299.99,
    review: [
      {
        reviewerName: "Avery Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/women/19.jpg",
        rating: 4,
        reviewDate: "2023-06-17",
        id: 0,
      },
      {
        reviewerName: "Cameron Edwards",
        reviewerImg: "https://randomuser.me/api/portraits/men/89.jpg",
        rating: 5,
        reviewDate: "2023-10-02",
        id: 1,
      },
    ],
    id: 25,
    details: {
      description:
        "The word love delicately inscribed in flowing script on a rose gold pendant creates a romantic and meaningful statement piece. Perfect for expressing your affection for yourself or someone special.",
      advantages: [
        "Unique inscription speaks volumes without words.",
        "Warm rose gold adds a touch of femininity and elegance.",
        "Perfect gift for a loved one or a reminder for yourself.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/db0nYZN/golden-curls1-450x450.png",
    name: "Sapphire Dream Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Elena Green",
        reviewerImg: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4.5,
        reviewDate: "2023-08-30",
        id: 0,
      },
      {
        reviewerName: "Tyler Morris",
        reviewerImg: "https://randomuser.me/api/portraits/men/21.jpg",
        rating: 4,
        reviewDate: "2023-12-14",
        id: 1,
      },
    ],
    id: 26,
    details: {
      description:
        "Dazzling sapphires dangle from delicate chains in these earrings, creating a dreamy and ethereal look. The vibrant blue of the sapphires symbolizes wisdom, truth, and royalty. Perfect for adding a touch of color and magic to any outfit.",
      advantages: [
        "Sparkling sapphires capture the eye with their mesmerizing hue.",
        "Delicate design adds a touch of femininity and grace.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/VWG8gK3/goldplated-crystal-flower-leverback1-650x650.png",
    name: "Vintage Diamond Choker",
    category: "Choker",
    price: 1699.99,
    review: [
      {
        reviewerName: "Maya Hughes",
        reviewerImg: "https://randomuser.me/api/portraits/women/62.jpg",
        rating: 5,
        reviewDate: "2023-07-08",
        id: 0,
      },
      {
        reviewerName: "Justin Fisher",
        reviewerImg: "https://randomuser.me/api/portraits/men/37.jpg",
        rating: 4.5,
        reviewDate: "2023-11-20",
        id: 1,
      },
    ],
    id: 27,
    details: {
      description:
        "A close-fitting band of sparkling diamonds set in intricate vintage patterns creates a statement piece that exudes timeless elegance. This choker is sure to turn heads and make a lasting impression.",
      advantages: [
        "Vintage design adds a touch of history and sophistication.",
        "Sparkling diamonds offer unmatched brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your style.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/vBwycNd/h1-baner-1-480x327.png",
    name: "Elegant Silver Necklace",
    category: "Necklace",
    price: 1199.99,
    featured: true,
    review: [
      {
        reviewerName: "Sophia Adams",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-09-12",
        id: 0,
      },
      {
        reviewerName: "Caleb Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/74.jpg",
        rating: 5,
        reviewDate: "2023-12-28",
        id: 1,
      },
    ],
    id: 28,
    details: {
      description:
        "A delicate chain adorned with a simple pendant creates a timeless and elegant necklace. This versatile piece can be dressed up or down, making it perfect for any occasion.",
      advantages: [
        "Classic design never goes out of style.",
        "Versatile piece complements any outfit and style.",
        "Lightweight and comfortable for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/yQRk0BG/h1-baner-2-480x326.png",
    name: "Art Deco Diamond Bracelet",
    category: "Bracelets",
    price: 899.99,
    review: [
      {
        reviewerName: "Zoe Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/women/26.jpg",
        rating: 4.5,
        reviewDate: "2023-09-22",
        id: 0,
      },
      {
        reviewerName: "Elijah Ward",
        reviewerImg: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 4,
        reviewDate: "2023-11-15",
        id: 1,
      },
    ],
    id: 29,
    details: {
      description:
        "Geometric patterns and sparkling diamonds come together in this Art Deco-inspired bracelet. The bold design makes a statement while remaining timeless and sophisticated. Perfect for adding a touch of vintage glamour to any outfit.",
      advantages: [
        "Unique Art Deco design stands out from the crowd.",
        "Sparkling diamonds add a touch of luxury and elegance.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/pfgLggv/h1-cat-product-image-2-400x487.png",
    name: "Sparkling Waterfall Necklace",
    category: "Necklace",
    price: 2499.99,
    review: [
      {
        reviewerName: "Madison Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        reviewDate: "2023-08-18",
        id: 0,
      },
      {
        reviewerName: "Connor Mitchell",
        reviewerImg: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 4.5,
        reviewDate: "2023-12-08",
        id: 1,
      },
    ],
    id: 30,
    details: {
      description:
        "A cascade of sparkling diamonds tumbles down a delicate chain, creating a mesmerizing waterfall effect. This statement piece is sure to turn heads and make a lasting impression.",
      advantages: [
        "Unique waterfall design creates a dynamic and eye-catching look.",
        "Sparkling diamonds offer unmatched brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your style.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/crJKMSP/h1-shop-list-img-2-768x792.png",
    name: "Modern Gold Plated Ring",
    category: "Gold Rings",
    price: 749.99,
    review: [
      {
        reviewerName: "Layla Cooper",
        reviewerImg: "https://randomuser.me/api/portraits/women/47.jpg",
        rating: 4,
        reviewDate: "2023-07-03",
        id: 0,
      },
      {
        reviewerName: "Henry Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/84.jpg",
        rating: 4.5,
        reviewDate: "2023-11-26",
        id: 1,
      },
    ],
    id: 31,
    details: {
      description:
        "A sleek and modern design graces this gold-plated ring. The polished finish adds a touch of sophistication, while the simple lines make it a versatile piece for everyday wear.",
      advantages: [
        "Modern design complements contemporary styles.",
        "Gold plating offers a touch of luxury at an affordable price.",
        "Comfortable and versatile for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/tLGbWZc/h1-shop-list-img-3-768x792.png",
    name: "Emerald Cut Diamond Ring",
    category: "Diamond Rings",
    price: 1799.99,
    review: [
      {
        reviewerName: "Aria Harris",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4,
        reviewDate: "2023-08-12",
        id: 0,
      },
      {
        reviewerName: "Mason Scott",
        reviewerImg: "https://randomuser.me/api/portraits/men/55.jpg",
        rating: 4.5,
        reviewDate: "2023-12-03",
        id: 1,
      },
    ],
    id: 32,
    details: {
      description:
        "A rectangular emerald-cut diamond takes center stage in this elegant ring. The classic silhouette exudes timeless sophistication, making it a perfect choice for any occasion.",
      advantages: [
        "Emerald cut diamond offers a unique and sophisticated look.",
        "Classic design never goes out of style.",
        "Available in various diamond sizes and settings to personalize your choice.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/Lr4f6PS/h1-shop-list-img-5-768x790.png",
    name: "Sapphire Elegance Necklace",
    category: "Necklace",
    price: 1399.99,
    review: [
      {
        reviewerName: "Olivia Martinez",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 5,
        reviewDate: "2023-09-02",
        id: 0,
      },
      {
        reviewerName: "Liam Nelson",
        reviewerImg: "https://randomuser.me/api/portraits/men/80.jpg",
        rating: 4.5,
        reviewDate: "2023-11-18",
        id: 1,
      },
    ],
    id: 33,
    details: {
      description:
        "A string of vibrant sapphires adorns a delicate chain in this necklace. The rich blue hue of the sapphires symbolizes wisdom, loyalty, and trust. This versatile piece can be dressed up or down, making it perfect for any occasion.",
      advantages: [
        "Dazzling sapphires capture the eye with their captivating color.",
        "Classic design remains stylish and timeless.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/xF9rDN8/h1-slider-list-i-5-768x744.png",
    name: "Diamond Cascade Earrings",
    category: "Diamond Earrings",
    featured: true,
    price: 899.99,
    review: [
      {
        reviewerName: "Eva Ward",
        reviewerImg: "https://randomuser.me/api/portraits/women/16.jpg",
        rating: 4,
        reviewDate: "2023-06-24",
        id: 0,
      },
      {
        reviewerName: "Logan Harris",
        reviewerImg: "https://randomuser.me/api/portraits/men/72.jpg",
        rating: 5,
        reviewDate: "2023-10-10",
        id: 1,
      },
    ],
    id: 34,
    details: {
      description:
        "Sparkling diamonds cascade down delicate chains in these earrings, creating a dazzling and glamorous look. Perfect for adding a touch of luxury and movement to any outfit.",
      advantages: [
        "Unique cascade design offers a dynamic and eye-catching effect.",
        "Sparkling diamonds provide unmatched brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your choice.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/K7G5TQ0/h3-shop-list-new4-291x300.png",
    name: "Diamond Floral Choker",
    category: "Choker",
    price: 1299.99,
    review: [
      {
        reviewerName: "Natalie Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.5,
        reviewDate: "2023-08-15",
        id: 0,
      },
      {
        reviewerName: "Ethan Carter",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        reviewDate: "2023-12-30",
        id: 1,
      },
    ],
    id: 35,
    details: {
      description:
        "A close-fitting band adorned with delicate diamond flowers creates a unique and romantic choker. This statement piece is sure to turn heads and make a lasting impression.",
      advantages: [
        "Floral design adds a touch of femininity and sweetness.",
        "Sparkling diamonds offer a touch of luxury and elegance.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/M14jFJ3/h3-shop-list-new4-768x792.png",
    name: "Rose Gold Infinity Bracelet",
    category: "Bracelets",
    price: 699.99,
    review: [
      {
        reviewerName: "Zoe Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4,
        reviewDate: "2023-09-08",
        id: 0,
      },
      {
        reviewerName: "Owen Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 4.5,
        reviewDate: "2023-11-24",
        id: 1,
      },
    ],
    id: 36,
    details: {
      description:
        "A delicate rose gold chain intertwines in an infinity symbol, adorned with sparkling accents. This bracelet symbolizes everlasting love and connection, making it a perfect gift for someone special or a sentimental piece for yourself.",
      advantages: [
        "Infinity symbol represents eternal love and commitment.",
        "Warm rose gold adds a touch of femininity and grace.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/zF21f2t/instagram-gallery-img-2-768x804.png",
    name: "Diamond Starburst Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Sophie Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
        id: 0,
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
        id: 1,
      },
    ],
    id: 37,
    details: {
      description:
        "A radiant burst of sparkling diamonds forms a dazzling star in this pendant. The star symbolizes hope, guidance, and achievement. This statement piece adds instant glamour to any outfit.",
      advantages: [
        "Starburst design offers a radiant and eye-catching look.",
        "Sparkling diamonds provide unmatched brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your style.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/B6Vz5X3/instagram-gallery-img-3-768x806.png",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 2999.99,
    featured: true,
    review: [
      {
        reviewerName: "Ava Brown",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-08-27",
        id: 0,
      },
      {
        reviewerName: "Liam Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 5,
        reviewDate: "2023-10-03",
        id: 1,
      },
    ],
    id: 38,
    details: {
      description:
        "A sparkling diamond surrounded by a ring of smaller diamonds creates a dazzling halo effect in this exquisite engagement ring. It symbolizes eternal love and commitment, making it a perfect choice for a special proposal.",
      advantages: [
        "Halo design enhances the central diamond's brilliance.",
        "Classic symbol of love and commitment.",
        "Available in various diamond sizes and settings to personalize your choice.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/87LJLP7/instagram-gallery-img-4-768x804.png",
    name: "Classic Diamond Stud Earrings",
    category: "Diamond Earrings",
    price: 749.99,
    review: [
      {
        reviewerName: "Harper Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 4,
        reviewDate: "2023-09-18",
        id: 0,
      },
      {
        reviewerName: "Elijah Perry",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
        id: 1,
      },
    ],
    id: 39,
    details: {
      description:
        "Two single, sparkling diamonds stud delicate posts in these classic earrings. The timeless design never goes out of style, making them a perfect everyday accessory or a versatile addition to a formal ensemble.",
      advantages: [
        "Diamonds offer unmatched brilliance and sparkle.",
        "Classic stud design complements any style and occasion.",
        "Comfortable and secure for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/TYgR1NS/instagram-gallery-img-6-768x804.png",
    name: "Vintage Diamond Ring",
    category: "Diamond Rings",
    price: 1899.99,
    review: [
      {
        reviewerName: "Lily Hernandez",
        reviewerImg: "https://randomuser.me/api/portraits/women/34.jpg",
        rating: 4.5,
        reviewDate: "2023-07-30",
        id: 0,
      },
      {
        reviewerName: "Connor White",
        reviewerImg: "https://randomuser.me/api/portraits/men/91.jpg",
        rating: 5,
        reviewDate: "2023-11-15",
        id: 1,
      },
    ],
    id: 40,
    details: {
      description:
        "Sparkling diamonds set in intricate patterns reminiscent of a bygone era make this ring a timeless treasure. The vintage design exudes a touch of history and sophistication, perfect for adding a touch of elegance to any outfit.",
      advantages: [
        "Authentic vintage details offer a unique and captivating look.",
        "Sparkling diamonds provide timeless brilliance and fire.",
        "Available in various diamond sizes and cuts to personalize your style.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/ftRVGpj/13.png",
    name: "Diamond Cascade Necklace",
    category: "Necklace",
    price: 2099.99,
    review: [
      {
        reviewerName: "Maya Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4.5,
        reviewDate: "2023-07-18",
        id: 0,
      },
      {
        reviewerName: "Ethan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
        id: 1,
      },
    ],
    id: 41,
    details: {
      description:
        "A mesmerizing flow of sparkling diamonds cascades down a delicate chain in this necklace. The dynamic play of light and movement creates a statement piece that's sure to turn heads. Perfect for adding a touch of luxury and sparkle to any occasion.",
      advantages: [
        "Unique cascading design offers a dynamic and eye-catching effect.",
        "Sparkling diamonds provide captivating brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/QCpJshN/jewelry-scale1.png",
    name: "Elegant Sapphire Bracelet",
    category: "Bracelets",
    price: 1199.99,
    review: [
      {
        reviewerName: "Sophia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/19.jpg",
        rating: 4,
        reviewDate: "2023-09-05",
        id: 0,
      },
    ],
    id: 42,
    details: {
      description:
        "Dazzling sapphires of rich blue hues adorn a delicate chain in this bracelet. The classic design exudes timeless elegance and sophistication, making it a versatile piece for any occasion. The sapphires symbolize wisdom, loyalty, and trust, adding a touch of meaning to your style.",
      advantages: [
        "Vivid sapphires capture the eye with their captivating color.",
        "Classic design remains stylish and timeless.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/MSTBbYw/15.png",
    name: "Ruby Halo Pendant",
    category: "Pendants",
    price: 1499.99,
    review: [
      {
        reviewerName: "Logan Carter",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-09-05",
        id: 0,
      },
      {
        reviewerName: "Emma Mitchell",
        reviewerImg: "https://randomuser.me/api/portraits/men/53.jpg",
        rating: 4,
        reviewDate: "2023-12-12",
        id: 1,
      },
    ],
    id: 43,
    details: {
      description:
        "A fiery ruby gemstone takes center stage surrounded by a ring of sparkling diamonds in this pendant. The vibrant red of the ruby symbolizes passion, love, and energy, making it a statement piece for bold personalities. The halo of diamonds enhances the ruby's brilliance and adds a touch of luxury.",
      advantages: [
        "Dazzling ruby captures the eye with its passionate hue.",
        "Halo design enhances the ruby's brilliance and fire.",
        "Available in various ruby sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/gM8KGmf/luxurious-star-main1-768x768.png",
    name: "Diamond Cross Earrings",
    category: "Diamond Earrings",
    price: 899.99,
    discountPrice: 799.99,
    discountPercentage: 12.5,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-10",
        id: 0,
      },
      {
        reviewerName: "Zoe Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 4.5,
        reviewDate: "2023-11-22",
        id: 1,
      },
    ],
    id: 44,
    details: {
      description:
        "Delicate diamond-studded crosses dangle from elegant hooks in these earrings. The classic symbol of faith and hope combines with the timeless sparkle of diamonds, creating a versatile and meaningful piece. Perfect for everyday wear or special occasions.",
      advantages: [
        "Diamonds offer unmatched brilliance and sparkle.",
        "Classic cross symbol adds a touch of faith and hope.",
        "Lightweight and comfortable for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/qBfhBkc/mother-of-pearl-chara-main1-650x650.png",
    name: "Amethyst Refinement Ring",
    category: "Rings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
        id: 0,
      },
    ],
    id: 45,
    details: {
      description:
        "A captivating amethyst gemstone takes center stage in this elegant ring. The rich purple hue of the amethyst symbolizes wisdom, royalty, and spirituality. The classic design with clean lines enhances the beauty of the stone, making it a perfect piece for sophisticated style.",
      advantages: [
        "Dazzling amethyst captures the eye with its mesmerizing purple hue.",
        "Classic design exudes sophistication and elegance.",
        "Available in various amethyst sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/hLR7SH5/necklaces-category-1.png",
    name: "Golden Charm Bracelet",
    category: "Bracelets",
    price: 899.99,
    review: [
      {
        reviewerName: "Liam Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/52.jpg",
        rating: 4,
        reviewDate: "2023-08-14",
        id: 0,
      },
    ],
    id: 46,
    details: {
      description:
        "Playful charms dangling from a delicate gold chain create a unique and personalized bracelet. Choose from a variety of charms to tell your story or express your style. The gold adds a touch of luxury and makes this bracelet a versatile piece for any occasion.",
      advantages: [
        "Interchangeable charms allow for customization and storytelling.",
        "Warm gold adds a touch of luxury and elegance.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/PrvvjBc/pendants-category.png",
    name: "Crystal Elegance Necklace",
    category: "Necklace",
    price: 1299.99,
    review: [
      {
        reviewerName: "Eva Scott",
        reviewerImg: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.5,
        reviewDate: "2023-09-02",
        id: 0,
      },
      {
        reviewerName: "Owen Carter",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        reviewDate: "2023-12-28",
        id: 1,
      },
    ],
    id: 47,
    details: {
      description:
        "Shimmering crystals strung on a delicate chain create a timeless necklace that exudes understated elegance. The crystals offer an alternative to diamonds with their unique light play and come in a variety of colors to suit your mood and style. Perfect for adding a touch of magic to any Shimmering crystals strung on a delicate chain create a timeless necklace that exudes understated elegance. The crystals offer an alternative to diamonds with their unique light play and come in a variety of colors to suit your mood and style. Perfect for adding a touch of magic to any outfit. Whether you prefer the sparkle of clear crystals or the vibrant hues of colored ones, this necklace is sure to add a touch of personality and grace.",
      advantages: [
        "Crystal alternatives offer unique light play and color options.",
        "Timeless design complements any style and occasion.",
        "Available in various crystal colors and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/8P7sx2v/rhodolite-garnet-and-diamond-earrings1-768x768.png",
    name: "Crystal Harmony Ring",
    category: "Rings",
    price: 799.99,
    review: [
      {
        reviewerName: "Sophia Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
        id: 0,
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
        id: 1,
      },
    ],
    id: 48,
    details: {
      description:
        "A single, dazzling crystal takes center stage in this minimalist ring. The clean lines and delicate setting allow the crystal's natural beauty to shine, creating a harmonious balance. Perfect for everyday wear or a touch of subtle sparkle on special occasions.",
      advantages: [
        "Single crystal emphasizes natural beauty and light play.",
        "Minimalist design complements any style and occasion.",
        "Available in various crystal colors and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/FncDLvt/rings-standing.png",
    name: "Diamond Shine Earrings",
    category: "Diamond Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-10",
        id: 0,
      },
      {
        reviewerName: "Zoe Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 4.5,
        reviewDate: "2023-11-22",
        id: 1,
      },
    ],
    id: 49,
    details: {
      description:
        "Tiny, sparkling diamonds stud delicate posts in these classic earrings. The timeless design never goes out of style, making them a perfect everyday accessory or a versatile addition to a formal ensemble. The subtle sparkle adds a touch of elegance without being overpowering.",
      advantages: [
        "Diamonds offer a hint of sparkle for everyday wear.",
        "Classic stud design complements any style and occasion.",
        "Lightweight and comfortable for all-day wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/jz9BnMc/slider-list-img-new-2.png",
    name: "Sapphire Drop Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
        id: 0,
      },
    ],
    id: 50,
    details: {
      description:
        "Dazzling sapphires in elegant teardrop shapes dangle from delicate chains in these earrings. The vibrant blue of the sapphires symbolizes wisdom, loyalty, and trust, adding a touch of meaning to your style. The classic drop design exudes timeless elegance and makes these earrings perfect for any occasion.",
      advantages: [
        "Dazzling sapphires capture the eye with their captivating color.",
        "Classic drop design remains stylish and timeless.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/sKd58y3/slider-list-img-new-5.png",
    name: "Eternal Love Diamond Ring",
    category: "Diamond Rings",
    price: 1499.99,
    review: [
      {
        reviewerName: "Ethan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
        id: 0,
      },
    ],
    id: 51,
    details: {
      description:
        "A single, dazzling diamond sparkles at the center of two intertwined bands in this ring. The symbol of infinity encircles the diamond, representing everlasting love and commitment. This classic design with a modern twist makes it a perfect choice for an engagement ring or a symbol of enduring love.",
      advantages: [
        "Unique infinity design symbolizes everlasting love and commitment.",
        "Sparkling diamond offers unmatched brilliance and fire.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/VYYGhsm/slider-list-img-new-6.png",
    name: "Golden Charm Frame Pendant",
    category: "Pendants",
    price: 1099.99,
    review: [
      {
        reviewerName: "Mia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4.5,
        reviewDate: "2023-08-22",
        id: 0,
      },
      {
        reviewerName: "Elijah Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        reviewDate: "2023-12-10",
        id: 1,
      },
    ],
    id: 52,
    details: {
      description:
        "A delicate gold frame surrounds a space for a cherished photo or memento in this pendant. Personalize it with a picture of a loved one, a special place, or anything that holds meaning to you. The gold frame adds a touch of elegance and makes this pendant a unique and sentimental piece.",
      advantages: [
        "Personalizable with photos or mementos for a unique touch.",
        "Warm gold adds a touch of luxury and elegance.",
        "Classic design can be dressed up or down for any occasion.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/fqmX79r/slider-list-img-new-7.png",
    name: "Golden Curls Necklace",
    category: "Necklace",
    price: 1099.99,
    review: [
      {
        reviewerName: "Sophia Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4.5,
        reviewDate: "2023-09-08",
        id: 0,
      },
    ],
    id: 53,
    details: {
      description:
        "Delicate gold chains intertwine in swirling curls in this necklace. The intricate design exudes a touch of movement and femininity, making it a statement piece for any outfit. The warm gold adds a touch of luxury and elegance.",
      advantages: [
        "Unique interlaced design offers a dynamic and eye-catching look.",
        "Warm gold adds a touch of luxury and elegance.",
        "Versatile piece complements various styles and occasions.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/Qbm7wb0/slider-list-img-new-9.png",
    name: "Gold-plated Crystal Flower Leverback Earrings",
    category: "Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Eva Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/17.jpg",
        rating: 4,
        reviewDate: "2023-06-15",
        id: 0,
      },
      {
        reviewerName: "Owen Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 4.5,
        reviewDate: "2023-10-01",
        id: 1,
      },
    ],
    id: 54,
    details: {
      description:
        "Sparkling crystal flowers bloom from delicate gold-plated leverback earrings. The floral design adds a touch of femininity and sweetness, while the crystals provide a touch of sparkle. The leverback closure ensures a secure and comfortable fit.",
      advantages: [
        "Unique crystal flower design adds a touch of femininity and sweetness.",
        "Gold plating offers a touch of luxury at an affordable price.",
        "Leverback closure provides a secure and comfortable fit.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/ZVPFxZ8/slider-list-img-new-9-300x291.png",
    name: "Diamond Halo Bracelet",
    category: "Bracelets",
    price: 999.99,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-28",
        id: 0,
      },
      {
        reviewerName: "Ella Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
        id: 1,
      },
    ],
    id: 55,
    details: {
      description:
        "A row of sparkling diamonds surrounds a larger central diamond in this bracelet. The halo design enhances the brilliance and fire of the center diamond, creating a statement piece that's sure to turn heads. Perfect for adding a touch of luxury and sparkle to any occasion.",
      advantages: [
        "Halo design enhances the central diamond's brilliance and fire.",
        "Classic design remains stylish and timeless.",
        "Available in various diamond sizes and settings to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/V98fL7d/slider-list-img-new-10.png",
    name: "Golden Charm Pendant",
    category: "Pendants",
    price: 1099.99,
    review: [
      {
        reviewerName: "Mia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4.5,
        reviewDate: "2023-08-22",
        id: 0,
      },
      {
        reviewerName: "Elijah Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        reviewDate: "2023-12-10",
        id: 1,
      },
    ],
    id: 56,
    details: {
      description:
        "A single, delicate charm dangles from a fine gold chain in this pendant. Choose from a variety of charms to personalize your look and tell your story. The gold adds a touch of elegance and makes this pendant a versatile piece for any occasion.",
      advantages: [
        "Interchangeable charms allow for customization and storytelling.",
        "Warm gold adds a touch of luxury and elegance.",
        "Lightweight and comfortable for everyday wear.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/t2Mp4zn/Frame-1000001387-1-scaled-1.png",
    name: "Elegant Diamond Necklace",
    category: "Necklace",
    price: 1499.99,
    review: [
      {
        reviewerName: "Aria Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4,
        reviewDate: "2023-09-18",
        id: 0,
      },
    ],
    id: 57,
    details: {
      description:
        "A string of sparkling diamonds gracefully adorns the neck in this timeless necklace. It's a symbol of everlasting elegance and sophistication, perfect for special occasions.",
      advantages: [
        "Genuine diamonds offer unmatched brilliance and fire.",
        "Classic design complements any neckline and style.",
        "Makes a memorable gift for a loved one.",
      ],
    },
    flashSale: true,
  },
  {
    img: "https://i.ibb.co/QY8k0zc/Sparkling-Waterfall1-768x768.png",
    name: "Sapphire Drop Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
        id: 0,
      },
    ],
    id: 58,
    details: {
      description:
        "Dazzling sapphires in elegant teardrop shapes dangle from delicate chains in these earrings. The vibrant blue of the sapphires symbolizes wisdom, loyalty, and trust, adding a touch of meaning to your style. The classic drop design exudes timeless elegance and makes these earrings perfect for any occasion.",
      advantages: [
        "Dazzling sapphires capture the eye with their captivating color.",
        "Classic drop design remains stylish and timeless.",
        "Available in various sapphire sizes and cuts to personalize your look.",
      ],
    },
  },
  {
    img: "https://i.ibb.co/Lr4f6PS/h1-shop-list-img-5-768x790.png",
    name: "Crystal Elegance Ring",
    category: "Rings",
    price: 899.99,
    review: [
      {
        reviewerName: "Sophia Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
        id: 0,
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
        id: 1,
      },
    ],
    id: 59,
    details: {
      description:
        "A single, dazzling crystal takes center stage in this minimalist ring. The clean lines and delicate setting allow the crystal's natural beauty to shine, creating a touch of understated elegance. Perfect for everyday wear or a touch of subtle sparkle on special occasions.",
      advantages: [
        "Single crystal emphasizes natural beauty and light play.",
        "Minimalist design complements any style and occasion.",
        "Available in various crystal colors and cuts to personalize your look.",
      ],
    },
  },
];

const reviews = [
  {
    id: 0,
    title: "Absolutely Stunning!",
    desc: "I recently purchased this beautiful necklace, and it exceeded my expectations. The craftsmanship and attention to detail are impeccable. I've received numerous compliments, and I couldn't be happier with my purchase.",
  },
  {
    id: 1,
    title: "Impressive Craftsmanship",
    desc: "The earrings I bought are a true work of art. The gold-plated crystal flowers add a touch of elegance, and the attention to detail is commendable. I highly recommend these to anyone looking for a unique and stylish accessory.",
  },
  {
    id: 2,
    title: "Exquisite Beauty",
    desc: "I bought a ring from this collection, and it's an absolute showstopper. The design is unique, and the quality is exceptional. I'm delighted with my purchase!",
  },
  {
    id: 3,
    title: "Simple Elegance",
    desc: "The necklace I received is simple yet elegant. It goes well with both casual and formal outfits. The packaging was impressive, and the delivery was prompt. Highly recommended!",
  },
  {
    id: 4,
    title: "Dazzling Diamonds",
    desc: "These earrings are a must-have for any jewelry lover. The diamonds sparkle beautifully, and the setting is perfect. I couldn't be happier with my choice.",
  },
  {
    id: 5,
    title: "Chic and Trendy",
    desc: "I purchased a bracelet, and it's the perfect accessory for any occasion. The design is chic and trendy, and the clasp is secure. I've already received many compliments.",
  },
  {
    id: 6,
    title: "Unique Design",
    desc: "The pendant I bought has a unique and eye-catching design. The quality is outstanding, and the chain is sturdy. I'm thrilled with my new piece of jewelry.",
  },
  {
    id: 7,
    title: "High-Quality Materials",
    desc: "The materials used in the making of these earrings are of the highest quality. They are comfortable to wear and have a timeless appeal. A great addition to my jewelry collection.",
  },
  {
    id: 8,
    title: "Gorgeous Craftsmanship",
    desc: "I can't get over the gorgeous craftsmanship of the ring I purchased. The intricate details are breathtaking, and the overall design is simply stunning. A true work of art.",
  },
  {
    id: 9,
    title: "Perfect Gift",
    desc: "I bought a necklace as a gift, and it was a hit! The recipient was thrilled with the design, and the packaging added a touch of luxury. I'll definitely be shopping here again.",
  },
  {
    id: 10,
    title: "Classic Elegance",
    desc: "The bracelet I ordered exudes classic elegance. It's well-made, comfortable to wear, and goes well with both casual and formal attire. I'm extremely pleased with my purchase.",
  },
  {
    id: 11,
    title: "Timeless Beauty",
    desc: "The necklace I received is a timeless piece of beauty. The design is classic, and the quality is exceptional. I feel like I made an investment in a piece that will be treasured for years to come.",
  },
  {
    id: 12,
    title: "Modern Elegance",
    desc: "The earrings I purchased are a perfect blend of modern design and classic elegance. The silver detailing is exquisite, and they add a touch of sophistication to any outfit.",
  },
  {
    id: 13,
    title: "Delicate Beauty",
    desc: "The delicate design of the pendant I bought caught my eye, and I'm delighted with my choice. It's a versatile piece that can be worn daily or for special occasions.",
  },
  {
    id: 14,
    title: "Luxurious Feel",
    desc: "I treated myself to a luxurious bracelet, and the feel of it on my wrist is amazing. The attention to detail and craftsmanship are evident. It's become my go-to accessory.",
  },
  {
    id: 15,
    title: "Radiant Glow",
    desc: "The necklace I received has a radiant glow that enhances my overall look. The gemstones are of high quality, and the design is simply breathtaking. A definite must-have!",
  },
  {
    id: 16,
    title: "Versatile Charm",
    desc: "I love the versatility of the ring I purchased. It can be worn casually or paired with formal attire. The design is charming, and I've received many compliments on its unique style.",
  },
  {
    id: 17,
    title: "Effortless Elegance",
    desc: "The earrings exude effortless elegance. They are lightweight, comfortable, and the detailing is superb. I wear them with confidence, knowing they elevate my entire look.",
  },
  {
    id: 18,
    title: "Unique Statement Piece",
    desc: "The bracelet I bought is a unique statement piece. The combination of materials and design sets it apart. It's become a conversation starter, and I'm thrilled with my purchase.",
  },
  {
    id: 19,
    title: "Perfect Fit",
    desc: "I was hesitant about buying a ring online, but the sizing was perfect, and the fit is comfortable. The quality is top-notch, and I couldn't be happier with the overall experience.",
  },
  {
    id: 20,
    title: "Artistic Appeal",
    desc: "The pendant I received has an artistic appeal that resonates with my taste. The attention to detail is commendable, and it's become a cherished part of my jewelry collection.",
  },
  {
    id: 21,
    title: "Elegant Simplicity",
    desc: "I appreciate the elegant simplicity of the necklace I purchased. It's a versatile piece that can be dressed up or down. The quality is evident, and I've received many compliments.",
  },
  {
    id: 22,
    title: "Timeless Treasure",
    desc: "The bracelet I bought is a timeless treasure. The design is classic, and the quality is exceptional. It's become a staple in my jewelry collection, and I couldn't be happier.",
  },
  {
    id: 23,
    title: "Sparkling Splendor",
    desc: "The earrings I received are a sparkling splendor. The diamonds catch the light beautifully, and they add a touch of glamour to any ensemble. Truly a dazzling purchase.",
  },
  {
    id: 24,
    title: "Chic and Trendsetting",
    desc: "The ring I purchased is both chic and trendsetting. The unique design sets it apart, and I've received numerous compliments on its stylish appeal. Highly recommend for the fashion-forward!",
  },
  {
    id: 25,
    title: "Subtle Sophistication",
    desc: "The necklace I received exudes subtle sophistication. It's a delicate piece that adds a touch of class to any outfit. The craftsmanship is remarkable, and I'm very pleased with my choice.",
  },
  {
    id: 26,
    title: "Regal Elegance",
    desc: "The pendant I bought has a regal elegance that caught my eye instantly. The detailing is intricate, and the overall design is stunning. A perfect addition to my jewelry collection.",
  },
  {
    id: 27,
    title: "Incredible Craftsmanship",
    desc: "The craftsmanship of the ring I purchased is incredible. The attention to detail is superb, and the gold detailing adds a touch of luxury. I'm extremely satisfied with my purchase.",
  },
  {
    id: 28,
    title: "Eternal Beauty",
    desc: "The bracelet is an embodiment of eternal beauty. The design is timeless, and the quality is unmatched. I wear it with pride, knowing it's a piece that will never go out of style.",
  },
  {
    id: 29,
    title: "Charming Elegance",
    desc: "The earrings I received exude charming elegance. The design is delicate yet eye-catching, and the quality is exceptional. They are now my go-to choice for special occasions.",
  },
  {
    id: 30,
    title: "Modern Glamour",
    desc: "The pendant I purchased adds a touch of modern glamour to my collection. The design is chic, and the gemstones sparkle beautifully. I'm thrilled with the contemporary feel it brings.",
  },
  {
    id: 31,
    title: "Versatile Beauty",
    desc: "The necklace I received is a versatile beauty. It can be worn casually or dressed up for formal events. The quality is outstanding, and I've received compliments on its timeless design.",
  },
  {
    id: 32,
    title: "Sophisticated Simplicity",
    desc: "The earrings I purchased exhibit sophisticated simplicity. The design is minimalistic, yet the craftsmanship is outstanding. They are perfect for both everyday wear and special occasions.",
  },
  {
    id: 33,
    title: "Royal Radiance",
    desc: "The ring I bought has a royal radiance that instantly drew me in. The gemstones are vibrant, and the gold setting enhances their beauty. It's a piece fit for royalty.",
  },
  {
    id: 34,
    title: "Glamorous Grace",
    desc: "The bracelet exudes glamorous grace. The combination of materials and design creates a stunning piece that elevates any ensemble. It's a showstopper, and I'm thrilled with my purchase.",
  },
  {
    id: 35,
    title: "Dazzling Divinity",
    desc: "The pendant I received is a dazzling divinity. The intricate details and sparkling gemstones give it a divine charm. It's become a favorite in my collection.",
  },
  {
    id: 36,
    title: "Effortless Glamour",
    desc: "The necklace effortlessly brings glamour to any look. The design is timeless, and the quality is evident. I receive compliments every time I wear it, making it a worthwhile investment.",
  },
  {
    id: 37,
    title: "Chic Charm",
    desc: "The earrings I purchased have a chic charm that complements various styles. They are lightweight, comfortable, and add a touch of sophistication. A must-have for any jewelry enthusiast.",
  },
  {
    id: 38,
    title: "Regal Resplendence",
    desc: "The ring is a symbol of regal resplendence. The design is opulent, and the gemstones shine with brilliance. It's a statement piece that never fails to capture attention.",
  },
  {
    id: 39,
    title: "Elegance in Motion",
    desc: "The bracelet combines elegance with motion seamlessly. The fluid design adds a dynamic element, and the craftsmanship is impeccable. It's a unique and stylish addition to my collection.",
  },
  {
    id: 40,
    title: "Radiant Allure",
    desc: "The pendant I received has a radiant allure that captivates. The play of light on the gemstones is mesmerizing, and the overall design exudes sophistication. A splendid addition to my jewelry box.",
  },
  {
    id: 41,
    title: "Modern Opulence",
    desc: "The necklace showcases modern opulence. The design is bold and contemporary, making it a standout piece in my collection. It effortlessly adds a touch of luxury to any outfit.",
  },
  {
    id: 42,
    title: "Sublime Craftsmanship",
    desc: "The earrings exhibit sublime craftsmanship. The attention to detail and precision in design make them a true work of art. I appreciate the quality and finesse put into creating these earrings.",
  },
  {
    id: 43,
    title: "Intricate Elegance",
    desc: "The ring I purchased boasts intricate elegance. The detailed patterns and delicate craftsmanship make it a piece I treasure. It's a timeless addition to my jewelry collection.",
  },
  {
    id: 44,
    title: "Charming Sophistication",
    desc: "The bracelet exudes charming sophistication. The combination of gemstones and metals creates a harmonious blend, making it a versatile accessory. I receive compliments whenever I wear it.",
  },
  {
    id: 45,
    title: "Graceful Radiance",
    desc: "The pendant has a graceful radiance that enhances my every look. The design is classic, and the gemstones are set with precision. It's a piece that radiates beauty and elegance.",
  },
  {
    id: 46,
    title: "Trendsetting Beauty",
    desc: "The necklace is a trendsetting beauty. The contemporary design and choice of materials make it a fashionable statement piece. I love how it effortlessly elevates my style.",
  },
  {
    id: 47,
    title: "Eternal Sparkle",
    desc: "The earrings possess an eternal sparkle that catches the eye. The arrangement of gemstones and the brilliance they exude make these earrings a timeless and dazzling accessory.",
  },
  {
    id: 48,
    title: "Modern Elegance",
    desc: "The ring blends modern elegance with classic charm. The design is versatile, and the craftsmanship is top-notch. It's a ring that seamlessly transitions from day to night.",
  },
  {
    id: 49,
    title: "Timeless Appeal",
    desc: "The bracelet has a timeless appeal that transcends trends. The design is enduring, and the quality is exceptional. It's a piece that I can see myself wearing for years to come.",
  },
  {
    id: 50,
    title: "Captivating Charm",
    desc: "The pendant's captivating charm adds a touch of magic to my collection. The unique design and choice of gemstones make it a conversation starter. I'm delighted with this enchanting piece.",
  },
  {
    id: 51,
    title: "Subtle Glamour",
    desc: "The earrings exude subtle glamour, perfect for elevating everyday looks. The design is sophisticated, and the quality is exceptional. They strike the ideal balance between simplicity and style.",
  },
  {
    id: 52,
    title: "Dazzling Delight",
    desc: "The ring is a dazzling delight that brings joy with its sparkle. The gemstones are vibrant, and the craftsmanship is commendable. It's a piece that never fails to make a statement.",
  },
  {
    id: 53,
    title: "Classic Beauty",
    desc: "The bracelet radiates classic beauty. Its timeless design and quality materials make it a versatile accessory. It's a staple in my collection, adding elegance to any ensemble.",
  },
  {
    id: 54,
    title: "Intriguing Allure",
    desc: "The pendant has an intriguing allure that draws attention effortlessly. The combination of metals and gemstones creates a captivating piece. I'm enamored with its unique and artistic design.",
  },
  {
    id: 55,
    title: "Effortless Chic",
    desc: "The necklace embodies effortless chic. Its modern design complements various styles, and the quality is outstanding. It's become my go-to accessory for achieving a polished and stylish look.",
  },
  {
    id: 56,
    title: "Timeless Radiance",
    desc: "The earrings showcase timeless radiance. The arrangement of gemstones and the overall design exude a classic charm. They are the perfect blend of sophistication and beauty.",
  },
  {
    id: 57,
    title: "Dancing Fireflies Necklace",
    desc: "Tiny cubic zirconia stones cascade like twinkling fireflies in the night, adding magic to any outfit.",
  },
  {
    id: 58,
    title: "Whispers of the Ocean Bracelet",
    desc: "Woven leather bracelet with a turquoise seashell pendant evokes the tranquility of the ocean.",
  },
  {
    id: 59,
    title: "Eternal Promise Ring",
    desc: "Classic solitaire ring featuring a sparkling diamond in a delicate platinum band, a timeless symbol of love.",
  },
  {
    id: 60,
    title: "Understated Elegance Anklet",
    desc: "Delicate gold bead chain and dangling charm add a touch of understated elegance to your feet.",
  },
  {
    id: 61,
    title: "Geometric Flair Cufflinks",
    desc: "Sleek and modern cufflinks with engraved geometric patterns, perfect for the well-dressed gentleman.",
  },
  {
    id: 62,
    title: "Vintage Blooms Brooch",
    desc: "Intricately detailed brooch featuring a bouquet of colorful enameled flowers, adding vintage charm to any outfit.",
  },
  {
    id: 63,
    title: "Shimmering Pearl Hair Clip",
    desc: "A single pearl nestled among shimmering crystals, adding a touch of sparkle to any hairstyle.",
  },
  {
    id: 64,
    title: "Queen of the Night Crown",
    desc: "Dazzling crown adorned with sparkling stones, perfect for channeling your inner royalty.",
  },
  {
    id: 65,
    title: "Woodland Whisper Earrings",
    desc: "Delicate leaves and twigs crafted from silver or gold evoke a sense of peace and tranquility.",
  },
  {
    id: 66,
    title: "Tribal Treasure Pendant",
    desc: "Bold geometric shapes and vibrant colors create a fierce and fascinating statement piece.",
  },
  {
    id: 67,
    title: "Mystical Moonstone",
    desc: "Ethereal pearlescent moonstone pendant on a delicate silver chain, capturing lunar glow and adding magic.",
  },
  {
    id: 68,
    title: "Bohemian Dream",
    desc: "Vibrant mix of colorful beads and woven threads, adding a touch of free spirit to your outfit.",
  },
  {
    id: 69,
    title: "Entwined Elegance",
    desc: "Two graceful intertwined bands of gold, symbolizing enduring love and connection, perfect for any occasion.",
  },
  {
    id: 70,
    title: "Seashell Serenade",
    desc: "Delicate seashells adorn this charming anklet, whispering the ocean's melody with every step, perfect for summer.",
  },
  {
    id: 71,
    title: "Art Deco Decoy",
    desc: "Geometric patterns and sleek black and silver lines in these Art Deco-inspired cufflinks, a statement piece for timeless elegance.",
  },
  {
    id: 72,
    title: "Enchanted Forest",
    desc: "A whimsical miniature forest scene comes to life on this intricately detailed brooch, featuring tiny mushrooms, ferns, and delicate creatures.",
  },
  {
    id: 73,
    title: "Starry Night Sky",
    desc: "A cluster of sparkling crystals arranged like constellations adorns this hair pin, adding celestial elegance and letting your inner star shine.",
  },
  {
    id: 74,
    title: "Winter Wonderland",
    desc: "Delicate snowflakes and shimmering crystals dance on this enchanting winter wonderland tiara, perfect for any festive occasion.",
  },
  {
    id: 75,
    title: "Art Deco Drop",
    desc: "Emerald-cut gemstones dangle from geometric shapes in these striking Art Deco earrings, making a bold statement and turning heads.",
  },
  {
    id: 76,
    title: "Mystic Amulet",
    desc: "A carved stone imbued with ancient symbols hangs from a leather cord in this mystic amulet, adding a touch of bohemian mystery to your everyday look.",
  },
  {
    id: 77,
    title: "Sunrise Hues",
    desc: "A gradient of vibrant warm colors adorns this sleek bangle, reminiscent of a breathtaking sunrise, injecting a touch of optimism into your day.",
  },
  {
    id: 78,
    title: "Whispering Leaves",
    desc: "Delicate silver or gold leaves cascade down this necklace, evoking the gentle rustle of wind through a forest, adding a touch of nature's serenity.",
  },
  {
    id: 79,
    title: "Tribal Sun",
    desc: "A bold geometric sun pendant adorned with vibrant stones hangs from a leather cord in this tribal-inspired necklace, radiating warmth and energy.",
  },
  {
    id: 80,
    title: "Vintage Cameo",
    desc: "An intricately carved cameo set in an elegant frame graces this vintage-inspired brooch, adding a touch of timeless sophistication to your outfit.",
  },
  {
    id: 81,
    title: "Dragonfly Dance",
    desc: "Delicate dragonfly wings shimmer with crystals on this whimsical pair of earrings, adding a touch of playful magic to your look.",
  },
  {
    id: 82,
    title: "Whispering Sands",
    desc: "Delicate gold chains adorned with tiny sand dollar charms evoke the tranquility of the beach with every movement.",
  },
  {
    id: 83,
    title: "Celestial Harmony",
    desc: "A crescent moon and star pendant crafted from shimmering opal dances on a delicate silver chain, capturing the celestial dance of night.",
  },
  {
    id: 84,
    title: "Gilded Ivy",
    desc: "Intertwined gold leaves form a graceful bracelet, reminiscent of a vine climbing towards the sun, adding a touch of nature's elegance.",
  },
  {
    id: 85,
    title: "Ruby Radiance",
    desc: "A fiery ruby nestled amidst a halo of sparkling diamonds creates a statement ring, radiating passion and elegance.",
  },
  {
    id: 86,
    title: "Hidden Treasures",
    desc: "A locket pendant embellished with intricate carvings holds a secret message or tiny memento, adding a touch of personal history to any outfit.",
  },
  {
    id: 87,
    title: "Mystic Mandala",
    desc: "A mesmerizing mandala pendant etched with intricate patterns in silver or gold hangs from a black leather cord, adding a touch of bohemian intrigue.",
  },
  {
    id: 88,
    title: "Butterfly Brilliance",
    desc: "Delicate butterfly wings adorned with shimmering crystals flutter on this enchanting hair clip, adding a touch of whimsical beauty.",
  },
  {
    id: 89,
    title: "Queen of Hearts",
    desc: "A crown adorned with ruby hearts and delicate gold chains exudes playful royalty, perfect for adding a touch of fairytale magic to any occasion.",
  },
  {
    id: 90,
    title: "Woodland Whisper Ring",
    desc: "A dainty band set with a tiny moss agate stone whispers of the forest's secrets, adding a touch of nature's charm to any finger.",
  },
  {
    id: 91,
    title: "Tribal Dreamcatcher",
    desc: "Feathers and vibrant beads woven into a dreamcatcher pendant hang from a leather cord, warding off negativity and inviting peaceful dreams.",
  },
  {
    id: 92,
    title: "Victorian Elegance",
    desc: "An elaborately crafted brooch featuring a bouquet of enameled flowers and delicate pearls adds a touch of vintage grandeur to any coat or sweater.",
  },
  {
    id: 93,
    title: "Stardust Sparkle",
    desc: "A cascade of tiny silver stars shimmers on this delicate necklace, capturing the celestial magic of a starry night.",
  },
  {
    id: 94,
    title: "Sunbeam Bracelet",
    desc: "A woven leather bracelet adorned with a polished gold charm shaped like a sunbeam adds a touch of warmth and optimism to your wrists.",
  },
  {
    id: 95,
    title: "Whispers of the Sea Earrings",
    desc: "Tiny seashells adorned with sparkling crystals dangle from these delicate earrings, whispering the ocean's melody with every movement.",
  },
  {
    id: 96,
    title: "Cosmic Compass Necklace",
    desc: "A compass pendant set with a sparkling lapis lazuli stone guides the way through life's journeys, adding a touch of celestial inspiration.",
  },
  {
    id: 97,
    title: "Enchanted Forest Ring",
    desc: "A tiny carved mushroom nestled amidst a ring of emerald leaves adds a touch of whimsical woodland charm to any finger.",
  },
  {
    id: 98,
    title: "Dancing Flames Bangle",
    desc: "A sleek silver bangle twirls with delicate flames, capturing the hypnotic beauty of fire and adding a touch of dynamic elegance.",
  },
  {
    id: 99,
    title: "Celestial Owl Pendant",
    desc: "A wise owl with sparkling moonstone eyes hangs from a black leather cord, offering guidance and wisdom, adding a touch of mystical intrigue.",
  },
  {
    id: 100,
    title: "Vintage Charm Bracelet",
    desc: "A collection of mismatched vintage charms dangle from a delicate silver chain, telling stories of the past and adding a touch of sentimental charm.",
  },
  {
    id: 101,
    title: "Secret Garden Brooch",
    desc: "A hidden compartment within a blooming flower brooch holds a precious secret, adding a touch of playful mystery to any outfit.",
  },
  {
    id: 102,
    title: "Starlight Chandelier Earrings",
    desc: "Cascading crystals arranged like miniature chandeliers create a dazzling spectacle on these earrings, radiating celestial elegance.",
  },
  {
    id: 103,
    title: "Mermaid's Tears Anklet",
    desc: "Delicate pearls and iridescent beads adorn this anklet, reminiscent of shimmering seashells and mermaid treasures, adding a touch of ocean magic.",
  },
  {
    id: 104,
    title: "Dreamcatcher Tiara",
    desc: "Feathers, beads, and sparkling crystals woven into a delicate tiara capture the beauty of dreams and ward off negativity, adding a touch of ethereal magic.",
  },
  {
    id: 105,
    title: "Moonstone Mystery Ring",
    desc: "A shimmering moonstone ring with swirling patterns evokes the mystique of the night sky, adding a touch of enigmatic beauty to any hand.",
  },
  {
    id: 106,
    title: "Viking Voyage Pendant",
    desc: "A carved rune pendant hangs from a leather cord, whispering tales of ancient Norse sagas and adding a touch of rugged adventure.",
  },
  {
    id: 107,
    title: "Art Deco Fan Cufflinks",
    desc: "Geometric patterns and sleek lines in black and silver define these Art Deco-inspired cufflinks, adding a touch of timeless sophistication to any formal attire.",
  },
  {
    id: 108,
    title: "Stardust Hair Pin",
    desc: "A single teardrop-shaped amethyst shimmers like a captured star on this delicate hair pin, adding a touch of celestial elegance to any hairstyle.",
  },
  {
    id: 109,
    title: "Sunrise Necklace",
    desc: "A gradient of warm orange and yellow stones arranged like a rising sun adorns this necklace, capturing the hopeful energy of a new day.",
  },
  {
    id: 110,
    title: "Whispering Willow Bangle",
    desc: "Delicate silver leaves cascade down this bangle, reminiscent of a willow tree swaying in the breeze, adding a touch of nature's tranquility.",
  },
  {
    id: 111,
    title: "Tribal Feather Earrings",
    desc: "Vibrant feathers adorned with beads dangle from these earrings, adding a touch of bold Boho spirit and capturing the rhythm of the wind.",
  },
  {
    id: 112,
    title: "Cosmic Cat Pendant",
    desc: "A playful cat with sparkling starstone eyes hangs from a black leather cord, adding a touch of celestial mystery and feline charm.",
  },
];

for (let i = 0; i < oldArr.length; i++) {
  if (oldArr[i].review.length) {
    for (let j = 0; j < oldArr[i].review.length; j++) {
      for (let k = 0; k < reviews.length; k++) {
        if (reviews[k].title === "") {
          continue;
        }
        oldArr[i].review[j].title = reviews[k].title;
        oldArr[i].review[j].desc = reviews[k].desc;

        reviews[k].title = "";
        reviews[k].desc = "";
        break;
      }
    }
  }
}
// console.log("reviews", reviews);
console.log(JSON.stringify(oldArr));
