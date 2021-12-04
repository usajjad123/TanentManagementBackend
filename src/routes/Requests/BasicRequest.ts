import { getBasicRequests, postBasicRequests } from '../../daos/Modal/Mocks';

export const getBasicRequests_ = (_id: string): Record<string, unknown> => {
    const response = getBasicRequests(_id);
    return response!;
}

export const postBasicRequests_ = (_id: string, requestsPayload: Record<string, unknown>): Record<string, unknown> => {
    const response = postBasicRequests(_id, requestsPayload);
    return response!;
}