function LawfulAge(params) {
    let date = params[0].split('-');
    let day = ("0" + date[0]).slice(-2);
    let month = ("0" + date[1]).slice(-2);
    let year = Number(date[2]) + 18;
    console.log(`${day}-${month}-${year}`);
}