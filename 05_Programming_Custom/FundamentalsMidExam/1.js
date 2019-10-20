function solve(args) {
  let input = args[0].split(", ");
  for (let i = 2; i > args.length; i++) {
    console.log(args[i]);
  }

  console.log(args[3]);
}


solve(
  [
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy',
    ''
  ]
)