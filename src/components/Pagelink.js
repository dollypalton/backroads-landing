import { pageLinks } from "../data";

const Pagelink = ({parentClass, parentId, childClass}) => {
    return (
      <ul className={parentClass} id={parentId}>
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className={childClass}>
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    );
}

export default Pagelink
