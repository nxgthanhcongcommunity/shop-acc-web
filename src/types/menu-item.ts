export interface IMenuItemProps {
  title: string;
  subTitle?: string;
  subMenuItems?: ISubMenuItem[];

  caret?: boolean;
  column?: number;
}

export interface ISubMenuItem {
  title: string;
  href: string;
}
