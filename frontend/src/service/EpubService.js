import axios from 'axios';

export class EpubService {
    
    getEpubs() {
        return axios.get('local_store/55cb53a481fccb665e060027.json')
                .then(res => res.data.data);
    }
}