import gaming from "@/public/images/gaming.png"
import keyboard from "@/public/images/keyboard.png"
import monitor from "@/public/images/monitor.png"
import shoes from "@/public/images/shoes.png"
import chair from "@/public/images/chair.png"
import jacketPink from "@/public/images/jacket-pink.png"
import jacketGreen from "@/public/images/jacket-Green.png"
import handbagModern from "@/public/images/handbag-modern.png"
import bookShelf from "@/public/images/book-shelf.png"
import rgbSpeaker from "@/public/images/rgb-speaker.png"

interface Product {
  productName: string;
  rating: number;
  imgUrl: string | any; // Can be string URL or imported image
  currentPrice: number;
  originalPrice: number;
  reviewCount?: number; // Optional review count
  discountPercent?: number; // Optional discount percentage
  new?: boolean; // Optional new badge
}

export const products: Product[] = [

    {
        productName: "HAVIT HV-G92 Gamepad",
        rating: 5,
        imgUrl: gaming,
        currentPrice: 120,
        originalPrice: 160,
        reviewCount: 88,
        discountPercent: 40,
        new: false
    },
    {
        productName: "AK-900 Wired Keyboard",
        rating: 4,
        imgUrl: keyboard,
        currentPrice: 960,
        originalPrice: 1160,
        reviewCount: 70,
        discountPercent: 35,
        new: false
    },
    {
        productName: "IPS LCD Gaming Monitor",
        rating: 5,
        imgUrl: monitor,
        currentPrice: 370,
        originalPrice: 400,
        reviewCount: 99,
        discountPercent: 30,
        new: false
    },
      {
        productName: "S-Series Comfort Chair",
        rating: 4.5,
        imgUrl: chair,
        currentPrice: 375,
        originalPrice: 400,
        reviewCount: 99,
        discountPercent: 25,
        new: false
    },
    {
        productName: "The north coat",
        rating: 5,
        imgUrl: jacketPink,
        currentPrice: 260,
        originalPrice: 360,
        reviewCount: 65,
        discountPercent: 30,
        new: false
    },
    {
        productName: "Gucci duffle bag",
        rating: 4.5,
        imgUrl: handbagModern,
        currentPrice: 960,
        originalPrice: 1160,
        reviewCount: 65,
        discountPercent: 30,
        new: false
    },
    {
        productName: "RGB liquid CPU Cooler",
        rating: 4.5,
        imgUrl: rgbSpeaker,
        currentPrice: 160,
        originalPrice: 170,
        reviewCount: 65,
        discountPercent: 4,
        new: false
    },
     {
        productName: "Small BookSelf",
        rating: 5,
        imgUrl: bookShelf,
        currentPrice: 360,
        originalPrice: 400,
        reviewCount: 65,
        discountPercent: 10,
        new: false
    }

  
]