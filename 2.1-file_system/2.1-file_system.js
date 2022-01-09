const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const fileOps = async () => {
  try {
    // 1
    await fsPromises.writeFile(
      path.join(__dirname, "originTextFile.txt"),
      "Created new text file"
    );
    // 2
    await fsPromises.copyFile(
      path.join(__dirname, "originTextFile.txt"),
      path.join(__dirname, "copyTextFile.txt")
    );
    // 3
    await fsPromises.rename(
      path.join(__dirname, "copyTextFile.txt"),
      path.join(__dirname, "copyAndRenameTextFile.txt")
    );
    // 4
    fs.readdir(__dirname, (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
    // 5
    await fsPromises.unlink(path.join(__dirname, "originTextFile.txt"));
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// 2
