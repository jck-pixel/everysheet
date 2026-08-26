import { SignIn } from "@clerk/nextjs";
import AuthPageShell from "../../components/AuthPageShell";

export default function SignInPage() {
  return (
    <AuthPageShell title="登入" description="登入後可在不同裝置保留帳戶與使用偏好。">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        forceRedirectUrl="/"
        appearance={{ elements: { rootBox: "clerk-root", cardBox: "clerk-card-box" } }}
      />
    </AuthPageShell>
  );
}
