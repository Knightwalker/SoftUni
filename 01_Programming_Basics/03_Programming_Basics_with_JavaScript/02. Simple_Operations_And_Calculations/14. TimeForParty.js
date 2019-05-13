function TimeForParty(params) {
    let date = params[0].split('-');
    let day = Number(date[0]);
    let month = Number(date[1]);
    let year = Number(date[2])
    let dayOfTheWeek = new Date(`${month}/${day}/${year}`).getDay();
 
    switch (dayOfTheWeek) {
        case 0: console.log('No party tonight! Today is: Sunday'); break;
        case 1: console.log('No party tonight! Today is: Monday'); break;
        case 2: console.log('No party tonight! Today is: Tuesday'); break;
        case 3: console.log('No party tonight! Today is: Wednesday'); break;
        case 4: console.log('No party tonight! Today is: Thursday'); break;
        case 5: console.log('Party night! Today is: Friday'); break;
        case 6: console.log('Party night! Today is: Saturday'); break;  
    }
}