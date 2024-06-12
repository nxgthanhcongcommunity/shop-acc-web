import { IMenuItemProps } from "../types";

export const menuItems: IMenuItemProps[] = [
  {
    title: "Kho tài khoản",
    subTitle: "games",
    subMenuItems: [
      {
        title: "Nick DragonballLegend",
        href: "/",
      },
      {
        title: "Nick liên quân",
        href: "/",
      },
    ],
  },
  {
    title: "Tính năng",
    subTitle: "info",
    subMenuItems: [
      {
        title: "Hướng dẫn thanh toán",
        href: "/",
      },
      {
        title: "Hướng dẫn mua acc",
        href: "/",
      },
    ],
  },
];

export const HTTP_METHODS = {
  POST: "POST",
  GET: "GET",
};

export const PAYMENT_PROVIDERS = {
  VNPAY: "VNPAY",
}