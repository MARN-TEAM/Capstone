module.exports={
    getQa:(req,res)=>{
        res.status(200).send('test')
    },
    postQa: (req, res) => {
        res.send("QA")
    }
}