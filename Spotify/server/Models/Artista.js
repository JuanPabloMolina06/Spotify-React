import mongoose from "mongoose";

const artistasSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true}
})

const artista = mongoose.model('Artista', artistasSchema);

export default artista;