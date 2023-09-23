import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 bg-yellow-100 px-4">
      <h1 className="text-3xl font-bold">Phone Hub</h1>
      <div className="text-xl font-bold flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
