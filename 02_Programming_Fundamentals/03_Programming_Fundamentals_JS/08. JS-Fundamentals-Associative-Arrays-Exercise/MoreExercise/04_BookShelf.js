function solve(inputArr) {

  let map = new Map();

  for (let i = 0; i < inputArr.length; i++) {

    let tokens = [];
    if (inputArr[i].includes(" -> ")) {
      tokens = inputArr[i].split(" -> ");
      let id = tokens[0];
      let genre = tokens[1];

      if (!map.has(id)) {
        let submap = new Map();
        submap.set(genre, []);
        map.set(id, submap);
      } 

    } else {
      tokens = inputArr[i].split(": ");
      let bookTitle = tokens[0];

      tokens = tokens[1].split(", ");
      let author = tokens[0];
      let genre = tokens[1];

      let bookWithAuthor = bookTitle + ": " + author;

      for (let kvp of map) {
        if (kvp[1].has(genre)) {
          let arr = kvp[1].get(genre);
          arr.push(bookWithAuthor);

          arr = arr.sort(function(a,b){
            let booksTitleA = a.split(": ")[0];
            let booksTitleB = b.split(": ")[0];
            return booksTitleA.localeCompare(booksTitleB);
          });          

          kvp[1].set(genre, arr);
        }
      }

    }

  }

  let sortedArr = Array.from(map).sort(function(a, b) {
    let innerA = a[1];
    let innerB = b[1];
    let innerAC = 0;
    let innerBC = 0;
    for (let item of innerA) {
      innerAC = item[1].length;
    }
    for (let item of innerB) {
      innerBC = item[1].length;
    }

    if (innerAC > innerBC) {
      return -1;
    } else {
      return 1;
    }

  });

  //console.log(sortedArr);

  for (let map of sortedArr) {
    let mapId = map[0];
    let mapShelf = "";
    let mapBooks = [];

    for (let map2 of map[1]) {
      mapShelf = map2[0];
      mapBooks = map2[1];
    }

    console.log(`${mapId} ${mapShelf}: ${mapBooks.length}`);
    for (let i = 0 ; i < mapBooks.length; i++) {
      console.log(`--> ${mapBooks[i]}`);
    }
  }

}

solve([
  '1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history'
]
);