const addSubject =(req,res)=>{
    let subData = {subname:"NODE",type:"web"};
    res.status(200).json({Data:subData}); 
}
export default addSubject;