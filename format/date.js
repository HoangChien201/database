function GetMonth(date){
    const month=date.getMonth()+1 <10 ?`0${date.getMonth()+1}`:date.getMonth()+1 
    return `${date.getFullYear()}-${month}`;
}

function Format(date){
    const day=date.substring(0,date.indexOf("-"))
    const month=date.substring(date.indexOf("-")+1,date.indexOf("-")+3);
    const year=date.substring(date.indexOf("-")+4)

    return `${year}-${month}-${day}`
}
module.exports={GetMonth,Format};