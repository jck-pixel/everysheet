import { SignUp } from "@clerk/nextjs";
import AuthPageShell from "../../components/AuthPageShell";

export default function SignUpPage() {
  return (
    <AuthPageShell title="建立帳戶" description="可使用 Gmail、Yahoo、Outlook 或其他有效 Email 註冊。">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        forceRedirectUrl="/settings"
        appearance={{ elements: { rootBox: "clerk-root", cardBox: "clerk-card-box" } }}
      />
    </AuthPageShell>
  );
}
