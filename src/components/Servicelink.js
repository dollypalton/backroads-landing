import { services } from "../data";

const Servicelink = () => {
    return (
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, name, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{name}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    );
}

export default Servicelink
