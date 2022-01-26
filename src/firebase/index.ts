import { collection, getDocs } from 'firebase/firestore';
import dataBase from './initialApp';
async function getTicketList(db: any) {
    const ticketCol = collection(db, 'TickectList');
    const ticketSnapshot = await getDocs(ticketCol);
    const ticketList = ticketSnapshot.docs.map((doc) => doc.data());
    return ticketList;
}

const getData = getTicketList(dataBase);
export default getData;