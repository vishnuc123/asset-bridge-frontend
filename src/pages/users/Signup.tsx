import React from 'react'
import SignupComp from '../../components/auth/Signup'

const Signup = () => {
  return (
    <div>
      <SignupComp
        role={"user"}
        subtitle={"Join Asset Bridge to book stays and explore opportunities"}
        onSubmit={(data) => console.log(data)}
        isLoading={false}
      />
    </div>
  )
}

export default Signup
