module.exports = (req,res,next)=>{
    if(req.cookies.cookies){
        req.session.user = req.cookies.cookies;
    }
    next()
}