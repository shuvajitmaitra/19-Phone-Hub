import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;
  return (
    <div className="p-8 bg-blue-300 rounded-lg shadow space-y-2 flex flex-col">
      <img src={image} className="h-64 w-64 mx-auto rounded-lg" />
      <p className="font-bold">{rating}</p>
      <h2> {brand_name} </h2>
      <div className="flex justify-between font-bold flex-grow ">
        <h2> {phone_name} </h2>
        <p> {price} </p>
      </div>
      <Link to={`/phones/${id}`}>
        <button className="w-full  bg-red-500 rounded-lg py-2 text-white font-semibold">
          See Details
        </button>
      </Link>
    </div>
  );
};
Phone.propTypes = {
  phone: PropTypes.object.isRequired,
};
export default Phone;
