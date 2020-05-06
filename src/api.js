const API_KEY =
  "613bb31b4e67db483feb558c2061c67fefc8d5cf210b1ef95be73a4a33b94ba9";

const tickersHandlers = new Map();

const socket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);

const AGGREGATE_INDEX = "5";

socket.addEventListener("message", (e) => {
  const {
