import axios from "axios";

export async function getAlunos() {
    const response = await axios.get("http://localhost:3000/alunos");
    return response.data;
}

export async function getAluno(id) {
    const response = await axios.get(`http://localhost:3000/alunos/${id}`);
    return response.data;
}

export async function postAluno(data) {
    const response = await axios.post(
        "http://localhost:3000/registraralunos",
        data
    );
    return response.data;
}

export async function editAluno(id, data) {
    const response = await axios.put(
        `http://localhost:3000/editaralunos/${id}`,
        data
    );
    return response.data;
}

export async function deleteAluno(id) {
    const response = await axios.delete(
        `http://localhost:3000/removeralunos/${id}`
    );
    return response.data;
}
