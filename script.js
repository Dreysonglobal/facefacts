const STORE = {
  name: "Facefacts Nigeria",
  address: "Suite 2, Polaris Bank Plaza, Opposite Carpark, BBA, Trade Fair Complex",
  phone: "08142526229",
  whatsapp: "2348142526229",
  email: "acaviennigltd@gmail.com"
};
const products =[
    {
        "id":  1,
        "name":  "Nourish+ Restore Ceramide Serum",
        "brand":  "Facefacts",
        "price":  37000,
        "image":  "images/facefact.webp",
        "outOfStock": false

    },
    {
        "id":  2,
        "name":  "Facefacts vitamin c lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Face facts vitamin c lip balm.jpg"
    },
    {
        "id":  3,
        "name":  "Facefacts collagen lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Face facts collagen lip balm.jpg"
    },
    {
        "id":  4,
        "name":  "Facefacts lip silk",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/Face facts lip silk.jpg"
    },
    {
        "id":  5,
        "name":  "Facefacts aura lip oil",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Face facts aura lip oil.jpg"
    },
    {
        "id":  6,
        "name":  "Facefacts lip treatment",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/Face facts lip treatment.jpg"
    },
    {
        "id":  7,
        "name":  "Facefacts snail mucin cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin cleanser.jpg"
    },
    {
        "id":  8,
        "name":  "Facefacts snail mucin serum",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin serum.jpg"
    },
    {
        "id":  9,
        "name":  "Facefacts snail mucin 4 in 1 gel cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts snail mucin 4 in 1 gel cream.jpg"
    },
    {
        "id":  10,
        "name":  "Facefacts snail mucin sheet mask",
        "brand":  "Facefacts",
        "price":  3500,
        "image":  "images/Face facts snail mucin sheet mask.jpg"
    },
    {
        "id":  11,
        "name":  "Face facts rice oil cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice oil cleanser.jpg"
    },
    {
        "id":  12,
        "name":  "Face facts rice milk toner",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice milk toner.jpg"
    },
    {
        "id":  13,
        "name":  "Face facts daily rich rice cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts daily rich rice cream.jpg"
    },
    {
        "id":  14,
        "name":  "Face facts rice clay mask",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts rice clay mask.jpg"
    },
    {
        "id":  15,
        "name":  "Face facts balancing rice serum",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Face facts balancing rice serum.jpg"
    },
    {
        "id":  16,
        "name":  "Face facts BHA toner",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/Face facts BHA toner.jpg"
    },
    
    {
        "id":  19,
        "name":  "PDRN Elasticity Support Capsule Cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/PDRN Elasticity Support Capsule Cream.webp",
        "outOfStock": false
    },
    {
        "id":  20,
        "name":  "PDRN Sculpting Contour Serum",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/PDRN Sculpting Contour Serum.webp",
        "outOfStock": false
    },
    {
        "id":  21,
        "name":  "PDRN Smoothing Eye Serum Shot",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/PDRN Smoothing Eye Serum Shot.webp",
        "outOfStock": false
    },
    
    {
        "id":  35,
        "name":  "Facefacts hyaluronic acid lip balm",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts hyaluronic acid lip balm.jpg"
    },    
    {
        "id":  45,
        "name":  "Facefacts, renew rediance retinol serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, renew rediance retinol serum.webp"
    },
    {
        "id":  46,
        "name":  "Facefacts, glow resurface lactic acid",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, glow resurface lactic acid.webp"
    },
    {
        "id":  47,
        "name":  "Facefacts, revive refresh hyaluronic acid serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, revive refresh hyaluronic acid serum.webp"
    },
    {
        "id":  48,
        "name":  "Facefacts, step 02 superberry radiance serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, step 02 superberry radiance serum.webp"
    },
    {
        "id":  49,
        "name":  "Facefacts, ceramide nourishing cleansing balm",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Facefacts, ceramide nourishing cleansing balm.webp"
    },
    {
        "id":  50,
        "name":  "Facefacts, blue blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/Facefacts, blue blemish patches.webp"
    },
    {
        "id":  51,
        "name":  "Facefacts, pink blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/Facefacts, pink blemish patches.webp"
    },
    {
        "id":  52,
        "name":  "Facefacts, orange blemish patches",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/Facefacts, orange blemish patches.webp"
    },
    {
        "id":  53,
        "name":  "Facefacts, bright clear face cream",
        "brand":  "Facefacts",
        "price":  6800,
        "image":  "images/Facefacts, bright clear face cream.jpg"
    },
    {
        "id":  54,
        "name":  "Facefacts, vitamin c face cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, vitamin c face cream.webp"
    },
    {
        "id":  55,
        "name":  "Facefacts, hyaluronic face cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, hyaluronic face cream.webp"
    },
    {
        "id":  56,
        "name":  "Facefacts, collagen day cream with q10",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, collagen day cream with q10.webp"
    },
    {
        "id":  57,
        "name":  "Facefacts, vitamin rich skin base premier",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Facefacts, vitamin rich skin base premier.webp"
    },
    {
        "id":  58,
        "name":  "Facefacts, step 04 hyaluronic hydra gel cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, step 04 hyaluronic hydra gel cream.webp"
    },
    {
        "id":  59,
        "name":  "Facefacts, step 01 superfood gel cleanser",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, step 01 superfood gel cleanser.webp"
    },
    {
        "id":  60,
        "name":  "Facefacts, vitamin c eye cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, vitamin c eye cream.webp",
        "outOfStock": true
    },
    {
        "id":  61,
        "name":  "Facefacts, ceramide oil control hydrating toner",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/Facefacts, ceramide oil control hydrating toner.webp"
    },
    {
        "id":  62,
        "name":  "Facefacts, soft sugar lip scrub",
        "brand":  "Facefacts",
        "price":  2500,
        "image":  "images/Facefacts, soft sugar lip scrub.webp"
    },
    {
        "id":  63,
        "name":  "Facefacts, soothing facial toner",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, soothing facial toner.jpg"
    },
    {
        "id":  64,
        "name":  "Facefacts, lip oil protecting grape",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/Facefacts, lip oil protecting grape.webp"
    },
    {
        "id":  65,
        "name":  "Facefacts, lip oil smoothing peach",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/Facefacts, lip oil smoothing peach.webp"
    },
    {
        "id":  66,
        "name":  "Facefacts, lip oil hydo water melon",
        "brand":  "Facefacts",
        "price":  2800,
        "image":  "images/Facefacts, lip oil hydo water melon.webp"
    },
    {
        "id":  67,
        "name":  "Facefacts, collage lip boost",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, collage lip boost.webp"
    },
    {
        "id":  68,
        "name":  "Facefacts, body cleanser lactic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, body cleanser lactic acid.webp"
    },
    {
        "id":  69,
        "name":  "Facefacts, body cleanser salycic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, body cleanser salycic acid.webp"
    },
    {
        "id":  70,
        "name":  "Facefacts, body cleanser glycolic acid",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, body cleanser glycolic acid.webp"
    },
    {
        "id":  71,
        "name":  "Facefacts, body oil rhubarb rose",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, body oil rhubarb rose.webp"
    },
    {
        "id":  72,
        "name":  "Facefacts, body oil bergamot and pepper",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, body oil bergamot and pepper.webp"
    },
    {
        "id":  73,
        "name":  "Facefacts, ceramide moisturizing body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, ceramide moisturizing body lotion.webp"
    },
    {
        "id":  74,
        "name":  "Facefacts, ceramide hydrating body wash",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, ceramide hydrating body wash.webp"
    },
    {
        "id":  75,
        "name":  "Facefacts, ceramide moisturing cream",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/Facefacts, ceramide moisturing cream.webp"
    },
    {
        "id":  76,
        "name":  "Facefacts, body lotion peach and papaya",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, body lotion peach and papaya.webp"
    },
    {
        "id":  77,
        "name":  "Facefacts, body lotion strawberry fizz",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, body lotion strawberry fizz.webp"
    },
    {
        "id":  78,
        "name":  "Facefacts, body lotion almond milk",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, body lotion almond milk.webp"
    },
    {
        "id":  79,
        "name":  "Facefacts, collagen body lotion with q10",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, collagen body lotion with q10.webp"
    },
    {
        "id":  80,
        "name":  "Facefacts, hyaluronic body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, hyaluronic body lotion.webp",
        "outOfStock": false
    },
    {
        "id":  81,
        "name":  "Facefacts, vitamin c body lotion",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Facefacts, vitamin c body lotion.webp"
    },
    {
        "id":  82,
        "name":  "Facefacts, kojic acid body lotion",
        "brand":  "Facefacts",
        "price":  7000,
        "image":  "images/Facefacts, kojic acid body lotion.webp"
    },
    {
        "id":  83,
        "name":  "Facefacts, vitaminc facial mist 100ml",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/Facefacts, vitaminc facial mist 100ml.webp"
    },
    {
        "id":  84,
        "name":  "Facefacts, vitamin c jelly cleanser 150ml",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, vitamin c jelly cleanser 150ml.webp"
    },
    {
        "id":  85,
        "name":  "Facefacts, clean skin towels",
        "brand":  "Facefacts",
        "price":  7200,
        "image":  "images/Facefacts, clean skin towels.webp"
    },
    {
        "id":  86,
        "name":  "Facefacts, blotting paper",
        "brand":  "Facefacts",
        "price":  800,
        "image":  "images/Facefacts, blotting paper.webp"
    },
    {
        "id":  87,
        "name":  "Facefacts, hydrating sheet masks",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, hydrating sheet masks.webp"
    },
    {
        "id":  88,
        "name":  "Facefacts, vitamin c sheet mask",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, vitamin c sheet mask.webp",
        "outOfStock": false
    },
    {
        "id":  89,
        "name":  "Facefacts, brightening sheet mask",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, brightening sheet mask.webp"
    },
    {
        "id":  90,
        "name":  "Facefacts, cleansing cucumber mud mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/Facefacts, cleansing cucumber mud mask.webp"
    },
    {
        "id":  91,
        "name":  "Facefacts, brightening watermelon peel off mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/Facefacts, brightening watermelon peel off mask.jpg"
    },
    {
        "id":  92,
        "name":  "PDRN Revitalising Moisturiser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/PDRN Revitalising Moisturiser.webp",
        "outOfStock": false
    },
    {
        "id":  93,
        "name":  "Facefacts, energizing orange peel off mask",
        "brand":  "Facefacts",
        "price":  1300,
        "image":  "images/Facefacts, energizing orange peel off mask.webp",
        "outOfStock": false

    },
    {
        "id":  94,
        "name":  "Facefacts, gel eye patches cucumber",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, gel eye patches cucumber.jpg"
    },
    {
        "id":  95,
        "name":  "Facefacts, nose pore strips",
        "brand":  "Facefacts",
        "price":  1400,
        "image":  "images/Facefacts, nose pore strips.jpg"
    },
    {
        "id":  96,
        "name":  "Facefacts, wrinckle care gel eye patches lavender",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, wrinckle care gel eye patches lavender.webp"
    },
    {
        "id":  97,
        "name":  "Facefacts, hydrating gel eye patches",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, hydrating gel eye patches.webp"
    },
    {
        "id":  98,
        "name":  "Facefacts, target dark circles, gel eye patches",
        "brand":  "Facefacts",
        "price":  1500,
        "image":  "images/Facefacts, target dark circles, gel eye patches.webp"
    },
    
    {
        "id":  112,
        "name":  "Facefacts, blemish patches hydrocolloid material",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/Facefacts, blemish patches hydrocolloid material.webp"
    },
    {
        "id":  113,
        "name":  "Facefacts, blemish patches joy pixels",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/114- Facefacts, blemish patches joy pixels 2000naira.jpg"
    },
    {
        "id":  114,
        "name":  "Facefacts, blemish patches strawberries",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/115- Facefacts, blemish patches strawberries 2000naira.jpg"
    },
    {
        "id":  115,
        "name":  "Facefacts, blemish patches glow in the dark",
        "brand":  "Facefacts",
        "price":  2000,
        "image":  "images/116- Facefacts, blemish patches glow in the dark 2000naira.jpg"
    },
    
    {
        "id":  118,
        "name":  "Facefacts, boho perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/119- Facefacts, boho perfume 10500naira.jpg"
    },
    {
        "id":  119,
        "name":  "Facefacts, santal perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/120- Facefacts, santal perfume 10500naira.jpg"
    },
    {
        "id":  120,
        "name":  "Facefacts, amber perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/121- Facefacts, amber perfume 10500naira.jpg"
    },
    {
        "id":  121,
        "name":  "Facefacts, floral perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/122- Facefacts, floral perfume 10500naira.jpg"
    },
    {
        "id":  122,
        "name":  "Facefacts, orchid perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/123- Facefacts, orchid perfume 10500naira.jpg"
    },
    {
        "id":  123,
        "name":  "Facefacts, serene perfume",
        "brand":  "Facefacts",
        "price":  10500,
        "image":  "images/124- Facefacts, serene perfume 10500.jpg"
    },
    {
        "id":  124,
        "name":  "Facefacts, ceramide foaming cleanser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/125- Facefacts, ceramide foaming cleanser 6000naira.jpg"
    },
    {
        "id":  125,
        "name":  "Facefacts, ceramide blemish clarifying foaming cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/126- Facefacts, ceramide blemish clarifying foaming cleanser 6500naira.jpg"
    },
    {
        "id":  126,
        "name":  "Facefacts, ceramide hydrating gentle cleanser",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/127- Facefacts, ceramide hydrating gentle cleanser 4500naira.jpg"
    },
    {
        "id":  127,
        "name":  "Facefacts, ceramide oil control foaming cleanser",
        "brand":  "Facefacts",
        "price":  6500,
        "image":  "images/128- Facefacts, ceramide oil control foaming cleanser 6500.jpg"
    },
    {
        "id":  128,
        "name":  "Facefacts, tropic serenity, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/129- Facefacts, tropic serenity, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  129,
        "name":  "Facefacts, velvet blossom, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/130- Facefacts, velvet blossom, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  130,
        "name":  "Facefacts, sweet sunrise, hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/131- Facefacts, sweet sunrise, hair and body perfume 5000naira.jpg"
    },
    {
        "id":  131,
        "name":  "Facefacts, twilight oud hair and body perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/132- Facefacts, twilight oud hair and body perfume 5000naira.jpg"
    },
    {
        "id":  132,
        "name":  "Facefacts, cherry bliss, sweet clow set",
        "brand":  "Facefacts",
        "price":  18000,
        "image":  "images/133- Facefacts, cherry bliss, sweet clow set 18000naira.jpg"
    },
    {
        "id":  133,
        "name":  "Facefacts, cherry bliss, glow perfume",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/134- Facefacts, cherry bliss, glow perfume 5000naira.jpg"
    },
    {
        "id":  134,
        "name":  "Facefacts, cherry bliss, brightening toner",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/135- Facefacts, cherry bliss, brightening toner 5500naira.jpg"
    },
    {
        "id":  135,
        "name":  "Facefacts, cherry bliss, hydro cream",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/136- Facefacts, cherry bliss, hydro cream 5000naira.jpg"
    },
    {
        "id":  136,
        "name":  "Facefacts, energizing, body serum",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/137- Facefacts, energizing, body serum 4500naira.jpg"
    },
    {
        "id":  137,
        "name":  "Facefacts, multibiotic, daily defence facial serum",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/138- Facefacts, multibiotic, daily defence facial serum 6000naira.jpg"
    },
    {
        "id":  138,
        "name":  "Facefacts, multi moisture gel balm",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/139- Facefacts, multi moisture gel balm, 5500naira.jpg"
    },
    {
        "id":  139,
        "name":  "Facefacts, wonder body cream",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/140- Facefacts, wonder body cream 5500naira.jpg"
    },
    {
        "id":  140,
        "name":  "Facefacts, glow revival cleanser, gentle milky foam wash",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/141- Facefacts, glow revival cleanser, gentle milky foam wash 5000naira.jpg"
    },
    {
        "id":  141,
        "name":  "Facefacts, wonder cream, instant glow reviver",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/142- Facefacts, wonder cream, instant glow reviver 5000naira.jpg"
    },
    {
        "id":  142,
        "name":  "Facefacts, facial glo oil",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/143- Facefacts, facial glo oil 5000naira.jpg"
    },
    {
        "id":  143,
        "name":  "Facefacts, radiance serum, perfecting glow ehencer",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/144- Facefacts, radiance serum, perfecting glow ehencer 5000naira.jpg"
    },
    {
        "id":  144,
        "name":  "Facefacts, bronzing glow drops",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/145- Facefacts, bronzing glow drops 5000naira.jpg"
    },
    {
        "id":  145,
        "name":  "Facefacts, cica correcting multi-balm",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/146- Facefacts, cica correcting multi-balm 5000naira.jpg"
    },
    {
        "id":  146,
        "name":  "Facefacts, silky tinted primer, pore bluring base",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/147- Facefacts, silky tinted primer, pore bluring base 5000naira.jpg"
    },
    {
        "id":  147,
        "name":  "Facefacts, perfect prep primer, illuminating skin serum",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/148- Facefacts, perfect prep primer, illuminating skin serum 5000naira.jpg"
    },
    {
        "id":  148,
        "name":  "Facefacts, plumping sheet mask",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/149- Facefacts, plumping sheet mask 5000naira.jpg"
    },
    {
        "id":  149,
        "name":  "Facefacts, gel-cream moisturiser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/150- Facefacts, gel-cream moisturiser 6000naira.jpg",
        "outOfStock": false
    },
    {
        "id":  150,
        "name":  "Facefacts, gel-cream cleanser",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/151- Facefacts, gel-cream cleanser 6000naira.jpg"
    },
    {
        "id":  151,
        "name":  "Facefacts, cica, color correcting cream",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/152- Facefacts, cica, color correcting cream 5000naira.jpg"
    },
    {
        "id":  152,
        "name":  "Facefacts, cica boost, repairing body cream",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/153- Facefacts, cica boost, repairing body cream 5500naira.jpg"
    },
    {
        "id":  153,
        "name":  "Facefacts, cica boost, hydrating water syrum 30ml",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/154- Facefacts, cica boost, hydrating water syrum 30ml 5000naira.jpg"
    },
    {
        "id":  154,
        "name":  "Facefacts, cica boost, hydrating water syrum 100ml",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/155- Facefacts, cica boost, hydrating water syrum 100ml, 5000naira.jpg"
    },
    
    {
        "id":  160,
        "name":  "Shimmer Gloss Wand - Moonlit Pearl",
        "brand":  "Facefacts",
        "price":  3500,
        "image":  "images/Shimmer Gloss Wand - Moonlit Pearl.webp",
        "outOfStock": true
    },
    
    {
        "id":  167,
        "name":  "Scủủp Peach Iced Tea Cooling Body Stick",
        "brand":  "Facefacts",
        "price":  6000,
        "image":  "images/Scủủp Peach Iced Tea Cooling Body Stick.webp",
        "outOfStock": true
    },
    
    {
        "id":  399,
        "name":  "Facefacts, menaupause skincare, Revitalizing Facial Serum",
        "brand":  "Facefacts",
        "price":  4500,
        "image":  "images/Facefacts, menaupause skincare, Revitalizing Facial Serum.webp"
    },
    
    {
        "id":  429,
        "name":  "Facefacts, ceramide blemish treatment gel",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, ceramide blemish treatment gel.webp"
    },
    {
        "id":  430,
        "name":  "Facefacts, ceramide moisturing cream ceramides plus hyaluronic acid plus oats",
        "brand":  "Facefacts",
        "price":  5500,
        "image":  "images/Facefacts, ceramide moisturing cream ceramides plus hyaluronic acid plus oats.webp"
    },
    {
        "id":  431,
        "name":  "Facefacts, ceramide replenishing eye cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, ceramide replenishing eye cream.webp"
    },
    {
        "id":  432,
        "name":  "Facefacts, ceramide oil control moisturizing gel cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, ceramide oil control moisturizing gel cream.webp"
    },
    {
        "id":  433,
        "name":  "Facefacts, ceramide repairing serum cream",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, ceramide repairing serum cream.webp"
    },
    {
        "id":  434,
        "name":  "Facefacts, ceramide blemish gel moisturizer",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, ceramide blemish gel moisturizer.webp"
    },
    {
        "id":  435,
        "name":  "Facefacts, ceramide blemish and defend gift set",
        "brand":  "Facefacts",
        "price":  21000,
        "image":  "images/Facefacts, ceramide blemish and defend gift set.jpg"
    },
    {
        "id":  436,
        "name":  "Facefacts, brightening iiluminate vitamin c serum",
        "brand":  "Facefacts",
        "price":  5200,
        "image":  "images/Facefacts, brightening iiluminate vitamin c serum.webp"
    },    
    {
        "id":  438,
        "name":  "Facefacts, soothe glow niacinamide serum",
        "brand":  "Facefacts",
        "price":  3200,
        "image":  "images/Facefacts, soothe glow niacinamide serum.webp"
    },
    {
        "id":  439,
        "name":  "FACEFACTS Cica Boost Hydrating Water Serum 30ml",
        "brand":  "Facefacts",
        "price":  5000,
        "image":  "images/FACEFACTS Cica Boost Hydrating Water Serum 30ml.webp"
    },
    {
        "id":  440,
        "name":  "Facefacts, firm revitalise collagen serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, firm revitalise collagen serum.webp"
    },
    {
        "id":  441,
        "name":  "Facefacts, restore clarify salicylic acid",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, restore clarify salicylic acid.webp"
    },
    {
        "id":  442,
        "name":  "Facefacts, revive brightning caffeine serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, revive brightning caffeine serum.webp"
    },
    {
        "id":  443,
        "name":  "Facefacts, firm revitalise polypeptide serum",
        "brand":  "Facefacts",
        "price":  3000,
        "image":  "images/Facefacts, firm revitalise polypeptide serum.webp"
    }
    

].filter(function (product) {
  return product.brand.toLowerCase() === "facefacts";
});
const state = {
  search: "",
  category: "all",
  sort: "featured",
  currentPage: 1,
  pageSize: 30,
  cart: new Map(),
  cartToastTimer: null,
  heroIndex: 0,
  heroTimer: null
};
const el = {
  grid: document.getElementById("product-grid"),
  resultCount: document.getElementById("result-count"),
  search: document.getElementById("search"),
  category: document.getElementById("category-filter"),
  sort: document.getElementById("sort-filter"),
  cartToggle: document.getElementById("cart-toggle"),
  cartClose: document.getElementById("cart-close"),
  cartPanel: document.getElementById("cart-panel"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  cartCount: document.getElementById("cart-count"),
  checkout: document.getElementById("checkout-btn"),
  clearCart: document.getElementById("clear-cart"),
  heroImage: document.getElementById("hero-image"),
  heroTitle: document.getElementById("hero-title"),
  heroCaption: document.getElementById("hero-caption"),
  heroDots: document.getElementById("hero-dots"),
  pagination: document.getElementById("pagination"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  pageLabel: document.getElementById("page-label"),
    cartToast: document.getElementById("cart-toast"),
    productDetails: document.getElementById("product-details"),
    detailsClose: document.getElementById("details-close"),
    detailsBrand: document.getElementById("details-brand"),
    detailsTitle: document.getElementById("details-title"),
    detailsImage: document.getElementById("details-image"),
    detailsDescription: document.getElementById("details-description")
};
const verification = {
  toggle: document.getElementById("verify-toggle"),
  dialog: document.getElementById("verify-dialog"),
  close: document.getElementById("verify-close"),
  form: document.getElementById("verify-form")
};
function formatNaira(value) {
  return "N" + Number(value || 0).toLocaleString("en-NG");
}
function safeImageUrl(relativePath) {
  try {
    return new URL(encodeURI(relativePath), window.location.href).href;
  } catch {
    return relativePath;
  }
}
function showCartToast(message) {
  if (!el.cartToast) return;
  el.cartToast.textContent = message;
  el.cartToast.classList.add("show");
  if (state.cartToastTimer) clearTimeout(state.cartToastTimer);
  state.cartToastTimer = setTimeout(function () {
    el.cartToast.classList.remove("show");
  }, 1800);
}
function categorize(name) {
  const n = name.toLowerCase();
  if (/(tooth|teeth|mouth spray|tootbrush|toothpaste|denture)/.test(n)) return "Oral Care";
  if (/(baby|child)/.test(n)) return "Baby Care";
  if (/(perfume|air wick|axe|fragrance)/.test(n)) return "Fragrance";
  if (/(lip balm|lip oil|lip scrub|lip)/.test(n)) return "Lip Care";
  if (/(scrub|mask|patch|patches|wipes|pore strips|peel off|eye patches)/.test(n)) return "Treatments and Exfoliants";
  if (/(serum|oil|toner|mist)/.test(n)) return "Serums Oils and Toners";
  if (/(soap|cream bar|bar)/.test(n)) return "Soaps and Bars";
  if (/(wash|cleanser|cleansing|foam|shower|bath|intimate wash|gel cleanser)/.test(n)) return "Cleansers and Washes";
  if (/(lotion|cream|moisturiser|moisturizer|body milk|body butter|gel cream)/.test(n)) return "Lotions and Creams";
  return "Skincare Essentials";
}
function getProductDetails(product) {
    const name = product.name.toLowerCase();
    const categoryNames = {
        "Cleansers and Washes": "Cleansers & Washes",
        "Serums Oils and Toners": "Serums, Oils & Toners",
        "Treatments and Exfoliants": "Treatments & Exfoliants",
        "Lotions and Creams": "Lotions & Creams",
        "Soaps and Bars": "Soaps & Bars"
    };
    const details = {
        ingredient: "the active ingredients shown on the product image",
        benefit: "support a simple, consistent personal-care routine"
    };
    const matches = [
        [/(vitamin c|ascorbic)/, "Vitamin C", "Helps brighten the appearance of dull-looking skin and supports a more even-looking tone."],
        [/(salicylic acid|bha)/, "Salicylic acid (BHA)", "Helps unclog pores and remove excess oil for clearer-looking skin."],
        [/(retinol|retinyl)/, "Retinol or a retinoid derivative", "Helps improve the look of uneven texture and fine lines over time. Use sunscreen during the day."],
        [/(niacinamide|vitamin b3)/, "Niacinamide (vitamin B3)", "Helps balance the look of oil, support the skin barrier, and improve the appearance of uneven tone."],
        [/(ceramide)/, "Ceramides", "Helps replenish the skin barrier and reduce the feeling of dryness."],
        [/(snail mucin|snail)/, "pure snail mucin extract", "Helps intensely hydrate and soften the feel of skin while supporting a smoother-looking complexion"],
        [/(collagen|polypeptide|peptide)/, "Collagen, peptides, or polypeptides", "Helps moisturise and improve the look of skin that feels dry or less firm."],
        [/(caffeine)/, "Caffeine", "Helps refresh the look of tired-looking skin and reduce the appearance of puffiness."],
        [/(hyaluronic|hyaluron)/, "Hyaluronic acid", "Draws in moisture to help skin feel hydrated, plump, and comfortable."],
        [/(tea tree)/, "Tea tree", "Helps refresh the skin and support a cleaner-feeling complexion."],
        [/(glycerin)/, "Glycerin", "Helps attract and retain moisture so skin feels softer and more comfortable."]
    ];
    for (let i = 0; i < matches.length; i += 1) {
        if (matches[i][0].test(name)) {
            details.ingredient = matches[i][1];
            details.benefit = matches[i][2]
                .replace(/^Helps /, "help ")
                .replace(/^Draws /, "draw ")
                .replace(/^Adds /, "add ")
                .replace(/^Supports /, "support ")
                .replace(/^Helps /, "help ")
                .replace(/^Helps /, "help ");
            break;
        }
    }
    if (product.category === "Oral Care") {
        details.ingredient = "the active ingredients and cleansing agents shown on the product image";
        details.benefit = "help clean teeth or freshen the mouth as part of a daily oral-care routine";
    } else if (product.category === "Fragrance") {
        details.ingredient = "the fragrance details shown on the product image";
        details.benefit = "add a pleasant scent for everyday wear or use around the home";
    }
    const category = categoryNames[product.category] || product.category;
    details.description = product.brand + " " + product.name + " is an authentic " + category + ". Formulated with " + details.ingredient + " to " + details.benefit.replace(/[.!?]+$/, "") + ". Guaranteed 100% genuine and directly sourced by Facefacts Nigeria.";
    return details;
}
for (let i = 0; i < products.length; i += 1) {
  products[i].category = categorize(products[i].name);
  products[i].price = Number(products[i].price) || 0;
}
const heroSlides = [
  {
    image: "images/hero3.png",
    title: "Premium skincare for every glow goal",
    caption: "Shop trusted cleansers, serums, masks, body care, and essentials in one place."
  },
  {
    image: "images/hero2.webp",
    title: "Facefacts skincare and beauty collection",
    caption: "Discover best-selling skincare lines, curated for bright, healthy, smooth skin."
  },
  {
    image: "images/hero1.png",
    title: "Checkout in seconds on WhatsApp",
    caption: "Add your products, review your cart, and send your complete order instantly."
  }
];
function setupHeroSlider() {
  if (!el.heroImage || !el.heroDots || !el.heroTitle || !el.heroCaption) return;
  el.heroDots.innerHTML = heroSlides.map(function (_, i) {
    return "<button class=\"hero-dot\" type=\"button\" data-hero-index=\"" + i + "\"></button>";
  }).join("");
  function renderHero() {
    const slide = heroSlides[state.heroIndex];
    el.heroImage.src = encodeURI(slide.image);
    el.heroTitle.textContent = slide.title;
    el.heroCaption.textContent = slide.caption;
    const dots = el.heroDots.querySelectorAll(".hero-dot");
    for (let i = 0; i < dots.length; i += 1) {
      dots[i].classList.toggle("active", i === state.heroIndex);
    }
  }
  el.heroDots.addEventListener("click", function (e) {
    const btn = e.target.closest("button[data-hero-index]");
    if (!btn) return;
    state.heroIndex = Number(btn.dataset.heroIndex);
    renderHero();
  });
  renderHero();
  if (state.heroTimer) clearInterval(state.heroTimer);
  state.heroTimer = setInterval(function () {
    state.heroIndex = (state.heroIndex + 1) % heroSlides.length;
    renderHero();
  }, 3800);
}
function getFilteredProducts() {
  const q = state.search.trim().toLowerCase();
  let list = products.filter(function (p) {
    const matchesCategory = state.category === "all" || p.category === state.category;
    const hay = (p.name + " " + p.brand + " " + p.category).toLowerCase();
    const matchesSearch = !q || hay.includes(q);
    return matchesCategory && matchesSearch;
  });
  switch (state.sort) {
    case "price-asc":
      list = list.sort(function (a, b) { return a.price - b.price; });
      break;
    case "price-desc":
      list = list.sort(function (a, b) { return b.price - a.price; });
      break;
    case "name-asc":
      list = list.sort(function (a, b) { return a.name.localeCompare(b.name); });
      break;
    default:
      list = list.sort(function (a, b) { return a.id - b.id; });
  }
  return list;
}
function getPageData(list) {
  const paginate = state.category === "all";
  if (!paginate) {
    return {
      items: list,
      totalPages: 1,
      startIndex: list.length ? 1 : 0,
      endIndex: list.length
    };
  }
  const totalPages = Math.max(1, Math.ceil(list.length / state.pageSize));
  if (state.currentPage > totalPages) state.currentPage = totalPages;
  if (state.currentPage < 1) state.currentPage = 1;
  const start = (state.currentPage - 1) * state.pageSize;
  const end = start + state.pageSize;
  return {
    items: list.slice(start, end),
    totalPages: totalPages,
    startIndex: list.length ? start + 1 : 0,
    endIndex: Math.min(end, list.length)
  };
}
function renderPagination(totalPages) {
  if (!el.pagination || !el.prevPage || !el.nextPage || !el.pageLabel) return;
  const shouldShow = state.category === "all";
  el.pagination.style.display = shouldShow ? "flex" : "none";
  if (!shouldShow) return;
  el.pageLabel.textContent = "Page " + state.currentPage + " of " + totalPages;
  el.prevPage.disabled = state.currentPage <= 1;
  el.nextPage.disabled = state.currentPage >= totalPages;
}
function renderProducts() {
  const filtered = getFilteredProducts();
  const pageData = getPageData(filtered);
  const list = pageData.items;
  el.resultCount.textContent = "Showing " + pageData.startIndex + "-" + pageData.endIndex + " of " + filtered.length + " products";
  el.grid.innerHTML = list.map(function (p) {
    const outOfStock = Boolean(p.outOfStock);
    const stockBadge = outOfStock ? "<p class=\"stock-badge\">Out of Stock</p>" : "";
    const buttonMarkup = outOfStock
      ? "<button class=\"add-btn disabled\" type=\"button\" disabled aria-disabled=\"true\">Out of Stock</button>"
            : "<button class=\"add-btn\" data-action=\"add\" data-id=\"" + p.id + "\">Add to Cart</button>";
        const detailsButton = "<button class=\"about-btn\" data-action=\"details\" data-id=\"" + p.id + "\" type=\"button\">About</button>";
    return "<article class=\"card" + (outOfStock ? " out-of-stock" : "") + "\">" +
      "<img src=\"" + encodeURI(p.image) + "\" alt=\"" + p.name + "\" loading=\"lazy\" />" +
      "<div class=\"card-body\">" +
      "<p class=\"brand\">" + p.brand + "</p>" +
      "<h3 class=\"title\">" + p.name + "</h3>" +
      "<p class=\"meta\">" + p.category + "</p>" +
      stockBadge +
      "<div class=\"price-row\">" +
      "<span class=\"price\">" + formatNaira(p.price) + "</span>" +
            "<div class=\"card-actions\">" + detailsButton + buttonMarkup + "</div>" +
      "</div>" +
      "</div>" +
      "</article>";
  }).join("");
  renderPagination(pageData.totalPages);
}
function openProductDetails(id) {
    const product = products.find(function (p) { return p.id === id; });
    if (!product || !el.productDetails) return;
    const details = getProductDetails(product);
    el.detailsBrand.textContent = product.brand;
    el.detailsTitle.textContent = product.name;
    el.detailsImage.src = encodeURI(product.image);
    el.detailsImage.alt = product.name;
    el.detailsDescription.textContent = details.description;
    el.productDetails.showModal();
}
function buildCategoryOptions() {
  const categories = Array.from(new Set(products.map(function (p) { return p.category; }))).sort(function (a, b) {
    return a.localeCompare(b);
  });
  categories.forEach(function (c) {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    el.category.appendChild(opt);
  });
}
function cartArray() {
  return Array.from(state.cart.values());
}
function updateCartCounters() {
  const items = cartArray();
  const count = items.reduce(function (n, i) { return n + i.qty; }, 0);
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  el.cartCount.textContent = String(count);
  el.cartTotal.textContent = formatNaira(total);
}
function renderCart() {
  const items = cartArray();
  if (!items.length) {
    el.cartItems.innerHTML = "<p>Your cart is empty.</p>";
    updateCartCounters();
    return;
  }
  el.cartItems.innerHTML = items.map(function (item) {
    return "<div class=\"cart-item\">" +
      "<img src=\"" + encodeURI(item.image) + "\" alt=\"" + item.name + "\" />" +
      "<div>" +
      "<p class=\"title\">" + item.name + "</p>" +
      "<p class=\"meta\">" + formatNaira(item.price) + " each</p>" +
      "<div class=\"qty-wrap\">" +
      "<button class=\"qty-btn\" data-action=\"dec\" data-id=\"" + item.id + "\">-</button>" +
      "<span>" + item.qty + "</span>" +
      "<button class=\"qty-btn\" data-action=\"inc\" data-id=\"" + item.id + "\">+</button>" +
      "</div>" +
      "</div>" +
      "<div>" +
      "<p class=\"price\">" + formatNaira(item.price * item.qty) + "</p>" +
      "<button class=\"add-btn\" data-action=\"remove\" data-id=\"" + item.id + "\">Remove</button>" +
      "</div>" +
      "</div>";
  }).join("");
  updateCartCounters();
}
function addToCart(id) {
  const product = products.find(function (p) { return p.id === id; });
  if (!product) return;
  if (product.outOfStock) {
    showCartToast(product.name + " is out of stock.");
    return;
  }
  if (state.cart.has(id)) {
    state.cart.get(id).qty += 1;
  } else {
    state.cart.set(id, Object.assign({}, product, { qty: 1 }));
  }
  renderCart();
  showCartToast(product.name + " added to cart.");
}
function changeQty(id, action) {
  if (!state.cart.has(id)) return;
  const item = state.cart.get(id);
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) state.cart.delete(id);
  renderCart();
}
function openCart() {
  el.cartPanel.classList.add("open");
  el.cartPanel.setAttribute("aria-hidden", "false");
}
function closeCart() {
  el.cartPanel.classList.remove("open");
  el.cartPanel.setAttribute("aria-hidden", "true");
}
function checkoutOnWhatsApp() {
  const items = cartArray();
  if (!items.length) {
    alert("Your cart is empty.");
    return;
  }
  const total = items.reduce(function (n, i) { return n + (i.price * i.qty); }, 0);
  const lines = [
    "Hello " + STORE.name + ", I want to place an order.",
    "",
    "Selected products:"
  ];
  items.forEach(function (item, index) {
    lines.push(String(index + 1) + ". " + item.name);
    lines.push("Qty: " + item.qty);
    lines.push("Unit Price: " + formatNaira(item.price));
    lines.push("Subtotal: " + formatNaira(item.price * item.qty));
    lines.push("Picture: " + safeImageUrl(item.image));
    lines.push("");
  });
  lines.push("Total: " + formatNaira(total));
  lines.push("Store Address: " + STORE.address);
  const text = encodeURIComponent(lines.join("\n"));
  const url = "https://wa.me/" + STORE.whatsapp + "?text=" + text;
  window.open(url, "_blank");
}
el.search.addEventListener("input", function (e) {
  state.search = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.category.addEventListener("change", function (e) {
  state.category = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.sort.addEventListener("change", function (e) {
  state.sort = e.target.value;
  state.currentPage = 1;
  renderProducts();
});
el.grid.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  const id = Number(btn.dataset.id);
    if (btn.dataset.action === "details") {
        openProductDetails(id);
        return;
    }
  addToCart(id);
});
el.detailsClose.addEventListener("click", function () {
    el.productDetails.close();
});
el.productDetails.addEventListener("click", function (e) {
    if (e.target === el.productDetails) el.productDetails.close();
});
el.cartItems.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-action][data-id]");
  if (!btn) return;
  changeQty(Number(btn.dataset.id), btn.dataset.action);
});
if (el.prevPage) {
  el.prevPage.addEventListener("click", function () {
    if (state.currentPage > 1) {
      state.currentPage -= 1;
      renderProducts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}
if (el.nextPage) {
  el.nextPage.addEventListener("click", function () {
    state.currentPage += 1;
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
el.cartToggle.addEventListener("click", openCart);
el.cartClose.addEventListener("click", closeCart);
el.checkout.addEventListener("click", checkoutOnWhatsApp);
verification.toggle.addEventListener("click", function () {
  verification.dialog.showModal();
});
verification.close.addEventListener("click", function () {
  verification.dialog.close();
});
verification.dialog.addEventListener("click", function (e) {
  if (e.target === verification.dialog) verification.dialog.close();
});
verification.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(verification.form);
  const lines = [
    "Hello Facefacts Nigeria, I would like to verify a Facefacts product.",
    "",
    "Name: " + formData.get("name"),
    "Phone: " + formData.get("phone"),
    "Purchase address: " + (formData.get("purchaseAddress") || "Not provided"),
    "Vendor: " + (formData.get("vendor") || "Not provided")
  ];
  const url = "https://wa.me/2348035143118?text=" + encodeURIComponent(lines.join("\n"));
  window.open(url, "_blank");
});
el.clearCart.addEventListener("click", function () {
  state.cart.clear();
  renderCart();
});
buildCategoryOptions();
setupHeroSlider();
renderProducts();
renderCart();
if (window.location.hash === "#verify-toggle") verification.dialog.showModal();
