import Loading from "@/components/Loading";
import { useAuthStore } from "@/store/auth";
import { redirect } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";

export function AuthGuard<T extends {}>(Component: ComponentType<T>) {
  const WrappedComponent = (props: T) => {
    const { user } = useAuthStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    if (isLoading) return <Loading />;
    if (!user) {
      redirect("/");
      return null;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
}
