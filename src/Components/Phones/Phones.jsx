import Phone from "./Phone";
import PropTypes from "prop-types";
const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Our Phones Collections</h1>
      <div className="grid grid-cols-3 gap-6">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.object.isRequired,
};
export default Phones;
