export interface IMenuItemProps {
  title: string | JSX.Element;
  subTitle?: string;
  subMenuItems?: ISubMenuItem[];
  side?: "left" | "right";
}

export interface ISubMenuItem {
  title: string;
  href: string;
}
