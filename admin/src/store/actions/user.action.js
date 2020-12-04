export const TYPE_SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
   return {
     type: TYPE_SET_USERS,
     payload: users,
   }
}