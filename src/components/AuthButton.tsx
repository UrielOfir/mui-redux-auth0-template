'use client';

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
  const { data: session }: {data: any} = useSession()

  const handleSignIn = () => {
    signIn();
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}
         >Sign in</button>
    </>
  )
}