import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const getExam = async (examID) =>{
    const response = await axios.get(`${BASE_URL}/exam/${examID}`);
    const examData = response.data.exam;
    const preguntasMultiple = examData.Pregunta_opcion_multiple.map((e)=>{return({
        tipo: "multiple",
        pregunta: e
    })})
    const preguntasMatch = examData.Pregunta_match.map((e)=>{return({
        tipo: "match",
        pregunta: e
    })})
    const examTemplate = {
        id: examData._id,
        preguntas: sortRandom([...preguntasMultiple, ...preguntasMatch])
    }
    return (examTemplate);
}

export const sortRandom = (Answers) => {
    return [...Answers].sort(() => Math.random() < 0.5 ? 1 : -1);
}