const StudentApplicationQ = require('../models/StudentFaq')

module.exports = {

    getAll: async (req,res) => {

        try{
            const studentQuestions = await StudentApplicationQ.find()
            res.json(studentApplyFaq)

        } catch (err){
            res.json({message: err})
        }

    },

    getOne: async (req,res) => {

        try{
            const  studentQuestion = await StudentApplicationQ.findById(req.params.questionId)
            res.json(studentFaq)
        } catch (err) {
            res.json({message: err})
        }

     },

     create: async (req,res) => {

        const question = new StudentApplicationQ (req.body)
        try{
            const savedQuestion = await StudentApplicationQ.create(question)
            res.json(savedQuestion)
        } catch (err) {
            res.json({message: err})
        }


     },

     delete: async(req,res) => {
        try{
            const deleteQuestion = await StudentApplicationQ.deleteOne({
                _id: req.params.questionId,

            })
            res.json(deleteQuestion)
        } catch (err) {
            res.json({message: err})
        }
     },

     update: async(req,res) => {
        try{
            const updatequestion = await StudentApplicationQ.updateOne(
                {_id: req.params.questionId},
                {$set: req.body}
            )

            res.status(200).json({
                message: 'Question Updated',
            })

        }catch (err) {
            this.res.json({message:err})
        }
     },
}

     