import { io } from "socket.io-client";
const host='localhost:40567'
const socket = io(host)
socket.connect()

export default socket