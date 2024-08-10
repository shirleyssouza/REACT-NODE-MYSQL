import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header w-100">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/cursos">Cursos</Link>
                <Link to="/alunos">Alunos</Link>
            </nav>
        </header>
    );
}

export default Header;
