
import {useAuth} from "../store/auth";
import "./Services.css";

const Service = () => {
  const { service } = useAuth();
  const servicesList = Array.isArray(service) ? service : [];

  return (
    <section className="service-section">
      <div className="service-container">

        <div className="service-heading">
          <p className="service-subtitle">WHAT WE OFFER</p>
          <h1>Our Services</h1>
          <p>
            We provide modern technology solutions to help businesses
            grow, innovate and succeed.
          </p>
        </div>

        <div className="service-grid">
          {servicesList.length > 0 ? (
            servicesList.map((item) => (
              <div className="service-card" key={item._id || item.service}>
                <div className="service-icon">💻</div>
                <h2>{item.service}</h2>

                <p className="service-description">
                  {item.description}
                </p>

                <div className="service-info">
                  <div>
                    <span>Price</span>
                    <strong>{item.price}</strong>
                  </div>

                  <div>
                    <span>Provider</span>
                    <strong>{item.provider}</strong>
                  </div>
                </div>

                <button className="service-btn">
                  Learn More
                </button>
              </div>
            ))
          ) : (
            <p>No services available right now.</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Service;