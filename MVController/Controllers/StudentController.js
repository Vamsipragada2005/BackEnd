const getStudents =(req,res)=>{
    let stdData = {name:"vamsi",rollno:"12B7"};
    console.log(stdData,"djfjdlfkjdkljdklfj");
    
    res.status(200).json({stdData});
}

export default getStudents;