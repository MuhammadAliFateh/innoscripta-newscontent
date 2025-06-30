import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRoute = event.target.value;
        if (selectedRoute) navigate(selectedRoute);
    };
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Innoscripta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
                <select className="form-select w-auto" onChange={handleSelect} defaultValue="">
                    <option value="" disabled>Select Page</option>
                    <option value="/">Home</option>
                    <option value="/NewsAPI">News API</option>
                    <option value="/PersonalizedNewsAPIAuthor">News API By Author</option>
                    <option value="/PersonalizedNewsAPICategory">News API By Category</option>
                    <option value="/PersonalizedNewsAPISource">News API By Source</option>
                </select>
            </li>
            <li className="nav-item ms-4">
                <select className="form-select w-auto ml-4" onChange={handleSelect} defaultValue="">
                    <option value="" disabled>Select Page</option>
                    <option value="/">Home</option>
                    <option value="/NewsAPI">News API</option>
                    <option value="/PersonalizedNewsAPIAuthor">News API By Author</option>
                    <option value="/PersonalizedNewsAPICategory">News API By Category</option>
                    <option value="/PersonalizedNewsAPISource">News API By Source</option>
                </select>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
