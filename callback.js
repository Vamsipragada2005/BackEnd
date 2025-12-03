function getUserDetails(id,getUserSubjects){
    console.log("getting user Details by id",id);
    getUserSubjects({userRoll:"12B7"})

}
function getUserSubjects(userRoll,getUserMarks){
    console.log("Getting user subjects by roll number", userRoll);
    getUserMarks({subid:"mat-1"})
}
function getUserMarks(userSubId){
    console.log("gettig user marks by subid",userSubId);
}

getUserDetails("123",function(userRoll){
    getUserSubjects(userRoll,function(userSubId){
        getUserMarks(userSubId)
    })
});
