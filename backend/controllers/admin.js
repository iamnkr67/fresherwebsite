const Admin = require('../model/adminSchema');
const Contestant = require('../model/contestantSchema');


const loginAdmin = async (req, res) => {
    let { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username, password });
        
        if (admin) {
            req.session.user = username
            const contestants = await Contestant.find();
            console.log(contestants);
            res.render('admin', { user:req.session.user,contestants });
        } else {
            res.status(400).json({ message: "Invalid Credentials" });
        }
    }
   catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = { loginAdmin };