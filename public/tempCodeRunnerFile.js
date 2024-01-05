const newImageLinks = [
  "https://i.ibb.co/8Bbq7JP/1.png",
  "https://i.ibb.co/pP0fHr6/2.png",
  "https://i.ibb.co/sj8z8y6/3.png",
  "https://i.ibb.co/8PnS3XT/5.png",
  "https://i.ibb.co/WtN1XNb/6.png",
  "https://i.ibb.co/5hFXLw5/7.png",
  "https://i.ibb.co/mHKyM04/8.png",
  "https://i.ibb.co/VYZgVn1/9.png",
  "https://i.ibb.co/C70GRjw/10.png",
  "https://i.ibb.co/Q6G0zw8/12.png",
  "https://i.ibb.co/ftRVGpj/13.png",
  "https://i.ibb.co/MSTBbYw/15.png",
  "https://i.ibb.co/2nhLSXN/17.png",
  "https://i.ibb.co/WcY0R1k/19.png",
  "https://i.ibb.co/ftqh4MG/amethyst-refinement-main1-768x768.png",
  "https://i.ibb.co/Z2bTH98/bracelets-category.png",
  "https://i.ibb.co/mtWmDRS/crystal-elegance-main1-1-650x650.png",
  "https://i.ibb.co/cYF0XtW/crystal-harmony-main1-768x768.png",
  "https://i.ibb.co/F8zGH9m/diamond-shine-main1-768x768.png",
  "https://i.ibb.co/sJ8gx1X/earrings-category.png",
  "https://i.ibb.co/t8QLfBL/eternal-love-main1-768x768.png",
  "https://i.ibb.co/t2Mp4zn/Frame-1000001387-1-scaled-1.png",
  "https://i.ibb.co/db0nYZN/golden-curls1-450x450.png",
  "https://i.ibb.co/VWG8gK3/goldplated-crystal-flower-leverback1-650x650.png",
  "https://i.ibb.co/vBwycNd/h1-baner-1-480x327.png",
  "https://i.ibb.co/yQRk0BG/h1-baner-2-480x326.png",
  "https://i.ibb.co/pfgLggv/h1-cat-product-image-2-400x487.png",
  "https://i.ibb.co/crJKMSP/h1-shop-list-img-2-768x792.png",
  "https://i.ibb.co/tLGbWZc/h1-shop-list-img-3-768x792.png",
  "https://i.ibb.co/Lr4f6PS/h1-shop-list-img-5-768x790.png",
  "https://i.ibb.co/xF9rDN8/h1-slider-list-i-5-768x744.png",
  "https://i.ibb.co/K7G5TQ0/h3-shop-list-new4-291x300.png",
  "https://i.ibb.co/M14jFJ3/h3-shop-list-new4-768x792.png",
  "https://i.ibb.co/zF21f2t/instagram-gallery-img-2-768x804.png",
  "https://i.ibb.co/B6Vz5X3/instagram-gallery-img-3-768x806.png",
  "https://i.ibb.co/87LJLP7/instagram-gallery-img-4-768x804.png",
  "https://i.ibb.co/TYgR1NS/instagram-gallery-img-6-768x804.png",
  "https://i.ibb.co/QCpJshN/jewelry-scale1.png",
  "https://i.ibb.co/gM8KGmf/luxurious-star-main1-768x768.png",
  "https://i.ibb.co/qBfhBkc/mother-of-pearl-chara-main1-650x650.png",
  "https://i.ibb.co/hLR7SH5/necklaces-category-1.png",
  "https://i.ibb.co/PrvvjBc/pendants-category.png",
  "https://i.ibb.co/8P7sx2v/rhodolite-garnet-and-diamond-earrings1-768x768.png",
  "https://i.ibb.co/FncDLvt/rings-standing.png",
  "https://i.ibb.co/jz9BnMc/slider-list-img-new-2.png",
  "https://i.ibb.co/sKd58y3/slider-list-img-new-5.png",
  "https://i.ibb.co/VYYGhsm/slider-list-img-new-6.png",
  "https://i.ibb.co/fqmX79r/slider-list-img-new-7.png",
  "https://i.ibb.co/Qbm7wb0/slider-list-img-new-9.png",
  "https://i.ibb.co/ZVPFxZ8/slider-list-img-new-9-300x291.png",
  "https://i.ibb.co/V98fL7d/slider-list-img-new-10.png",
  "https://i.ibb.co/QY8k0zc/Sparkling-Waterfall1-768x768.png",
];

const oldObjs = [
  {
    img: "https://i.ibb.co/SfZh3YB/h1-shop-list-img-5-768x790.jpg",
    name: "Elegant Diamond Necklace",
    category: "Necklace",
    price: 2499.99,
    review: [
      {
        reviewerName: "Alice Johnson",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4.5,
        reviewDate: "2023-05-15",
      },
      {
        reviewerName: "David Smith",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
        reviewDate: "2023-08-22",
      },
    ],
  },
  {
    img: "https://i.ibb.co/5vLHXY3/h1-slider-list-i-5-768x744.jpg",
    name: "Radiant Starburst Gold Ring",
    category: "Gold Rings",
    price: 899.99,
    review: [
      {
        reviewerName: "Sophia Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-10-03",
      },
      {
        reviewerName: "Daniel White",
        reviewerImg: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
      },
    ],
  },
  {
    img: "https://i.ibb.co/DzpMy43/h3-shop-list-new4-291x300.jpg",
    name: "Diamond Elegance Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Olivia Taylor",
        reviewerImg: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 5,
        reviewDate: "2023-07-27",
      },
      {
        reviewerName: "Mason Hall",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
      },
    ],
  },
  {
    img: "https://i.ibb.co/ZHHqpj3/h1-shop-list-img-3-768x792.jpg",
    name: "Gold Plated Charm Bracelet",
    category: "Bracelets",
    price: 499.99,
    review: [
      {
        reviewerName: "Emma Williams",
        reviewerImg: "https://randomuser.me/api/portraits/women/75.jpg",
        rating: 4,
        reviewDate: "2023-11-10",
      },
      {
        reviewerName: "Chris Anderson",
        reviewerImg: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 3.5,
        reviewDate: "2024-01-02",
      },
    ],
  },
  {
    img: "https://i.ibb.co/SfZh3YB/h1-shop-list-img-5-768x790.jpg",
    name: "Elegant Diamond Necklace",
    category: "Necklace",
    price: 2499.99,
    review: [
      {
        reviewerName: "Alice Johnson",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4.5,
        reviewDate: "2023-05-15",
      },
      {
        reviewerName: "David Smith",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 5,
        reviewDate: "2023-08-22",
      },
    ],
  },
  {
    img: "https://i.ibb.co/5vLHXY3/h1-slider-list-i-5-768x744.jpg",
    name: "Radiant Starburst Gold Ring",
    category: "Gold Rings",
    price: 899.99,
    review: [
      {
        reviewerName: "Sophia Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-10-03",
      },
      {
        reviewerName: "Daniel White",
        reviewerImg: "https://randomuser.me/api/portraits/men/85.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
      },
    ],
  },
  {
    img: "https://i.ibb.co/DzpMy43/h3-shop-list-new4-291x300.jpg",
    name: "Diamond Elegance Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Olivia Taylor",
        reviewerImg: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 5,
        reviewDate: "2023-07-27",
      },
      {
        reviewerName: "Mason Hall",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
      },
    ],
  },
  {
    img: "https://i.ibb.co/xFjbCXT/h3-shop-list-new4-768x792.jpg",
    name: "Crystal Harmony Earrings",
    category: "Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Isabella Brown",
        reviewerImg: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 4,
        reviewDate: "2023-09-14",
      },
      {
        reviewerName: "Ethan Clark",
        reviewerImg: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 5,
        reviewDate: "2023-12-30",
      },
    ],
  },
  {
    img: "https://i.ibb.co/KXVyCsK/instagram-gallery-img-2-768x804.jpg",
    name: "Chic Diamond Choker",
    category: "Choker",
    price: 1199.99,
    review: [
      {
        reviewerName: "Ava Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/women/14.jpg",
        rating: 4.5,
        reviewDate: "2023-08-01",
      },
      {
        reviewerName: "Logan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        reviewDate: "2023-10-25",
      },
    ],
  },
  {
    img: "https://i.ibb.co/V3yhZbP/instagram-gallery-img-3-768x806.jpg",
    name: "Diamond Sparkle Gold Ring",
    category: "Diamond Rings",
    price: 1899.99,
    review: [
      {
        reviewerName: "Harper Hernandez",
        reviewerImg: "https://randomuser.me/api/portraits/women/46.jpg",
        rating: 4.5,
        reviewDate: "2023-06-12",
      },
      {
        reviewerName: "Leo Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/94.jpg",
        rating: 4,
        reviewDate: "2023-09-29",
      },
    ],
  },
  {
    img: "https://i.ibb.co/Nm7Sq9X/instagram-gallery-img-4-768x804.jpg",
    name: "Pearl Elegance Necklace",
    category: "Necklace",
    price: 1699.99,
    review: [
      {
        reviewerName: "Grace Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4,
        reviewDate: "2023-07-18",
      },
      {
        reviewerName: "Carter Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/28.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/6gnM3Nz/instagram-gallery-img-6-768x804.jpg",
    name: "Silver Dangle Earrings",
    category: "Earrings",
    price: 499.99,
    review: [
      {
        reviewerName: "Aria Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-09-05",
      },
      {
        reviewerName: "Gavin Hill",
        reviewerImg: "https://randomuser.me/api/portraits/men/53.jpg",
        rating: 4,
        reviewDate: "2023-12-12",
      },
    ],
  },
  {
    img: "https://i.ibb.co/8MvF59s/jewelry-scale1.png",
    name: "Classic Diamond Ring",
    category: "Diamond Rings",
    price: 1499.99,
    review: [
      {
        reviewerName: "Natalie Rodriguez",
        reviewerImg: "https://randomuser.me/api/portraits/women/89.jpg",
        rating: 5,
        reviewDate: "2023-06-28",
      },
      {
        reviewerName: "Liam Evans",
        reviewerImg: "https://randomuser.me/api/portraits/men/11.jpg",
        rating: 4.5,
        reviewDate: "2023-10-14",
      },
    ],
  },
  {
    img: "https://i.ibb.co/JtfBZXM/luxurious-star-main1-768x768.png",
    name: "Luxurious Star Pendant",
    category: "Pendants",
    price: 2199.99,
    review: [
      {
        reviewerName: "Zoe Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
      },
      {
        reviewerName: "Owen Murphy",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 5,
        reviewDate: "2023-11-22",
      },
    ],
  },
  {
    img: "https://i.ibb.co/p1cZP1N/mother-of-pearl-chara-main1-650x650.png",
    name: "Mother of Pearl Charm Bracelet",
    category: "Bracelets",
    price: 699.99,
    review: [
      {
        reviewerName: "Aiden Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4.5,
        reviewDate: "2023-09-18",
      },
      {
        reviewerName: "Victoria Perry",
        reviewerImg: "https://randomuser.me/api/portraits/men/35.jpg",
        rating: 4,
        reviewDate: "2023-12-05",
      },
    ],
  },
  {
    img: "https://i.ibb.co/BVcrxv7/necklaces-category-1.png",
    name: "Diamond Solitaire Necklace",
    category: "Necklace",
    price: 2899.99,
    review: [
      {
        reviewerName: "Eva Barnes",
        reviewerImg: "https://randomuser.me/api/portraits/women/82.jpg",
        rating: 5,
        reviewDate: "2023-07-04",
      },
      {
        reviewerName: "Miles Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 4.5,
        reviewDate: "2023-11-16",
      },
    ],
  },
  {
    img: "https://i.ibb.co/9bKHjq6/pendants-category.png",
    name: "Sapphire Drop Pendant",
    category: "Pendants",
    price: 1299.99,
    review: [
      {
        reviewerName: "Lily Howard",
        reviewerImg: "https://randomuser.me/api/portraits/women/27.jpg",
        rating: 4,
        reviewDate: "2023-08-27",
      },
      {
        reviewerName: "Samuel Young",
        reviewerImg: "https://randomuser.me/api/portraits/men/74.jpg",
        rating: 5,
        reviewDate: "2023-12-02",
      },
    ],
  },
  {
    img: "https://i.ibb.co/qpjJDxW/rhodolite-garnet-and-diamond-earrings1-768x768.png",
    name: "Rhodolite Garnet Earrings",
    category: "Diamond Earrings",
    price: 999.99,
    review: [
      {
        reviewerName: "Hannah Rivera",
        reviewerImg: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4.5,
        reviewDate: "2023-07-15",
      },
      {
        reviewerName: "Nathan Murphy",
        reviewerImg: "https://randomuser.me/api/portraits/men/17.jpg",
        rating: 4,
        reviewDate: "2023-10-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/wBdypS6/rings-standing.png",
    name: "Classic Gold Band Ring",
    category: "Rings",
    price: 699.99,
    review: [
      {
        reviewerName: "Liam Watson",
        reviewerImg: "https://randomuser.me/api/portraits/women/15.jpg",
        rating: 4.5,
        reviewDate: "2023-06-22",
      },
      {
        reviewerName: "Grace Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/41.jpg",
        rating: 5,
        reviewDate: "2023-09-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/fCwpQ6x/slider-list-img-new-2.jpg",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 3499.99,
    review: [
      {
        reviewerName: "Madison Harris",
        reviewerImg: "https://randomuser.me/api/portraits/women/69.jpg",
        rating: 4,
        reviewDate: "2023-07-12",
      },
      {
        reviewerName: "Elijah Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 4.5,
        reviewDate: "2023-11-30",
      },
    ],
  },
  {
    img: "https://i.ibb.co/kGqR5T4/slider-list-img-new-5.jpg",
    name: "Rose Gold Love Pendant",
    category: "Pendants",
    price: 899.99,
    review: [
      {
        reviewerName: "Avery Rogers",
        reviewerImg: "https://randomuser.me/api/portraits/women/49.jpg",
        rating: 5,
        reviewDate: "2023-08-17",
      },
      {
        reviewerName: "Cameron Nelson",
        reviewerImg: "https://randomuser.me/api/portraits/men/97.jpg",
        rating: 4.5,
        reviewDate: "2023-12-15",
      },
    ],
  },
  {
    img: "https://i.ibb.co/ZTg3h5z/slider-list-img-new-6.jpg",
    name: "Emerald Elegance Necklace",
    category: "Necklace",
    price: 1799.99,
    review: [
      {
        reviewerName: "Zara Martinez",
        reviewerImg: "https://randomuser.me/api/portraits/women/83.jpg",
        rating: 4,
        reviewDate: "2023-09-02",
      },
      {
        reviewerName: "Henry King",
        reviewerImg: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        reviewDate: "2023-11-20",
      },
    ],
  },
  {
    img: "https://i.ibb.co/F3x60WX/slider-list-img-new-7.jpg",
    name: "Diamond Solitaire Earrings",
    category: "Diamond Earrings",
    price: 1299.99,
    review: [
      {
        reviewerName: "Luna Adams",
        reviewerImg: "https://randomuser.me/api/portraits/women/61.jpg",
        rating: 4.5,
        reviewDate: "2023-06-30",
      },
      {
        reviewerName: "Blake Reed",
        reviewerImg: "https://randomuser.me/api/portraits/men/38.jpg",
        rating: 5,
        reviewDate: "2023-10-08",
      },
    ],
  },
  {
    img: "https://i.ibb.co/wBdypS6/rings-standing.png",
    name: "Standing Silver Rings Set",
    category: "Rings",
    price: 599.99,
    review: [
      {
        reviewerName: "Chloe Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/31.jpg",
        rating: 4,
        reviewDate: "2023-07-22",
      },
      {
        reviewerName: "Jack Parker",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 4.5,
        reviewDate: "2023-11-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/fCwpQ6x/slider-list-img-new-2.jpg",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 2999.99,
    review: [
      {
        reviewerName: "Sophie Wood",
        reviewerImg: "https://randomuser.me/api/portraits/women/77.jpg",
        rating: 5,
        reviewDate: "2023-08-05",
      },
      {
        reviewerName: "Michael Stewart",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-25",
      },
    ],
  },
  {
    img: "https://i.ibb.co/kGqR5T4/slider-list-img-new-5.jpg",
    name: "Rose Gold Love Pendant",
    category: "Pendants",
    price: 1299.99,
    review: [
      {
        reviewerName: "Avery Simmons",
        reviewerImg: "https://randomuser.me/api/portraits/women/19.jpg",
        rating: 4,
        reviewDate: "2023-06-17",
      },
      {
        reviewerName: "Cameron Edwards",
        reviewerImg: "https://randomuser.me/api/portraits/men/89.jpg",
        rating: 5,
        reviewDate: "2023-10-02",
      },
    ],
  },
  {
    img: "https://i.ibb.co/ZTg3h5z/slider-list-img-new-6.jpg",
    name: "Sapphire Dream Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Elena Green",
        reviewerImg: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4.5,
        reviewDate: "2023-08-30",
      },
      {
        reviewerName: "Tyler Morris",
        reviewerImg: "https://randomuser.me/api/portraits/men/21.jpg",
        rating: 4,
        reviewDate: "2023-12-14",
      },
    ],
  },
  {
    img: "https://i.ibb.co/F3x60WX/slider-list-img-new-7.jpg",
    name: "Vintage Diamond Choker",
    category: "Choker",
    price: 1699.99,
    review: [
      {
        reviewerName: "Maya Hughes",
        reviewerImg: "https://randomuser.me/api/portraits/women/62.jpg",
        rating: 5,
        reviewDate: "2023-07-08",
      },
      {
        reviewerName: "Justin Fisher",
        reviewerImg: "https://randomuser.me/api/portraits/men/37.jpg",
        rating: 4.5,
        reviewDate: "2023-11-20",
      },
    ],
  },
  {
    img: "https://i.ibb.co/H7JQcLF/slider-list-img-new-9-300x291.jpg",
    name: "Elegant Silver Necklace",
    category: "Necklace",
    price: 1199.99,
    review: [
      {
        reviewerName: "Sophia Adams",
        reviewerImg: "https://randomuser.me/api/portraits/women/58.jpg",
        rating: 4,
        reviewDate: "2023-09-12",
      },
      {
        reviewerName: "Caleb Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/74.jpg",
        rating: 5,
        reviewDate: "2023-12-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/bK3LWc8/slider-list-img-new-10.jpg",
    name: "Art Deco Diamond Bracelet",
    category: "Bracelets",
    price: 899.99,
    review: [
      {
        reviewerName: "Zoe Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/women/26.jpg",
        rating: 4.5,
        reviewDate: "2023-09-22",
      },
      {
        reviewerName: "Elijah Ward",
        reviewerImg: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 4,
        reviewDate: "2023-11-15",
      },
    ],
  },
  {
    img: "https://i.ibb.co/ZxLDqzT/Sparkling-Waterfall1-768x768.png",
    name: "Sparkling Waterfall Necklace",
    category: "Necklace",
    price: 2499.99,
    review: [
      {
        reviewerName: "Madison Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/33.jpg",
        rating: 5,
        reviewDate: "2023-08-18",
      },
      {
        reviewerName: "Connor Mitchell",
        reviewerImg: "https://randomuser.me/api/portraits/men/52.jpg",
        rating: 4.5,
        reviewDate: "2023-12-08",
      },
    ],
  },
  {
    img: "https://i.ibb.co/s1rFBCb/1.jpg",
    name: "Modern Gold Plated Ring",
    category: "Gold Rings",
    price: 749.99,
    review: [
      {
        reviewerName: "Layla Cooper",
        reviewerImg: "https://randomuser.me/api/portraits/women/47.jpg",
        rating: 4,
        reviewDate: "2023-07-03",
      },
      {
        reviewerName: "Henry Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/84.jpg",
        rating: 4.5,
        reviewDate: "2023-11-26",
      },
    ],
  },
  {
    img: "https://i.ibb.co/SrPRGBj/2.jpg",
    name: "Emerald Cut Diamond Ring",
    category: "Diamond Rings",
    price: 1799.99,
    review: [
      {
        reviewerName: "Aria Harris",
        reviewerImg: "https://randomuser.me/api/portraits/women/23.jpg",
        rating: 4,
        reviewDate: "2023-08-12",
      },
      {
        reviewerName: "Mason Scott",
        reviewerImg: "https://randomuser.me/api/portraits/men/55.jpg",
        rating: 4.5,
        reviewDate: "2023-12-03",
      },
    ],
  },
  {
    img: "https://i.ibb.co/1Zj431J/3.jpg",
    name: "Sapphire Elegance Necklace",
    category: "Necklace",
    price: 1399.99,
    review: [
      {
        reviewerName: "Olivia Martinez",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 5,
        reviewDate: "2023-09-02",
      },
      {
        reviewerName: "Liam Nelson",
        reviewerImg: "https://randomuser.me/api/portraits/men/80.jpg",
        rating: 4.5,
        reviewDate: "2023-11-18",
      },
    ],
  },
  {
    img: "https://i.ibb.co/cYB8sqm/5.jpg",
    name: "Diamond Cascade Earrings",
    category: "Diamond Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Eva Ward",
        reviewerImg: "https://randomuser.me/api/portraits/women/16.jpg",
        rating: 4,
        reviewDate: "2023-06-24",
      },
      {
        reviewerName: "Logan Harris",
        reviewerImg: "https://randomuser.me/api/portraits/men/72.jpg",
        rating: 5,
        reviewDate: "2023-10-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/1QpYXrs/6.jpg",
    name: "Diamond Floral Choker",
    category: "Choker",
    price: 1299.99,
    review: [
      {
        reviewerName: "Natalie Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.5,
        reviewDate: "2023-08-15",
      },
      {
        reviewerName: "Ethan Carter",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        reviewDate: "2023-12-30",
      },
    ],
  },
  {
    img: "https://i.ibb.co/x22GTbn/7.jpg",
    name: "Rose Gold Infinity Bracelet",
    category: "Bracelets",
    price: 699.99,
    review: [
      {
        reviewerName: "Zoe Miller",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4,
        reviewDate: "2023-09-08",
      },
      {
        reviewerName: "Owen Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/31.jpg",
        rating: 4.5,
        reviewDate: "2023-11-24",
      },
    ],
  },
  {
    img: "https://i.ibb.co/WPCKRVs/8.jpg",
    name: "Diamond Starburst Pendant",
    category: "Pendants",
    price: 1599.99,
    review: [
      {
        reviewerName: "Sophie Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/3YzXDs4/9.jpg",
    name: "Diamond Halo Engagement Ring",
    category: "Diamond Rings",
    price: 2999.99,
    review: [
      {
        reviewerName: "Ava Brown",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-08-27",
      },
      {
        reviewerName: "Liam Turner",
        reviewerImg: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 5,
        reviewDate: "2023-10-03",
      },
    ],
  },
  {
    img: "https://i.ibb.co/9TQ5SLW/10.jpg",
    name: "Classic Diamond Stud Earrings",
    category: "Diamond Earrings",
    price: 749.99,
    review: [
      {
        reviewerName: "Harper Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/63.jpg",
        rating: 4,
        reviewDate: "2023-09-18",
      },
      {
        reviewerName: "Elijah Perry",
        reviewerImg: "https://randomuser.me/api/portraits/men/47.jpg",
        rating: 4.5,
        reviewDate: "2023-11-05",
      },
    ],
  },
  {
    img: "https://i.ibb.co/86rXb2S/12.jpg",
    name: "Vintage Diamond Ring",
    category: "Diamond Rings",
    price: 1899.99,
    review: [
      {
        reviewerName: "Lily Hernandez",
        reviewerImg: "https://randomuser.me/api/portraits/women/34.jpg",
        rating: 4.5,
        reviewDate: "2023-07-30",
      },
      {
        reviewerName: "Connor White",
        reviewerImg: "https://randomuser.me/api/portraits/men/91.jpg",
        rating: 5,
        reviewDate: "2023-11-15",
      },
    ],
  },
  {
    img: "https://i.ibb.co/82T3V6h/13.jpg",
    name: "Diamond Cascade Necklace",
    category: "Necklace",
    price: 2099.99,
    review: [
      {
        reviewerName: "Maya Lee",
        reviewerImg: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4.5,
        reviewDate: "2023-07-18",
      },
      {
        reviewerName: "Ethan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/GsghDVY/15.jpg",
    name: "Elegant Sapphire Bracelet",
    category: "Bracelets",
    price: 1199.99,
    review: [
      {
        reviewerName: "Sophia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/19.jpg",
        rating: 4,
        reviewDate: "2023-09-05",
      },
    ],
  },
  {
    img: "https://i.ibb.co/NF09vVt/17.jpg",
    name: "Ruby Halo Pendant",
    category: "Pendants",
    price: 1499.99,
    review: [
      {
        reviewerName: "Logan Carter",
        reviewerImg: "https://randomuser.me/api/portraits/women/21.jpg",
        rating: 4.5,
        reviewDate: "2023-09-05",
      },
      {
        reviewerName: "Emma Mitchell",
        reviewerImg: "https://randomuser.me/api/portraits/men/53.jpg",
        rating: 4,
        reviewDate: "2023-12-12",
      },
    ],
  },
  {
    img: "https://i.ibb.co/VpfCJh7/19.jpg",
    name: "Diamond Cross Earrings",
    category: "Diamond Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-10",
      },
      {
        reviewerName: "Zoe Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 4.5,
        reviewDate: "2023-11-22",
      },
    ],
  },
  {
    img: "https://i.ibb.co/6sTCygR/amethyst-refinement-main1-768x768.png",
    name: "Amethyst Refinement Ring",
    category: "Rings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/2vznV7B/bracelets-category.png",
    name: "Golden Charm Bracelet",
    category: "Bracelets",
    price: 899.99,
    review: [
      {
        reviewerName: "Liam Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/52.jpg",
        rating: 4,
        reviewDate: "2023-08-14",
      },
    ],
  },
  {
    img: "https://i.ibb.co/T1Jf9dN/crystal-elegance-main1-1-650x650.png",
    name: "Crystal Elegance Necklace",
    category: "Necklace",
    price: 1299.99,
    review: [
      {
        reviewerName: "Eva Scott",
        reviewerImg: "https://randomuser.me/api/portraits/women/37.jpg",
        rating: 4.5,
        reviewDate: "2023-09-02",
      },
      {
        reviewerName: "Owen Carter",
        reviewerImg: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        reviewDate: "2023-12-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/h9XJ1HH/crystal-harmony-main1-768x768.png",
    name: "Crystal Harmony Ring",
    category: "Rings",
    price: 799.99,
    review: [
      {
        reviewerName: "Sophia Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/87RrHJY/diamond-shine-main1-768x768.png",
    name: "Diamond Shine Earrings",
    category: "Diamond Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-10",
      },
      {
        reviewerName: "Zoe Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/76.jpg",
        rating: 4.5,
        reviewDate: "2023-11-22",
      },
    ],
  },
  {
    img: "https://i.ibb.co/RSqRvkZ/earrings-category.png",
    name: "Sapphire Drop Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/4FsHrvZ/eternal-love-main1-768x768.png",
    name: "Eternal Love Diamond Ring",
    category: "Diamond Rings",
    price: 1499.99,
    review: [
      {
        reviewerName: "Ethan Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5,
        reviewDate: "2023-11-28",
      },
    ],
  },
  {
    img: "https://i.ibb.co/PGdwh6D/Frame-1000001387-1-scaled-1.png",
    name: "Golden Charm Frame Pendant",
    category: "Pendants",
    price: 1099.99,
    review: [
      {
        reviewerName: "Mia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4.5,
        reviewDate: "2023-08-22",
      },
      {
        reviewerName: "Elijah Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        reviewDate: "2023-12-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/1XZGH54/golden-curls1-450x450.png",
    name: "Golden Curls Necklace",
    category: "Necklace",
    price: 1099.99,
    review: [
      {
        reviewerName: "Sophia Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/56.jpg",
        rating: 4.5,
        reviewDate: "2023-09-08",
      },
    ],
  },
  {
    img: "https://i.ibb.co/mBg26PN/goldplated-crystal-flower-leverback1-650x650.png",
    name: "Gold-plated Crystal Flower Leverback Earrings",
    category: "Earrings",
    price: 899.99,
    review: [
      {
        reviewerName: "Eva Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/17.jpg",
        rating: 4,
        reviewDate: "2023-06-15",
      },
      {
        reviewerName: "Owen Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/62.jpg",
        rating: 4.5,
        reviewDate: "2023-10-01",
      },
    ],
  },
  {
    img: "https://i.ibb.co/9TqQ32S/h1-baner-1-480x327.jpg",
    name: "Diamond Halo Bracelet",
    category: "Bracelets",
    price: 999.99,
    review: [
      {
        reviewerName: "Aiden Robinson",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 5,
        reviewDate: "2023-08-28",
      },
      {
        reviewerName: "Ella Adams",
        reviewerImg: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 4.5,
        reviewDate: "2023-12-18",
      },
    ],
  },
  {
    img: "https://i.ibb.co/PWQWzrY/h1-baner-2-480x326.jpg",
    name: "Golden Charm Pendant",
    category: "Pendants",
    price: 1099.99,
    review: [
      {
        reviewerName: "Mia Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/64.jpg",
        rating: 4.5,
        reviewDate: "2023-08-22",
      },
      {
        reviewerName: "Elijah Baker",
        reviewerImg: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        reviewDate: "2023-12-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/GPtNYb3/h1-cat-product-image-2-400x487.jpg",
    name: "Elegant Diamond Necklace",
    category: "Necklace",
    price: 1499.99,
    review: [
      {
        reviewerName: "Aria Turner",
        reviewerImg: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 4,
        reviewDate: "2023-09-18",
      },
    ],
  },
  {
    img: "https://i.ibb.co/TkJ3RM4/h1-shop-list-img-2-768x792.jpg",
    name: "Sapphire Drop Earrings",
    category: "Diamond Earrings",
    price: 799.99,
    review: [
      {
        reviewerName: "Mia Foster",
        reviewerImg: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 4,
        reviewDate: "2023-08-10",
      },
    ],
  },
  {
    img: "https://i.ibb.co/ZHHqpj3/h1-shop-list-img-3-768x792.jpg",
    name: "Crystal Elegance Ring",
    category: "Rings",
    price: 899.99,
    review: [
      {
        reviewerName: "Sophia Evans",
        reviewerImg: "https://randomuser.me/api/portraits/women/78.jpg",
        rating: 5,
        reviewDate: "2023-07-13",
      },
      {
        reviewerName: "Noah Wilson",
        reviewerImg: "https://randomuser.me/api/portraits/men/64.jpg",
        rating: 4.5,
        reviewDate: "2023-12-28",
      },
    ],
  },
];

const allnew = oldObjs.map((element, idx) => {
  element["img"] = newImageLinks[idx];
  return element;
});

console.log(allnew);
