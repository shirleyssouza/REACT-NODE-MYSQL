import { useEffect, useState } from "react";
import { deleteCurso, getCursos } from "../api/cursos";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Cursos() {
    const [cursos, setCursos] = useState(null);

    function carregarCursos() {
        getCursos().then((data) => {
            setCursos(data);
        });
    }

    function deletarCurso(id) {
        const deletar = confirm("Tem certeza que desja excluir esse curso?");
        if (deletar) {
            deleteCurso(id).then((resposta) => {
                toast.success(resposta.message);
                carregarCursos();
            });
        }
    }

    useEffect(() => {
        carregarCursos();
    }, []);

    return (
        <main className="mt-4 mb-5 container">
            <div className="topo">
                <h1>Cursos</h1>
                <Button className="p-2" as={Link} to="/cursos/novo">
                    Adicionar Curso
                </Button>
            </div>
            <hr />
            {cursos ? (
                <Table variant="dark">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Turno</th>
                            <th>Data Início</th>
                            <th>Professor</th>
                            <th>Contato</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cursos.map((curso) => {
                            return (
                                <tr key={curso.id}>
                                    <td>{curso.nome}</td>
                                    <td>{curso.turno}</td>
                                    <td>{curso.dataInicio}</td>
                                    <td>{curso.professor.nome}</td>
                                    <td>{curso.professor.email}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="me-1"
                                            onClick={() =>
                                                deletarCurso(curso.id)
                                            }
                                        >
                                            Excluir
                                        </Button>
                                        <Button
                                            size="sm"
                                            as={Link}
                                            to={`/cursos/editar/${curso.id}`}
                                        >
                                            Editar
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                <Loader />
            )}
        </main>
    );
}

export default Cursos;
