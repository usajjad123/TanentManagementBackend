import { postAddProperty, getAddProperty } from '../../daos/Modal/Mocks';
export const getAddProperty_ = (_id: string) => {
    const response = getAddProperty(_id);
    return response;
}

export const postAddProperty_ = (_id: string, requestsPayload: Record<string, unknown>) => {
    const response = postAddProperty(_id, requestsPayload);
    return response;
}