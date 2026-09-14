import AppNavigation from "../components/AppNavigation";

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <AppNavigation />
    </>
  );
}
