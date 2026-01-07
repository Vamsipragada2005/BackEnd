
const TestingApi = (req,res)=>{
    return res.status(200).json('this is a method');
}

const funn = (req,res)=>{
    res.send("funnnnnn....");
}
export {TestingApi,funn};