export const invitedUsers = () => ({ apis, reducers, actions }) => {
  apis.users({ limit: 'all', status: 'invited', include: 'roles' }).then(res => {
    console.log(res);
    actions.reducerActions.users.FETCH_INVITED_USERS(res)
  })
}

export const activeUsers = () => ({ apis, reducers, actions }) => {
  apis.users({ limit: 'all', status: 'invited', include: 'roles' }).then(res => {
    actions.reducerActions.users.FETCH_ACTIVE_USERS(res)
  })
}
