const BASE_URL = 'http://localhost:3000';

export const Question = {
    index(){
        return fetch(`${BASE_URL}/questions`)
            .then(res => {
                return res.json();
            })
    },
    create(params){
        return fetch(`${BASE_URL}/questions`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
          }).then(res => res.json())
    }
}