import fs from 'fs';

// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return
//     }

//     // console.log('File content:', data);
// })

// const fileContents = fs.readFileSync('./test.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return
//     }

//     return data
// })

// console.log(fileContents)

const data = "\n4345354454 54353435435"


// fs.writeFile('./new.txt', data, (err) => {
//     if (err){
//         console.error('Error writing file:', err);
//         return
//     }

//     console.log("File written successfully");
// })

// fs.appendFile('./test.txt', data, (err) => {
//     if (err){
//         console.error('Error appending file:', err);
//         return
//     }

//     console.log("File appended successfully");
// }
// )

const fileExists = fs.existsSync('./test.txt', (err) => err ? false : true)

// fs.unlink('./new.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err);
//         return
//     }

//     console.log("File deleted successfully");
// }
// )

// fs.mkdir('./newDir', (err) => {
//     if (err) {
//         console.error('Error creating directory:', err);
//         return
//     }

//     console.log("Directory created successfully");
// }
// )

// fs.rmdir('./newDir', (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);
//         return
//     }

//     console.log("Directory deleted successfully");
// }
// )

// fs.rename('./test.txt', './edited.txt', (err) => {
//     if (err) {
//         console.error('Error renaming file:', err);
//         return
//     }

//     console.log("File renamed successfully");
// }
// )

// fs.readFile('./edited.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return
//     }

//     fs.writeFile('./copy.txt', data, (err) => {
//         if (err) {
//             console.error('Error writing file:', err);
//             return
//         }

//         console.log("File written successfully");
//     })
// })

fs.watch('./edited.txt', (eventType, filename) => {
    console.log(eventType)
}
)