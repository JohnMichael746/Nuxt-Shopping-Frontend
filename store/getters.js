export const getPageCount = state => {
  return Math.ceil(state.goodsTotalCount / state.goodsPageSize)
}
