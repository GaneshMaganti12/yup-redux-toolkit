import {createSlice} from '@reduxjs/toolkit'

const LoginReducer = createSlice({
    name: 'login',
    initialState: {login: []},
    reducers: {
        FETCH_POST(state, action){
            return {login: action.payload}
        }
    }
})

export const fetchPost = (values) =>{
    return async(dispatch) =>{
        let url = 'http://localhost:4001/Login'
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...values, jwtToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ"})
        }

        let res = await fetch(url, options)
        let data = await res.json()
        dispatch(FETCH_POST(data))
    }
}

export const {FETCH_POST} = LoginReducer.actions

export default LoginReducer.reducer