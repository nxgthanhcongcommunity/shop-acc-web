import { IMenuItemProps } from "../../../types/menu-item";
import MenuItem from "./menu-item";

const Menu = () => {

    const menuItems:IMenuItemProps[] = [
        {
            title: "store",
            subTitle: "games",
            subMenuItems: [
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
            ]
        },
        {
            title: "blog",
            subTitle: "news",
            subMenuItems: [
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
            ]
        },
        {
            title: "features",
            subTitle: "full",
            subMenuItems: [
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
                {
                    title: "Store Style 1",
                    href: "/",
                },
            ]
        },
    ]

    return (
        <ul className="flex gap-x-6">
            {
                menuItems.map(item => (
                    <MenuItem {...item} />
                ))
            }
          </ul>
    );
}

export default Menu;