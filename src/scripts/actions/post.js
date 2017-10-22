export const posts = () => ({ apis, reducers, actions }) => {
  apis.posts({ status: 'all' }).then(res => {
    actions.reducerActions.posts.FETCH_POSTS(res)
  })
}
