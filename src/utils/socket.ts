import { io } from 'socket.io-client';
const host = 'https://auction-b3.herokuapp.com';
const socket = io(host);
socket.connect();

export default socket;
