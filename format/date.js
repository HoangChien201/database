function GetMonth(date){
    const month=date.getMonth()+1 <10 ?`0${date.getMonth()+1}`:date.getMonth()+1 
    return `${date.getFullYear()}-${month}`;
}

function FormatDate(date){
    const day=date.substring(0,date.indexOf("-"))
    const month=date.substring(date.indexOf("-")+1,date.indexOf("-")+3);
    const year=date.substring(date.indexOf("-")+4)

    return `${year}-${month}-${day}`
}
function FormatMonth(date){
    const month=date.substring(0,date.indexOf("-"));
    const year=date.substring(date.indexOf("-")+1);

    return `${year}-${month}`
}
module.exports={GetMonth,FormatDate,FormatMonth};