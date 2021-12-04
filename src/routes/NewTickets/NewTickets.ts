import { postNewTicket, getNewTicket } from '../../daos/Modal/Mocks';

// Requests and Response will come here

export const getNewTicket_ = (_id: string) => {
    const response = getNewTicket(_id);
    return response;
}

export const postNewTicket_ = (_id: string, requestsPayload: Record<string, unknown>) => {
    const response = postNewTicket(_id, requestsPayload);
    return response;
}