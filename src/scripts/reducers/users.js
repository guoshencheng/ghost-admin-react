const defaultState = {
  inviting: [],
  invited: [],
  page: 1,
  hasMore: true
}

export default {
  defaultState,
  reducers: {
    FETCH_INVITING_USERS: (state, action) => {
      return Object.assign({}, state, {
        inviting: action.users,
      })
    },
    FETCH_INVITED_USERS: (state, action) => {
      const { meta = {} } = action;
      const { pagination } = meta;
      return Object.assign({}, state, {
        invited: action.users,
        page: pagination.page + 1,
        hasMore: pagination.page < pagination.pages
      })
    }
  }
}
