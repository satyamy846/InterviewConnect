const titlemodel = require('../models/title');

const titleController = {
    async posttitle(req, res) {

        try {
            const data = await titlemodel.create({
                tagname: req.body.tagname,
                level: req.body.level,
                questions: req.questions._id,
                catagory: req.catagory._id,
            });
            // add one flash message also
            res.status(201).json({ message: "title successfully posted", data: data });

        }
        catch (err) {
            console.log(err);
        }
    },
    async gettitle(req, res) {
        try {
            const data = await titlemodel.find({});
            res.status(201).json({ data: data });
        }
        catch (err) {
            console.log(err);
        }
    },
    async updatetitle(req, res) {
        const id = req.params.id;
        try {
            const newrecord = {
                tag: req.body.tag,
                qname: req.body.qname,
                answer: req.body.answer,
                photo: req.body.photo,
            }
            const data = await titlemodel.findByIdAndUpdate({ _id: id }, newrecord);
            res.status(201).json({ data: data });
        }
        catch (err) {
            console.log(err);
        }
    },
    async deletetitle(req, res) {
        const id = req.params.id;
        try {
            await titlemodel.findByIdAndRemove({ _id: id });
            res.status(201).json({ message: "record is deleted" });
        }
        catch (err) {
            console.log(err);
        }
    }

}

module.exports = titleController;