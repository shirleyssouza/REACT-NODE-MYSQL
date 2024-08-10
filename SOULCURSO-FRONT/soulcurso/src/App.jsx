import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Cursos from "./pages/Cursos.jsx";
import { Toaster } from "react-hot-toast";
import NovoCurso from "./pages/NovoCurso.jsx";
import EditarCurso from "./pages/EditarCurso.jsx";
import Alunos from "./pages/Alunos.jsx";
import NovoAluno from "./pages/NovoAluno.jsx";
import EditarAluno from "./pages/EditarAluno.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/cursos/novo" element={<NovoCurso />} />
                    <Route
                        path="/cursos/editar/:id"
                        element={<EditarCurso />}
                    />
                    <Route path="/alunos" element={<Alunos />} />
                    <Route path="/alunos/novo" element={<NovoAluno />} />
                    <Route
                        path="/alunos/editar/:id"
                        element={<EditarAluno />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
            <Toaster position="bottom-right" />
        </>
    );
}

export default App;
