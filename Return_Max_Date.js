const maxDate = (dates) => {
  dates.slice(1).reduce((acc, next)=>{
    const date = new Date(next);
    return acc > date ? acc : date;
 
  }, new Date(dates[0]));
  
}

const values = ['01/05/10','03/01/09','06/22/01','09/09/02','10/12/20'];
console.log(JSON.stringify(maxDate(values)));
