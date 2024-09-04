import logo from "../../assets/dark-logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <header className="flex items-center justify-between p-4 border-b-2 fixed top-0 w-full z-20 bg-white">
      <img src={logo} alt="logo" />

      <div className="hidden md:block">
        <Link to="" className="mx-10 text-[var(--primary-color)]">Home</Link>
        <Link to="" className="mx-10 text-[var(--primary-color)]">Features</Link>
        <Link to="" className="mx-10 text-[var(--primary-color)]">About Us</Link>
      </div>

      <button  onClick={handleClick} className="btn primary-btn bg-[var(--primary-color)] py-2 px-4 text-white rounded-2xl">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
