import { socialLinks } from "../data";

const Sociallink = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={childClass}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sociallink;
