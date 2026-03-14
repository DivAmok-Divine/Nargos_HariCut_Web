import fadeBg from '../assets/images/service_fade_bg.png';
import beardBg from '../assets/images/service_beard_bg.png';
import hairBg from '../assets/images/service_hair_system_bg.png';
import shaveBg from '../assets/images/service_shave_bg.png';

import { 
  FadeIcon, 
  BeardIcon, 
  HairSystemIcon, 
  ShaveIcon 
} from '../components/ui/Icons';

export const servicesData = [
  {
    title: "Precision Fades",
    description: "Mastering the art of the blend. Our signature fades are sharp, seamless, and tailored to your unique head shape and growth pattern.",
    bg: fadeBg,
    icon: FadeIcon,
    alt: "Fade Icon"
  },
  {
    title: "Beard Sculpting",
    description: "From subtle to bold, we offer professional beard grooming for every style. Clean, sharp lines that define your jawline and character.",
    bg: beardBg,
    icon: BeardIcon,
    alt: "Beard Icon"
  },
  {
    title: "Hair Systems",
    description: "Non-surgical hair restoration that looks and feels 100% natural. Restore your confidence with our premium, undetectable replacements.",
    bg: hairBg,
    icon: HairSystemIcon,
    alt: "Hair Icon"
  },
  {
    title: "Hot Towel Shave",
    description: "The ultimate relaxation experience. A traditional straight-razor shave preceded by a steaming hot towel to soften and refresh.",
    bg: shaveBg,
    icon: ShaveIcon,
    alt: "Shave Icon"
  }
];

export const pricingData = [
  {
    title: "Cuts & Fades",
    services: [
      { name: "Signature Fade", price: "₵40+" },
      { name: "Sculpted Cut", price: "₵55+" },
      { name: "Line Up & Detail", price: "₵35+" },
      { name: "Junior Master Cut", price: "₵30+" }
    ]
  },
  {
    title: "Beard & Shave",
    services: [
      { name: "Elite Beard Sculpt", price: "₵35+" },
      { name: "Hot Towel Shave", price: "₵40+" },
      { name: "Mustache Detail", price: "₵20+" },
      { name: "Full Face Groom", price: "₵60+" }
    ]
  },
  {
    title: "Restoration",
    services: [
      { name: "System Install", price: "₵200+" },
      { name: "System Maintenance", price: "₵95+" },
      { name: "Color Enhancement", price: "₵55+" },
      { name: "Scale Detail", price: "₵40+" }
    ]
  },
  {
    title: "Treatments",
    services: [
      { name: "Charcoal Mask", price: "₵40+" },
      { name: "Gold Hydration", price: "₵60+" },
      { name: "Deep Pore Clean", price: "₵80+" },
      { name: "Luxury Steam", price: "₵50+" }
    ]
  }
];
