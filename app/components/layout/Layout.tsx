import { HeaderActionsProvider } from "@agent-native/toolkit/app-shell";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <HeaderActionsProvider>
      <div className="flex h-screen w-full flex-col overflow-hidden bg-background text-foreground">
        <main className="agent-native-app-main min-w-0 flex-1 overflow-y-auto overscroll-contain">
          <SiteHeader />
          {children}
          <SiteFooter />
        </main>
      </div>
    </HeaderActionsProvider>
  );
}
