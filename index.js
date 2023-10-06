const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


// function superbowlWin(years){
//     const winYear = years.find(win =>win.result ==="W");
//     if (winYear){
//         return winYear.year;
//     } else {
//         return undefined;
//     }
// }



    
function superbowlWin(years){
    const winYear = years.find(win=> win.result==="W");
    if (winYear){
        return winYear.year
    } else {
        return undefined
    }

}


    
  

