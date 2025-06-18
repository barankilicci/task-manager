import { getUserWorkspaces } from '@/app/data/workspace/get-user-workspaces';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props{
    children: React.ReactNode;
    params: Promise<{workspaceId:string}>;
}

const WorkspaceIdLayout = async ({children,params}: Props) => {
  const {workspaceId} = await params;

  const {data} = await getUserWorkspaces();

  if(data?.onboardingCompleted && !data?.workspaces){
    redirect("/create-workspace")
  }else if(!data?.onboardingCompleted){
    redirect("/onboarding")
  }
  return (
    <div>
      Workspace id layout
    </div>
  )
}

export default WorkspaceIdLayout
