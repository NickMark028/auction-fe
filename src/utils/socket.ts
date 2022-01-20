import { io } from 'socket.io-client';
const host = 'http://localhost:4000';
const socket = io(host);
socket.connect();

export default socket;
