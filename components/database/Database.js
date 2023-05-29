export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: 'product',
    productName: 'Female Designer Abaya',
    price: 5000,
    description:
      'Forsan Silk | Imported | Machine Wash | UNIQUE DESIGN | LONG ABAYA | PREMIUM FABRIC',
    isOff: true,
    offPercentage: 10,
    image: require('../database/images/products/abayafront1.png'),
    isAvailable: true,
    imageList: [
      require('../database/images/products/abayafront.png'),
      require('../database/images/products/abayaback.png'),
      require('../database/images/products/abayaside.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
  {
    id: 2,
    category: 'product',
    productName: 'QF Women Casual Shirt  ',
    price: 1999,
    description:
      'Pull On closure | SUPER SOFT & COMFY FEEL | RELAXED & FLATTERING | Occasion',
    isOff: false,
    image: require('../database/images/products/S0.png'),
    isAvailable: true,
    imageList: [
      require('../database/images/products/S0.png'),
      require('../database/images/products/S1.png'),
      require('../database/images/products/S3.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
  {
    id: 3,
    category: 'accessory',
    productName: 'Arabic Thobe and Keffiyeh',
    price: 1999,
    description:
      '100% Polyester | Imported | Button closure | Free Keffiyeh | A breathable and fashion kaftan thobe',
    isOff: true,
    offPercentage: 18,
    image: require('../database/images/accessories/HF.png'),
    isAvailable: true,
    imageList: [
      require('../database/images/accessories/HF.png'),
      require('../database/images/accessories/HB.png'),
      require('../database/images/accessories/HS.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
  {
    id: 4,
    category: 'accessory',
    productName: 'Mens Beach Tank Top',
    price: 1599,
    description:
      'High-quality polyester fabric breathable, stretchy | Whether you are hitting the gym, going for a hike',
    isOff: false,
    image: require('../database/images/accessories/SLF.png'),
    isAvailable: true,
    imageList: [
      require('../database/images/accessories/SLF.png'),
      require('../database/images/accessories/SLB.png'),
      require('../database/images/accessories/SLS.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
  {
    id: 5,
    category: 'accessory',
    productName: 'Mens Short Sleeve Graphic T-shirt',
    price: 1499,
    description:
      'Durable and resistant | Sporty short-sleeve design keeps you feeling cool and comfortable',
    isOff: false,
    image: require('../database/images/accessories/SMF.png'),
    isAvailable: false,
    imageList: [
      require('../database/images/accessories/SMF.png'),
      require('../database/images/accessories/SMB.png'),
      require('../database/images/accessories/SMS.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
  {
    id: 6,
    category: 'accessory',
    productName: 'Mens Lightweight Bomber Jacket',
    price: 5999,
    description:
      'Stylish jacket,great for daily life,sportwear,work.Suitable for fall,spring and winter',
    isOff: false,
    image: require('../database/images/accessories/SWF.png'),
    isAvailable: true,
    imageList: [
      require('../database/images/accessories/SWF.png'),
      require('../database/images/accessories/SWB.png'),
      require('../database/images/accessories/SWS.png'),
    ],
    ModelLink: "https://sumervibesdraft1.netlify.app/",
  },
];
