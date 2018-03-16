/**
 * Created by sxy on 2018/1/31.
 */
import {ADD_POST,EDIT_POST,REMOVE_POST,
    ADD_COMMENT,EDIT_COMMENT,REMOVE_COMMENT,GET_CATEGORY,
    INCREASE_POST_VOTE,DECREASE_POST_VOTE,INCREASE_COMMENT_VOTE,DECREASE_COMMENT_VOTE} from '../Actions';
import {combineReducers} from 'redux';
// import *as PostsAPI from '../utils/PostsAPI';
// //产生随机序列
// function randomWord(mount){
//     let str = "",
//         arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
//     // 随机产生
//     for(let i=0; i<mount; i++){
//         //round四舍五入为最接近的整数
//         let pos = Math.round(Math.random() * (arr.length-1));
//         str += arr[pos];
//     }
//     return str;
// }



function posts(state={},action) {
    const {id, timestamp, title, body, author, category, voteScore, deleted,commentCount}=action;
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                [id]:{
                    id,
                    timestamp,
                    title,
                    body,
                    author,
                    category,
                    voteScore,
                    deleted,
                commentCount
                }

            };
        case INCREASE_POST_VOTE:
            return {
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore+1
                }
            };
        case DECREASE_POST_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore-1
                }

            };

        case EDIT_POST:
            return {

            };
        case REMOVE_POST:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    deleted:true
                }
            };
        default:
            return state;
    }

}
function comments(state={},action){
    const {id,parentId,timestamp,body,author,voteScore,deleted,parentDeleted}=action;
    switch (action.type){
        case ADD_COMMENT:
            return {
                ...state,
                [id]:{
                    id,
                    parentId,
                    timestamp,
                    body,
                    author,
                    voteScore,
                    deleted,
                    parentDeleted
                }
            };
        case INCREASE_COMMENT_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore+1
                }
            };
        case DECREASE_COMMENT_VOTE:
            return{
                ...state,
                [id]:{
                    ...state[id],
                    voteScore:voteScore-1
                }
            };
        case EDIT_COMMENT:
            return {};
        case REMOVE_COMMENT:
            return {
                ...state,
                [id]:{
                    ...state[id],
                    deleted:true
                }
            };
        default :
            return state;
    }
}
function categories(state={},action) {
    const {name,path}=action;
    switch(action.type){
        case GET_CATEGORY:
            return{
                ...state,
                [name]:{
                    name,
                    path
                }
            };
        default:
            return state;
    }
}


export default combineReducers({
    posts,
    comments,
    categories
})
