const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3 mb-5">
                <div className="container">
                    <a className="navbar-brand fs-1" href="#">Piotr Stępień</a>
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link fs-4" href="#about">O mnie</a>
                        <a className="nav-link fs-4" href="#skills">Umiejętności</a>
                        <a className="nav-link fs-4" href="#projects">Moje Projekty</a>
                        <a className="nav-link fs-4" href="#contact">Kontakt</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;