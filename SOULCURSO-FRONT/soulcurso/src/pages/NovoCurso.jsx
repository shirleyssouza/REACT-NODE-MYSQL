import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postCurso } from "../api/cursos";

function NovoCurso() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    function salvarCurso(data) {
        postCurso(data)
            .then((resposta) => {
                toast.success(resposta.message);
                navigate("/cursos");
            })
            .catch((err) => {
                toast.error(err.response.data.message);
            });
    }

    return (
        <main className="mt-4 mb-4 container">
            <h1>Novo curso</h1>
            <hr />
            <form onSubmit={handleSubmit(salvarCurso)}>
                <div>
                    <label htmlFor="nome">Curso</label>
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
                    <label htmlFor="turno">Turno</label>
                    <select
                        className="form-control"
                        id="turno"
                        defaultValue={""}
                        {...register("turno", {
                            required: "Selecione um turno!",
                        })}
                    >
                        <option value="" disabled>
                            Selecione:
                        </option>
                        <option value="Manhã">Manhã</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noite">Noite</option>
                    </select>
                    {errors.turno && (
                        <small className="text-danger">
                            {errors.turno.message}
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="dataInicio">Data de início</label>
                    <input
                        type="date"
                        id="dataInicio"
                        className="form-control"
                        {...register("dataInicio", { required: true })}
                    />
                    {errors.dataInicio && (
                        <small className="text-danger">
                            A data é inválida!
                        </small>
                    )}
                </div>
                <div className="mt-5">
                    <label htmlFor="professor">Professor</label>
                    <input
                        type="text"
                        id="professor"
                        className="form-control"
                        {...register("professor.nome", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.professor?.nome && (
                        <small className="text-danger">
                            A nome é inválido!
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("professor.email", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.professor?.email && (
                        <small className="text-danger">
                            O email é inválido!
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        className="form-control"
                        {...register("professor.telefone", {
                            required: true,
                            maxLength: 200,
                        })}
                    />
                    {errors.professor?.telefone && (
                        <small className="text-danger">
                            O telefone é inválido!
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

export default NovoCurso;
