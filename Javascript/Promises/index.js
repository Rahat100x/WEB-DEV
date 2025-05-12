import * as fs from "fs";

function readFileWithPromise(fillpath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(fillpath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}
function writeFileWithPromise(fillpath, content) {
  return Promise((resolve, rejects) => {
    fs.writeFile(fillpath, content, (err) => {
      if (err) {
        rejects(err);
      } else {
        resolve();
      }
    });
  });
}
function unlinkFileWithPromise(fillpath) {
  return new Promise((resolve, rejects) => {
    fs.unlink(fillpath, (err) => {
      if (err) {
        rejects(err);
      } else {
        resolve();
      }
    });
  });
}

readFileWithPromise("./hello.txt", "utf-8")
  .then((content) => writeFileWithPromise("./hello.tx", content))
  .then(() => unlinkFileWithPromise("./backup.txt"))
  .catch((e) => console.log("Error", e))
  .finally(() => console.log("All Done"));

function wait(seconds) {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(),seconds * 1000);
    })
}  

async function doTask() {
  try {
    const fileContent = await readFileWithPromise("./hello.txt", "utf-8");
    await writeFileWithPromise("./hello.tx", fileContent);
    await wait(10);
    await unlinkFileWithPromise("./backup.txt");
  } catch (e) {
    console.log("Error", e);
  } finally {
    console.log("All Done!");
  }
}

doTask().then(() => console.log("All Done"));

console.log("Starting Program");

fsv2
   .readFile('./hello.txt', 'utf-8')
   .then((content) => fsv2.writeFile('backup.txt',content))
   .then(() => fsv2.unlink('./hello.txt'))
   .catch((err) => console.log('Error',err));

fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log("Error in file reading", err);
  } else {
    console.log("File Reading Success", content);
    fs.writeFile("backup.txt", content, function (err) {
      if (err) {
        console.log("Error in writing backup.txt", err);
      } else {
        fs.unlink("./hello.txt", function (e) {
          if (e) {
            console.log("Error deleting file");
          } else {
            console.log("File delete success");
          }
        });
      }
    });
  }
});

sum(2, 5, (value) => {
  console.log(value);
});

console.log("End of Program");

function sum(a, b, calback) {
  setTimeout(() => {
    calback(a + b);
  }, 5 * 1000);
}
