import { ITabTitleItemProps } from "../../types/props";


const TabTitleItem = (props: ITabTitleItemProps) => {

    const { isActived, icon, tabTitle, onClick } = props;

    const normalClass = "inline-flex gap-x-4 items-center justify-center p-4 rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 group";

    const activedClass = "inline-flex gap-x-4 items-center justify-center p-4 text-blue-600 rounded-t-lg active dark:text-blue-500";

    return (
        <a
            href="#"
            className={isActived ? activedClass : normalClass}
            onClick={onClick}
        >
            {icon}
            {tabTitle}
        </a>
    )
}
export default TabTitleItem;