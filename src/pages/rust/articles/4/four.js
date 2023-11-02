import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import arch from './imgs/img1.jpg'
export const ShowFourRust = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Making a Chat Server in Rust using Tokio</h1>
          <hr></hr>

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
            <img src={arch} className={styles.responsive_image} />
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
          <h2>Core Tokio functionality will let us handle multiple client independently</h2>
          <h2>in our code the accpet is already in the loop, so we can handle multiple client already, but we have a problem, this program cannot handle multple client at the same time, for it we need concurrency. what it means is if one client connects, we cannot handle the next client at the same time.</h2>
          <h2>to do this we will use spawn() method and all the code that handles a client into it.</h2>
          <h2>Updated code:</h2>
          <div className={styles.code_background}><h2>{code_8}</h2></div>
          <h2>we are accepting connections and then we use tokio::spawn and pass a closure that will handle each client, we use `move` to pass the owership of socket, tokio::spawn will spawn a new async task within tokio runtime thread and will be mangaged by tokio runtime.</h2>
          <h2>Now our program can handle multiple client independtly.</h2>
          <h2>now working on chat server feature, what we need to do is what was happening in the first picture, each message from client will be broadcasted to each connected client.</h2>
          <h2>what we will need is a broadcast channel, a channel is used to pass messages between threads.</h2>
          <h2>A broadcast is `A multi-producer, multi-consumer broadcast queue. Each sent value is seen by all consumers.`</h2>
          <h2>To Make a channel we can use {code_14} this will return a sender and a receiver, x is the capacity.</h2>
          <h2>{code_13}</h2>
          <h2>using tx we can transmit any value sent by the client.
            tx.send(data), sends the data to all the client.
            now we need to recieve the data, for that we will use rx.recv(), it will get the messages.</h2>
          <h2>Updated Code:</h2>
          <div className={styles.code_background}><h2>{code_9}</h2></div>
          <h2>we need to clone the tx cause we are using it in loop and we clone tx throught calling subscribe on txx.
            with txx.send() we pass the message to the channel and just after that we receiver the message by calling .recv on the Receiver, then we write that message to the socket.
          </h2>
          <h2>the current code is very bugging when it comes to when it sends the message to other clients:</h2>
          <h2>For example: when we click enter that's when we receive any message in queue, and there is no order at all, why? cause we have written code in that way
            <br />The Order</h2>
          <ul>
            <h2>1. client sends message, we read it</h2>
            <h2>2. we pass it to Sender(txx)</h2>
            <h2>3. we pass it to reciever</h2>
            <h2>4. we send it to all the client</h2>
          </ul>
          <h2>Opeartion 1 and 3 are await , what we want is to run them at the same time and not with await</h2>
          <h2>we can use select! macro provided by tokio, that will run two async task concurrently at the same time.
          </h2>
          <h2>What we want to do first is: read from client and pass it to sender, then we want to recv it and send it to client, we can do it using select!. It takes a future and calls await on it and then we can do what we want</h2>
          <h2>Updated code:</h2>
          <div className={styles.code_background}><h2>{code_10}</h2></div>
          <h2>Tokio::select!{ }
            This is  used to concurrently wait for multiple asynchronous tasks or operations to complete. Both the expression can be ran concurrently, but only on block of code will run at once
            Its syntax is like this</h2>
          <div className={styles.code_background}><h2>{code_11}</h2></div>
          <h2>each patter and expression will a async operation for which we want to wait for it.</h2>
          <h2>here we are waiting for reading the message and then sending the message. its like match expression.</h2>
          <h2>Any operation completes first will execute the block code that it was, each expression returns a future</h2>
          <ul>
            <h2>1. buffer.read_line()</h2>
            <h2>2. rxx.recv()</h2>
          </ul>
          <h2>We still have a problem, the message we are sending is also received by us, its just echoing, which is not the behaviour we want.
            We can send the addr to in the broadcast and when we write the data, we can exclude it if the address is same in the broadcast when the send was called.
            here is the updated code</h2>
          <div className={styles.code_background}><h2>{code_12}</h2></div>
        </div>
      </div>
      <IssueBanner />
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

const code_7 = `async fn main() {
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

const code_8 = `async fn main() {
  let listner = TcpListener::bind("localhost:8080").await.unwrap();
  loop{
  let (mut socket, _addr) = listner.accept().await.unwrap();

  tokio::spawn(async move {

          let (read, mut write) = socket.split();

          let mut buffer = BufReader::new(read);
          loop {
              let mut lines = String::new();
              let size = buffer.read_line(&mut lines).await.unwrap();
              write.write(&mut lines.as_bytes()).await.unwrap();
              print!("Message>{}", lines);
          }
  });
}
}`;
const code_9 = `use tokio::{
  io::{AsyncBufReadExt, AsyncReadExt, AsyncWriteExt, BufReader},
  net::TcpListener,
  sync::broadcast,
};

#[tokio::main]
async fn main() {
  let listner = TcpListener::bind("localhost:8082").await.unwrap();
  let (tx, rx) = broadcast::channel::<String>(10);
  loop {
      let txx = tx.clone();
      let mut rxx = txx.subscribe();
      let (mut socket, _addr) = listner.accept().await.unwrap();

      tokio::spawn(async move {
          let (read, mut write) = socket.split();

          let mut buffer = BufReader::new(read);
          loop {
              let mut lines = String::new();
              let size = buffer.read_line(&mut lines).await.unwrap();
              txx.send(lines.clone()).unwrap();
              let msg = rxx.recv().await.unwrap();
              write.write(&mut msg.as_bytes()).await.unwrap();
              print!("Message>{}", lines);
          }
      });
  }
}`;
const code_10 = `async fn main() {
  let listner = TcpListener::bind("localhost:8080").await.unwrap();
  let (tx, rx) = broadcast::channel::<String>(10);
  loop {
      let txx = tx.clone();
      let mut rxx = txx.subscribe();
      let (mut socket, _addr) = listner.accept().await.unwrap();

      tokio::spawn(async move {
          let (read, mut write) = socket.split();

          let mut buffer = BufReader::new(read);
          loop {
              let mut lines = String::new();
              tokio::select!{
              result = buffer.read_line(&mut lines)=>{
              txx.send(lines.clone()).unwrap();
              }
             
              result = rxx.recv() =>{
              let msg = result.unwrap();    
              write.write(&mut msg.as_bytes()).await.unwrap();
              print!("Message>{}", lines);
              }
              }
          }
      });
  }
}`;
const code_11 = `tokio::select! {
  pattern1 = expression1 => {
      // Code to execute when expression1 completes
  }
  pattern2 = expression2 => {
      // Code to execute when expression2 completes
  }
  // ... add more patterns and expressions as needed
}`;
const code_12 = `async fn main() {
  let listner = TcpListener::bind("localhost:8080").await.unwrap();
  let (tx, rx) = broadcast::channel(10);
  loop {
      let txx = tx.clone();
      let mut rxx = txx.subscribe();
      let (mut socket, addr) = listner.accept().await.unwrap();

      tokio::spawn(async move {
          let (read, mut write) = socket.split();

          let mut buffer = BufReader::new(read);
          loop {
              let mut lines = String::new();
              tokio::select!{
              result = buffer.read_line(&mut lines)=>{
              if result.unwrap() == 2{
                  break;
              }    
              txx.send((lines.clone(),addr)).unwrap();
              
              }
             
              result = rxx.recv() =>{
              let (msg,addr_check) = result.unwrap();    
              if addr != addr_check{
              write.write(&mut msg.as_bytes()).await.unwrap();
              }
              }
              }
          }
      });
  }
}`;

const code_13 = `let (tx,rx) = broadcast::channel::<String>(10);`;
const code_14 = `broadcast::channel::<String>(x)`;