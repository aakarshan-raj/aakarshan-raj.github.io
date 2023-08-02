import styles from "./styles.module.css"
import arch from './imgs/img1.jpg'
export const ShowFourRust = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Making a Chat Server in Rust using Tokio</h1>
          <hr></hr>
            <div className={styles.content}>
        
        <h1>TCP Chat server
using tokio </h1>

<h2>Tokio is a runtime for writing asynchronous code in Rust, it is particularly useful for building highly scalable and efficient network applications, servers, clients, and other I/O-bound programs.</h2>
            <h2>Installing Tokio</h2>
            <h2>add this in cargo.toml below dependecies</h2>
<h2>{tokio}</h2>
<h2>We will get an error `main has invalid return type Future`
by default rust can generate Futures(A value we dont know yet), but it cannot handle it cause Future's are not built into Rust.
That's why we need tokio</h2>
        <h2>`#[tokio::main]`</h2>
<h2>it will makes our function run asynchronously, and it can use as</h2>
<div className={styles.code_background}>
  <h2>{code_1}</h2>
</div>
         <h2>What we want to build is described in this image. A server that has Multiple client and it forwards any message to all the clients. To start we will build a Echo Server first</h2>
          <div className={styles.img_container}>
          <img src={arch} className={styles.responsive_image}/>
          </div>
          <h2>Making a TCP Echo Server</h2>
          <ul>
<h2>1. Server is binded to an PORT</h2>
<h2>2. A client sends a message</h2>
<h2>3. server will receive it and return it back</h2>
</ul>
<h2>we have to bind to the port first, so the server is listening to any requests on that port.
we can do it using 
`TcpListener::bind("localhost:8080")`
this will return a Future, which as a result, to get to that result we need to use await keyword. it will suspend the function untill the future is resolved(we have a value).
The result will contain a TcpListner and error, to access the TcpListner use `unwrap()`.</h2>
          <h2>After binding we need to start accepting the incoming connections, 
`.accept()` returns a future containing a result that result contains a tuple that contains a TcpStream(socket) and SocketAddr(struct with socket address).
both are iimportant information about a connection that we will need.</h2>
          <div className={styles.code_background}><h2>{code_2}</h2></div>

<h2>this will create a simple listner, it will run till it gets a connection and then print information about the connection and just end. </h2>
<h2>To test it use telnet: `telnet localhost 8080`
or your browser, or anything that can make a request to a server.</h2>

<h2>NOTICE: when we print the addr which is a SocketAddr type, the port will be different cause: Its an ephemeral port, a random port assigned by client OS.</h2>
<h2>now we have the socket and we can do all sorts of things with it.
we can use `.write()` to send stream of bytes to it and many other things.</h2>
<h2>to read something from client
we can read using `.read()` on the socket, it accepts a buffer of u8</h2>

<div className={styles.code_background}><h2>{code_3}</h2></div>
<h2>we create a buffer that is of size of 1 kb, initialise it with 1024 0's.
then we pass it to `read()` and anything sent by the client will be read in it.
it returns the size of data read, using this info we can print the number of characters.
</h2>
<h2>the size will usually be +2 of whatever you send, 2 extra characters will be \r(return) and \n(newline) 
</h2>
<h2>after that we can simple print the buffer.
To send data to the server: `telnet localhost 8080`
after that write anything and it will be sent.
</h2>
<h2>if we read it , we will get a array of 1024 elements, with each letter as ascii code in it. to print the acutal words we will use from_utf8_lousy() that takes a reference to mutable [u8] and gives us a string:</h2>
<div className={styles.code_background}><h2>{code_4}</h2></div>
<h2>i am looping through so i dont have to run this program everytime a request is made and the program closes.</h2>
<h2>To write to a socket we can have many functions such as write() , write_all(), write_all_buf().
we can use write() for right now.</h2>

<div className={styles.code_background}><h2>{code_5}</h2></div>
<h2>this works as a simple echo server.

the program runs binds to a address and then executes a infinite loop in which it accepts connections and read from them and write to them.</h2>
            <h2>we can change our buffer type and use BufReader as it is recommended.
It was basically designed for networking related read operations, as every time we call read function on the socket it results in a system call.</h2>
       <h2>on rust doc: The `BufReader`struct adds buffering to any reader.`here the reader will be our socket before doing it we will split our socket into a read part and write part using `socket.split()` because BufReader will take ownership of the socket, so we will just give it ownership of the read part.</h2>
            <h2>the code within loop also matters if the loop starts after we accept a connection, then we can only have on connection, rn we can have many conections but they will close as soon we receive our echo message. That raises a question, what we are doing, is it really asyc?

This is the modified code:</h2>
<div className={styles.code_background}><h2>{code_6}</h2></div>
            <h2>What we are doing differently.</h2>
<ul>
  <h2>1. Spliting the socket into two parts, one for reading and one for writing.</h2>
  <h2>2. Using a BufReader and a String, instead of a [u8].</h2>
  <h2>3. using read_lines of BufReader instead of `.read()` on Socket</h2>
  <h2>4. using splited write to write to socket.</h2>

</ul>

<h2>Main difference is using read_lines instead of read
before we were calling read on socket to read any data from socket, now the reader(socket) is used through BufReader, which with help of read_line reads whatever is in socket to a string</h2>
<h2>Socket as the data that was sent from client, we called read to read that data to a [u8], now we are using socket in BufReader that calls its function read_line to read socket data into a string</h2>
        
        
        <h2>
So whatever we are doing can be easily done without using Tokio, we are not using any main Tokio functionality.
</h2>
        
        <h2>here is the code without tokio, that does same stuff</h2>
<div className={styles.code_background}><h2>{code_7}</h2></div>
            </div>
             </div>
          </div>
        </div>
      );
}

const tokio = `tokio = {version = "1", features= ["full"]}`;
const code_1 = `#[tokio::main]
async fn main() {
    println!("Hello, world!");
}`;
const code_2 = `let listner = TcpListener::bind("localhost:8080").await.unwrap();
    
let (socket,addr) = listner.accept().await.unwrap();

println!("{:?} {:?}",addr,socket);

`;
const code_3 = `let mut buffer = [0u8;1024];
let size = socket.read(&mut buffer).await.unwrap();`;

const code_4 = `let listner = TcpListener::bind("localhost:8082").await.unwrap();
loop {
let (mut socket,addr) = listner.accept().await.unwrap();

let mut buffer = [0u8;1024];

let size =  socket.read(&mut buffer).await.unwrap();


println!("numbe of chars read:{}",size);
println!("{:?}",String::from_utf8_lossy(&mut buffer[..size]));
}`;

const code_5 = `
async fn main() {

    let listner = TcpListener::bind("localhost:8082").await.unwrap();
    loop {
    let (mut socket,_addr) = listner.accept().await.unwrap();

    let mut buffer = [0u8;1024];

    let size =  socket.read(&mut buffer).await.unwrap();
    socket.write(&mut buffer).await.unwrap();

    println!("Message>{}",String::from_utf8_lossy(&mut buffer[..size-2]));
    }

}`;

const code_6 = `async fn main() {

  let listner = TcpListener::bind("localhost:8030").await.unwrap();
  loop{
  let (mut socket,_addr) = listner.accept().await.unwrap();
 
  let ( read,mut write) = socket.split();

  let mut buffer = BufReader::new(read);
  let mut lines = String::new();

  let size = buffer.read_line(&mut lines).await.unwrap();
  write.write(&mut lines.as_bytes()).await.unwrap();

  print!("Message>{}",lines);
  }
}`;

const code_7 =  `async fn main() {
  let listner = TcpListener::bind("localhost:8030").unwrap();
  loop {
      let (mut socket, _addr) = listner.accept().unwrap();

      let mut buffer = BufReader::new(socket);
      let mut lines = String::new();

      let size = buffer.read_line(&mut lines);
      let mut socket = buffer.into_inner();
      socket.write_all(lines.as_bytes()).unwrap();

      print!("Message>{}", lines);
  }
}`;