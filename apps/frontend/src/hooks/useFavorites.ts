import { useAuth } from "@clerk/clerk-react";

type ToggleFav<T> = (item: T,token: string | null) => Promise<T>;

type UseToggleFavoriteOptions<T> = {
  updateItems: React.Dispatch<React.SetStateAction<T[]>>;
  getId: (item: T) => string | number;
  toggleFn: ToggleFav<T>;
  requireAuth?: boolean;
  onError?: (error: unknown) => void;
};

export function useToggleFavorite<T>({
  updateItems,
  getId,
  toggleFn,
  requireAuth = true,
  onError,
}: UseToggleFavoriteOptions<T>) {
  const { getToken, isSignedIn } = useAuth();

  const toggleFavorite = async (item: T) => {
    console.log("CLICKED", item);
    try {
      let token: string | null = null;

      if (requireAuth) {
        if (!isSignedIn) {
          console.warn("User must be signed in to favorite items.");
          return;
        }
        token = await getToken();
      }

      const updatedItem = await toggleFn(item, token);

      updateItems((prev) =>
        prev.map((i) =>
          getId(i) === getId(updatedItem) ? updatedItem : i
        )
      );
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.error("Toggle favorite failed:", error);
      }
    }
  };

  return { toggleFavorite };
}