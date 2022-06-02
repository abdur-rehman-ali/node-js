import * as fs from 'fs/promises';

// console.log(fs);

//Creating directory - path should be there
try {
    await fs.mkdir('/Users/dev/Documents/Node JS/3.FileSystem-PromiseAPI/dummy/back')
    console.log('Directory created');
} catch (error) {
    console.log(error);  
}


//Creating directory - path is not requires to be there
try {
    await fs.mkdir('/Users/dev/Documents/Node JS/3.FileSystem-PromiseAPI/dummy1/back1',{recursive:true})
    console.log('Directory created');
} catch (error) {
    console.log(error);  
}

//Read content of directory
try {
    const files = await fs.readdir('/Users/dev/Documents/Node JS/3.FileSystem-PromiseAPI/dummy1');
    console.log(files);
    for (const file of files) {
        console.log(file);
    }    
} catch (error) {
    console.log(error);
}

//Remove content of directory
try {
    const files = await fs.rmdir('/Users/dev/Documents/Node JS/3.FileSystem-PromiseAPI/dummy1/back1');
    console.log('Directory removed...');
    
} catch (error) {
    console.log(error);
}

//Create and write file
try {
    await fs.writeFile('dummy.txt','Hello dear joiya')
} catch (error) {
    console.log(error);   
}

//Read data from file
try {
    const data = await fs.readFile('dummy.txt','utf-8')
    console.log(data);
} catch (error) {
    console.log(error);   
}

//Append data to file
try {
    await fs.appendFile('dummy.txt','Appended data')
    
} catch (error) {
    console.log(error);  
}

//copy file
try {
    await fs.copyFile('dummy.txt','copy.txt')
    
} catch (error) {
    console.log(error);  
}