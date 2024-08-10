import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postAluno } from "../api/alunos";
import { useEffect, useState } from "react";
import { getCursos } from "../api/cursos";

function NovoAluno() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const [cursos, setCursos] = useState([]);

    function salvarAluno(data) {
        postAluno(data)
            .then((resposta) => {
                toast.success(resposta.message);
                navigate("/alunos");
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    }

    function carregarCurso() {
        getCursos().then((dados) => {
            setCursos(dados);
        });
    }

    useEffect(() => {
        carregarCurso();
    }, []);

    return (
        <main className="mt-4 mb-4 container">
            <h1>Novo curso</h1>
            <hr />
            <form onSubmit={handleSubmit(salvarAluno)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.nome && (
                        <small className="text-danger">
                            O nome é inválido!
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="form-control"
                        {...register("email", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.email && (
                        <small className="text-danger">
                            A email é inválido!
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        className="form-control"
                        {...register("telefone", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.telefone && (
                        <small className="text-danger">
                            O telefone é inválido!
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="responsavel">
                        Nome do responsável se for menor de idade
                    </label>
                    <input
                        type="text"
                        id="responsavel"
                        className="form-control"
                        defaultValue="Maior de 18 anos"
                        {...register("responsavel")}
                    />
                </div>
                <div>
                    <label htmlFor="cursoId">Curso</label>
                    <select
                        className="form-select"
                        defaultValue={""}
                        {...register("cursoId", {
                            required: true,
                            valueAsNumber: true,
                        })}
                    >
                        <option value="" disabled>
                            Selecione um curso
                        </option>
                        {cursos.map((curso) => {
                            return (
                                <option key={curso.id} value={curso.id}>
                                    {curso.nome} - {curso.turno}
                                </option>
                            );
                        })}
                    </select>
                    {errors.cursoId && (
                        <small className="text-danger">
                            Selecione um curso!
                        </small>
                    )}
                </div>
                <Button className="mt-4" type="submit">
                    Cadastrar
                </Button>
            </form>
        </main>
    );
}

export default NovoAluno;
