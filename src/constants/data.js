const {
  WOMEN,
  MEN,
  HM_JAWAD,
  FURQUAN_ABID,
  ABDULLAH_AD,
  ABRAR_KHAN,
  STACY,
  TIFFANY,
  JAMES,
} = require("./images");

const listProductionBuyNow = [
  {
    id: 0,
    image: WOMEN,
  },
  {
    id: 1,
    image: MEN,
  },
];

const listTheFounders = [
  {
    id: 0,
    name: "HM Jawad",
    image: HM_JAWAD,
  },
  {
    id: 1,
    name: "Furqan Abid",
    image: FURQUAN_ABID,
  },
  {
    id: 2,
    name: "Abdullah Ah",
    image: ABDULLAH_AD,
  },
  {
    id: 3,
    name: "Abrar Khan",
    image: ABRAR_KHAN,
  },
];

const listTestimonials = [
  {
    id: 0,
    by: "Stacy",
    avatar: STACY,
    comment:
      "Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.",
  },
  {
    id: 1,
    by: "Tiffany",
    avatar: TIFFANY,
    comment:
      "I ordered 5 shirts from them and received them in no time. The customer support was awesome!",
  },
  {
    id: 2,
    by: "James",
    avatar: JAMES,
    comment:
      "I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.",
  },
];

export { listProductionBuyNow, listTheFounders, listTestimonials };
