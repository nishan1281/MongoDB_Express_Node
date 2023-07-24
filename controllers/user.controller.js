const getallusers = (req, res)=>{
    res.status(200).json({
        message: "all users",
    });
};

module.exports = getallusers;