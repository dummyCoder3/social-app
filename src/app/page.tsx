import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="border border-gray-600 px-5 py-2">Sign in</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
