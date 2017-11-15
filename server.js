//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http    =   require('http');
var path    =   require('path');


var async   =   require('async');
var socketio=   require('socket.io');
var express =   require('express');
// var mysql   =   require('mysql');

var router  = express();
var server  = http.createServer(router);
var io      = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages  = [];
var sockets   = [];

users         = [];
connections   = [];

// var connectionsmsql = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database : 'samplenodedb'
// });

router.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

router.get('/chat', function(req, res){
    res.sendFile(__dirname + '/chatroom.html');
});

// router.get('/login', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected : %s socket connected', connections.length)
    socket.on('disconnect', function(data){
        if (!socket.username) return;
        users.splice(users.indexOf(socket.username),1);
        updateUsernames();
        // Disconnection
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected : %s socket connected', connections.length)
    });

    socket.on('send message', function(data){
        console.log(data);
        io.sockets.emit('new message', {msg:data, user: socket.username, socket: socket.id, profileimg:profileimg});
    });
    
    // Already loging user
    socket.on('setlog', function(data, callback){
      callback(true);
      socket.username = data;
      registername    = data.username;
      registerprofile = data.profileimg;
      console.log(registerprofile);
      users.push({socket: socket.id, username: registername, profileimg: registerprofile});
      updateUsernames({socket: socket.id, username: registername, profileimg: registerprofile});
    });
    // New user
    socket.on('new user', function(data, callback){
        callback(true);
        socket.username =   data.username;


        registername    = data.username;
        registerpass    = data.userpass;
        registeremail   = data.useremail;
        profileimg      = data.profileimg;
        socket_id       = socket.id;
        var currentdate = new Date();
        var datetime    = currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/"
                        + currentdate.getFullYear() + "@"
                        + currentdate.getHours() + ":"
                        + currentdate.getMinutes();
                        
        // console.log(profileimg);
                        
        users.push({socket: socket.id, username: registername, profileimg: profileimg});
        // updateUsernames(socket.username);
        updateUsernames({socket: socket.id, username: registername, profileimg: profileimg});

        
        // connectionsmsql.connect(function(error){
        //     if (!!error) {
        //         console.log('Db not connected');
        //     }else{
        //         console.log('Db connected successfully');
        //         // registername    = data.username;
        //         // registerpass    = data.userpass;
        //         // registeremail   = data.useremail;
        //         // profileimg      = data.profileimg;
        //         // socket_id       = socket.id;
        //         // var currentdate = new Date();
        //         // var datetime    = currentdate.getDate() + "/"
        //         //                 + (currentdate.getMonth()+1)  + "/"
        //         //                 + currentdate.getFullYear() + "@"
        //         //                 + currentdate.getHours() + ":"
        //         //                 + currentdate.getMinutes();

        //         // users.push({socket: socket.id, username: socket.username, profileimg: profileimg});
        //         // // updateUsernames(socket.username);
        //         // updateUsernames({socket: socket.id, username: socket.username, profileimg: profileimg});
        //         // var sql = "INSERT INTO users (user_name, profile_image, socket_id, registered, password,email) VALUES ?";

        //         // var values = [[registername,profileimg,socket_id,datetime,registerpass,registeremail]];

        //         // connectionsmsql.query(sql, [values], function (err, result) {

        //         // if (err) throw err;
        //         //     console.log("Number of records inserted: " + result.affectedRows);
        //              // users.push({socket: socket.id, username: socket.username, profileimg: profileimg});
        //              // // updateUsernames(socket.username);
        //              // updateUsernames({socket: socket.id, username: socket.username, profileimg: profileimg});
        //         // });
        //     }
        // });
      // console.log(socket);
    });

    socket.on('is-typing', function(data){
       io.sockets.emit('is-typing-client', {socket: socket.id, username: data.username});
    })

    // socket.on('get users', function(data){
    //     connectionsmsql.connect(function(error){
    //         if (!!error) {
    //             console.log('Db not connected');
    //         }else{
    //             con.query('SELECT * FROM employees',function(err,rows){
    //             if(err) throw err;
    //                 console.log('Data received from Db:\n');
    //                 console.log(rows);
    //             });
    //         }
    //     }
    // })

    function updateUsernames(sinuser){
        console.log(users);
        io.sockets.emit('get users', users);
        io.sockets.emit('get single user', sinuser);
    }
    // console.log(users);
  });

// function updateRoster() {
//   async.map(
//     sockets,
//     function (socket, callback) {
//       socket.get('name', callback);
//     },
//     function (err, names) {
//       broadcast('roster', names);
//     }
//   );
// }

// function broadcast(event, data) {
//   sockets.forEach(function (socket) {
//     socket.emit(event, data);
//   });
// }

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
