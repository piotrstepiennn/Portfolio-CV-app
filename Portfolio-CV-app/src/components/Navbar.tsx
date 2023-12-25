const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3 mb-5">
                <div className="container">
                    <a className="navbar-brand fs-1" href="#">Piotr Stępień</a>
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link fs-4" href="#">O mnie</a>
                        <a className="nav-link fs-4" href="#">Umiejętności</a>
                        <a className="nav-link fs-4" href="#">Moje Projekty</a>
                        <a className="nav-link fs-4" href="#">Kontakt</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;