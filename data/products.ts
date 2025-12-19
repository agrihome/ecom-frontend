import gaming from "@/public/images/gaming.png"
import keyboard from "@/public/images/keyboard.png"
import monitor from "@/public/images/monitor.png"
import shoes from "@/public/images/shoes.png"
import chair from "@/public/images/chair.png"
import jacketPink from "@/public/images/jacket-pink.png"
import jacketGreen from "@/public/images/jacket-green.png"
import handbagModern from "@/public/images/handbag-modern.png"
import bookShelf from "@/public/images/book-shelf.png"
import rgbSpeaker from "@/public/images/rgb-speaker.png"
import cesar from "@/public/images/cesar.png"
import camera from "@/public/images/camera.png"
import laptop from "@/public/images/laptop.png"
import creame from "@/public/images/creame.png"
import benz from "@/public/images/benz.png"
import gaming2 from "@/public/images/gaming2.png"

interface Product {
  id: string; // Added ID
  productName: string;
  rating: number;
  imgUrl: string | any;
  currentPrice: number;
  originalPrice: number;
  reviewCount?: number;
  discountPercent?: number;
  new?: boolean;
}

export const products: Product[] = [
    {
        id: "havit-hv-g92-gamepad",
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
        id: "ak-900-wired-keyboard",
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
        id: "ips-lcd-gaming-monitor",
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
        id: "s-series-comfort-chair",
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
        id: "the-north-coat",
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
        id: "gucci-duffle-bag",
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
        id: "rgb-liquid-cpu-cooler",
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
        id: "small-bookshelf",
        productName: "Small BookSelf",
        rating: 5,
        imgUrl: bookShelf,
        currentPrice: 360,
        originalPrice: 400,
        reviewCount: 65,
        discountPercent: 10,
        new: false
    },
    {
        id: "canon-eos-dslr-camera",
        productName: "CANON EOS DSLR Camera",
        rating: 4,
        imgUrl: camera,
        currentPrice: 360,
        originalPrice: 400,
        reviewCount: 95,
        discountPercent: 10,
        new: false
    },
    {
        id: "asus-fhd-gaming-laptop",
        productName: "ASUS FHD Gaming Laptop",
        rating: 5,
        imgUrl: laptop,
        currentPrice: 700,
        originalPrice: 800,
        reviewCount: 325,
        discountPercent: 20,
        new: false
    },
    {
        id: "kids-electric-car",
        productName: "Kids Electric Car",
        rating: 5,
        imgUrl: benz,
        currentPrice: 960,
        originalPrice: 1160,
        reviewCount: 65,
        discountPercent: 65,
        new: true  
    },
    {
        id: "jr-zoom-soccer-cleats",
        productName: "Jr. Zoom Soccer Cleats",
        rating: 4.5,
        imgUrl: shoes,
        currentPrice: 1160,
        originalPrice: 1260,
        reviewCount: 85,
        discountPercent: 10,
        new: false
    },
     {
        id: "quilted-satin-jacket",
        productName: "Quilted Satin Jacket",
        rating: 4.5,
        imgUrl: jacketGreen,
        currentPrice: 200,
        originalPrice: 250,
        reviewCount: 95,
        discountPercent: 20,
        new: false
    }
]