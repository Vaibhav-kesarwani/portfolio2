import { useRouter } from "next/navigation";

export function useSmoothNavigation(closeMenu?: () => void) {
  const router = useRouter();

  const navigate = (href: string) => {
    // 1. Close the menu
    closeMenu?.();

    // 2. Wait for animation to finish
    setTimeout(() => {
      router.push(href);
    }, 1000); // match your menu close duration
  };

  return { navigate };
}
