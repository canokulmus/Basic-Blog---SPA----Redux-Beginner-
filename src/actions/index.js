import _ from "lodash";
import jsonplaceholder from "../apis/jsonplaceholder"

//şu kısım çok önemli
// getState parametresi uygulamanın stateine ulaşmamızı sağlayan bir FONKSİYON parametredir. Kullanımı getState().posts benzeri şeklindedir.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {


    await dispatch(fetchPosts());

    const userIds =  _.uniq(_.map(getState().posts, "userId")); //just get unique user id's to an array

    userIds.forEach( id => dispatch(fetchUser(id))); // async await does not work here

}




//Action creator
export const fetchPosts =  () => async dispatch => {

    const response = await jsonplaceholder.get("/posts"); 

    dispatch({ type:'FETCH_POSTS', payload: response.data  });
 
}


export const fetchUser = (id) => async dispatch => {

    const response = await jsonplaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER', payload: response.data});

};


// // memoized function: aynı user'ı tekrar tekrar çekmemek için memoize ettik
// export const fetchUser = (id) => dispatch =>  _fetchUser(id, dispatch);
// const _fetchUser = _.memoize( async (id, dispatch) => {


//     const response = await jsonplaceholder.get(`/users/${id}`);

//     dispatch({type:'FETCH_USER', payload: response.data});

// });