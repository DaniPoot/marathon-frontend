export const isAuthenticated = ({ account }) => !!account 
export const token = ({ token }) => token
export const userId = ({ account }) => account.id
export const userType = ({ account }) => account ? account.type : undefined
