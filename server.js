//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];

users		=	[];
connections	=	[];

router.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

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
      // data.username,
      // data.message
			// console.log(data);

  		io.sockets.emit('new message', {msg:data, user: socket.username, socket: socket.id});
  	});
    // Already loging user
    socket.on('setlog', function(data, callback){
      callback(true);
      socket.username = data;
      users.push({socket: socket.id, username: socket.username});
      updateUsernames({socket: socket.id, username: socket.username});
    });
  	// New user
  	socket.on('new user', function(data, callback){
  		callback(true);
  		socket.username	=	data;
      // users.push(socket.username);
  		users.push({socket: socket.id, username: socket.username});
  		// updateUsernames(socket.username);
  		updateUsernames({socket: socket.id, username: socket.username});
      // console.log(socket);
  	});

    socket.on('is-typing', function(data){
       io.sockets.emit('is-typing-client', {socket: socket.id, username: data.username});
    })

  	function updateUsernames(sinuser){
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
