import axios from "axios";

export async function getCursos() {
    const response = await axios.get("http://localhost:3000/cursos");
    return response.data;
}

export async function getCurso(id) {
    const response = await axios.get(`http://localhost:3000/cursos/${id}`);
    return response.data;
}

export async function postCurso(data) {
    const response = await axios.post("http://localhost:3000/registrar", data);
    return response.data;
}

export async function editCurso(id, data) {
    const response = await axios.put(
        `http://localhost:3000/editar/${id}`,
        data
    );
    return response.data;
}

export async function deleteCurso(id) {
    const response = await axios.delete(`http://localhost:3000/remover/${id}`);
    return response.data;
}
