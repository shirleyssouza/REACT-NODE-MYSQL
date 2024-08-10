import { useEffect, useState } from "react";
import { deleteAluno, getAlunos } from "../api/alunos";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Alunos() {
    const [alunos, setAlunos] = useState(null);

    function carregarAlunos() {
        getAlunos().then((data) => {
            setAlunos(data);
        });
    }

    function deletarAluno(id) {
        const deletar = confirm("Tem certeza que desja excluir esse aluno?");
        if (deletar) {
            deleteAluno(id).then((resposta) => {
                toast.success(resposta.message);
                carregarAlunos();
            });
        }
    }

    useEffect(() => {
        carregarAlunos();
    }, []);

    return (
        <main className="mt-4 mb-5 container">
            <div className="topo">
                <h1>Alunos</h1>
                <Button className="p-2" as={Link} to="/alunos/novo">
                    Adicionar aluno
                </Button>
            </div>
            <hr />
            {alunos ? (
                <Table variant="dark">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Responsável</th>
                            <th>Curso</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => {
                            return (
                                <tr key={aluno.id}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.telefone}</td>
                                    <td>{aluno.responsavel}</td>
                                    <td>{aluno.curso.nome}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            className="me-1"
                                            onClick={() =>
                                                deletarAluno(aluno.id)
                                            }
                                        >
                                            Excluir
                                        </Button>
                                        <Button
                                            size="sm"
                                            as={Link}
                                            to={`/alunos/editar/${aluno.id}`}
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

export default Alunos;
