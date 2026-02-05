import { UserIcon } from "lucide-react";
import Image from "next/image";

const creator = {
  name: "Vaibhav Kesarwani",
  url: "https://github.com/Vaibhav-kesarwani",
  avatar: "/images/me.png",
};

export const Contributor = () => {
  return (
    <div className="not-prose mt-6 flex flex-col gap-2">
      {/* Created by section */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <UserIcon className="size-4 text-muted-foreground" />
          <p className="text-muted-foreground text-sm">Created by</p>
        </div>
        <div className="pl-3.5">
          {/* Creator - more prominent */}
          {creator.url ? (
            <a
              className="flex items-center gap-2"
              href={creator.url}
              rel="noopener"
              target="_blank"
            >
              {creator.avatar ? (
                <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border">
                  <Image
                    alt={`${creator.name}'s avatar`}
                    className="object-cover bg-blue-300 dark:bg-yellow-300"
                    height={24}
                    src={creator.avatar}
                    width={24}
                  />
                </div>
              ) : (
                <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
                  <UserIcon className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
              <span className="font-normal text-muted-foreground text-sm">
                {creator.name}
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-2">
              {creator.avatar ? (
                <div className="relative h-6 w-6 overflow-hidden rounded-full border border-border">
                  <Image
                    alt={`${creator.name}'s avatar`}
                    className="object-cover"
                    height={24}
                    src={creator.avatar}
                    width={24}
                  />
                </div>
              ) : (
                <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
                  <UserIcon className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
              <span className="font-light text-muted-foreground text-sm">
                {creator.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
