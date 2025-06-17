import { getUserWorkspaces } from '@/app/data/workspace/get-user-workspaces'
import { redirect } from 'next/navigation';
import React from 'react'

const OnboardingPage = async () => {
  const {data} = await getUserWorkspaces();

  if(data?.onboardingCompleted && data?.workspaces.length > 0){
    redirect("/workspace")
  }
  return (
    <div>
      onboarding page
    </div>
  )
}

export default OnboardingPage
