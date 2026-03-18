import React from 'react'
import SignupComp from '../../components/auth/Signup'
import { useMutation } from '@tanstack/react-query'

const Signup = () => {
  const mutation = useMutation({
    mutationFn:
  })
  return (
    <div>
      <SignupComp
        role={"user"}
        subtitle={"Join Asset Bridge to book stays and explore opportunities"}
        onSubmit={(data) => mutation.mutate(data)}
        isLoading={mutation.isPending}
      />
      
    </div>
  )
}

export default Signup
