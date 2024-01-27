const fs = require("fs");

const filePath = "./ivsite.files.json";

try {
  const dataArray = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (let i = 0; i < dataArray.length; i++) {
    const data = dataArray[i];
    data.id = i + 1;

     delete data.id;
     delete data._id;
   
  }
  fs.writeFileSync(filePath, JSON.stringify(dataArray, null, 2));
  console.log("File content replaced successfully.");
} catch (error) {
  console.error("Error:", error.message);
}
