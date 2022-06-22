const AuthorModel = require("../Models/AuthorModel")

const CreateAuthor = async function (req, res) {
    try {
        data = req.body
        if (object.key(data).lenght===0) {
            return res.status(400).send({ status: true, msg: "body couldnot be empty" })
        }
        if (!data.firstName) {
            return res.status(400).send({ status: false, nsg: "first name should be present" })
        }
        if (!data.LastName) {
            return res.status(400).send({ status: false, nsg: "Last name should be present" })
        }

        if (!data.title) {
            return res.status(400).send({ status: false, nsg: "title should be present" })
        }

        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        let testmails = data.email
        let emailvalidation = regex.test(testmails)
        if (!emailvalidation) {
            return res.status(400).send({ status: false, msg: "enter a valid email id" })
        }

        const Enum = ["Mr", "Mrs", "Miss"]
        let incluedes = data.title
        let enums = Enum.includes(incluedes)
        if (!enums) {
            return res.status(400).send({ status: false, msg: "title should be from Mr Mrs Miss " })
        }
        let CreateAuthor = await AuthorModel.create(data)
        return res.status(201).send({ msg: true, data: CreateAuthor })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
}


module.exports.CreateAuthor = CreateAuthor
