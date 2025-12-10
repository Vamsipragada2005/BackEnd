const getStudents =(req,res)=>{
    //get data from db
    let stdData = {name:"vamsi",rollno:"12B7"};
    res.status(200).json({Data:stdData});
}
export default getStudents;