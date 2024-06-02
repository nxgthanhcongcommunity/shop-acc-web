import { Link } from "react-router-dom";
import { ISubMenuItem } from "../../types/menu-item";

const LinkItem = (props: ISubMenuItem) => {
  const { href, title, onClick } = props;

  if (onClick != null) {
    return (
      <span className="content__title" onClick={onClick}>
        {title}
      </span>
    );
  }

  return (
    <Link to={href}>
      <span className="content__title">{title}</span>
    </Link>
  );
};

export default LinkItem;
