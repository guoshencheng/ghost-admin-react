const defaultState = {
  users: [],
  invited: [],
  page: 1,
  hasMore: true
}

export default {
  defaultState,
  reducers: {
    FETCH_INVITED_USERS: (state, action) => {
      return Object.assign({}, state, {
        invited: action.users,
      })
    },
    FETCH_ACTIVE_USERS: (state, action) => {
      const { meta = {} } = action;
      const { pagination } = meta;
      return Object.assign({}, state, {
        users: action.users,
        page: pagination.page + 1,
        hasMore: pagination.page < pagination.pages
      })
    }
  }
}
