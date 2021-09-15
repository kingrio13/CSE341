const fs = require('fs');

const requestHandler = (req,res) =>{
const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Prove 01</title></head>');
    res.write('<body>')
    res.write(
        '<h1>Welcome to Prove 01</h1>'
      );
     
    res.write('<form action="/create-user" method="POST"><input type="text" name="createuser" placeholder="Create User"><button type="submit">Send</button></form>');  
    res.write('<a href="/users">User List</a>');
    res.write('</body>');    

    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {




    let userlist="";
    fs.readFileSync('user.txt','utf8').split("\n").forEach((user)=>{
       if(user.length>1){
        userlist += "<li>" + user + "</li>";
       }
        
    })


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body>');
    res.write('<a href="/">Go Back</a>');


    res.write('<h1>List of Users</h1>');
    

  
    if(userlist.length<1){
        res.write('<b> No User Found</b>');
        
    }
    else{
        res.write(userlist);
    }


    res.write('</body>');
    res.write('</html>');
    return res.end();

  


    
  
  }

  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
   

      const user=parsedBody.split('=')[1];
      console.log(user);

      //fs.writeFile('/user.txt', user+'\n', { flag: 'a+' }, err => {});
      //https://nodejs.dev/learn/writing-files-with-nodejs


    fs.appendFile('user.txt',user+'\n',err=>{});


    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
}

module.exports = requestHandler;