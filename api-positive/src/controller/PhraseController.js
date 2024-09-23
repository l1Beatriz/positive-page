import phrases from "../model/PhraseModel.js";


class PhraseController {

    static async index(req, res) {
        try {
            res.status(200).json("API ON-LINE");
        } catch(error) {
            res.status(500).json({
                message: `${error.message} - falha na requisição`
            })
        }
    }
    
    static async findPhrase(req, res) {
        try {
            const resultPhrase = await phrases.find();
            res.status(200).json(resultPhrase);
        } catch(error) {
            res.status(500).json({
                message: `${error.message} - falha na requisição`
            })
        }
    }

    static async registerPhrase(req, res) { 
        try {           
            let pointer = await phrases.find().sort({_id: -1}) 
            if (pointer.length == 0) {
                pointer = 0
            } else {
                pointer = parseInt(pointer[0]["_id"]) + 1
            }
    
            req.body._id = pointer
    
            const newPhrase = await phrases.create(req.body);
            res.status(201).json({
                message: "nova frase cadastrada",
                phrase: newPhrase
            })
        } catch(error) {
            res.status(500).json({
                message: `${error.message} - falha ao registrar frase`
            })
        }
  
    }

    static async changePhrase(req, res) {
        try {
            const id = req.params.id;
            await phrases.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "frase atualizada",
            })
        } catch(error) {
            res.status(500).json({
                message: `${error.message} - erro na atualização da frase`
            })
        }
    }

    static async deletePhrase(req, res) {
        try {
            const id = req.params.id;
            await phrases.findByIdAndDelete(id, req.params);
            res.status(200).json({
                message: `frase ${id} deletada com sucesso!`
            })
        } catch(error) {
            res.status(500).json({
                message: `${error.message} - erro na atualização da frase`
            })
        }
    }
  
}

export default PhraseController;