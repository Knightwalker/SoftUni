function solve(path) {

  let indexStart = path.lastIndexOf("\\");
  let file = "";
  let fileName = "";
  let extensionName = "";
  
  for (let i = indexStart + 1; i < path.length; i++) {
    file += path[i];
  }

  let indexStartExtension = file.lastIndexOf(".");

  for (let i = 0; i < indexStartExtension; i++) {
    fileName += file[i];
  }

  for (let i = indexStartExtension + 1; i < file.length; i++) {
    extensionName += file[i];
  }

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extensionName}`);

}

solve("C:\\Internal\\training-internal\\Template.pptx");