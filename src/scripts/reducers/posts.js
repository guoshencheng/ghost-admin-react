const defaultState = {
  list: [],
  page: 1,
  hasMore: true
}

export default {
  defaultState,
  reducers: {
    FETCH_POSTS: (state, action) => {
      const { posts, meta = {} } = action;
      const { pagination } = meta;
      return Object.assign({}, state, {
        list: action.posts,
        page: pagination.page + 1,
        hasMore: pagination.page < pagination.pages
      })
    }
  }
}
