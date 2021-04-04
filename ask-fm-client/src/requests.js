const BASE_URL = 'http://localhost:3000';

export const Question = {
    index(){
        return fetch(`${BASE_URL}/questions`)
            .then(res => {
                return res.json();
            })
    }
}