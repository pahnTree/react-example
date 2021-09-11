import React from "react"

import { useLogoutMutation } from "../../redux/api/core/user"

const Logout = () => {
  const [
    doLogout,
    { isUninitialized, isLoading, isSuccess, isError }
  ] = useLogoutMutation()

  if (isUninitialized) {
    doLogout()
  }

  return (
    <div>
      {isLoading && <div>Logging out</div>}
      {isSuccess && <div>Logged out</div>}
      {isError && <div>Error logging out</div>}
    </div>
  )
}

export default Logout
