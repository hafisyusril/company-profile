// src/hoc/AuthGuard.tsx
import Loading from "@/components/Loading";
import { useAuthStore } from "@/store/auth";
import { redirect } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";

// HOC function
export function AuthGuard<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const WithAuth: React.FC<P> = (props) => {
    const { user } = useAuthStore();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <Loading />;
    }

    if (!user) {
      redirect("/");
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return WithAuth;
}
