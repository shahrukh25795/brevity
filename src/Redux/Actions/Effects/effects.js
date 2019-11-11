import * as contants from '../../../Constants/contants';
import requestInstance from '../../../Request/request';

export const getUser = (onSuccess) => {
    return dispatch => {
        requestInstance.get(contants.users).then((res) => {
            if (res.status === 200) {
                onSuccess(res);
            }
        })
    }

}
