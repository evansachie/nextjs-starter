import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[80vh] px-6 py-24 text-center space-y-8">
      <Image
        src="/404.svg"
        alt="404 Not Found"
        width={400}
        height={300}
        priority
        className="max-w-full h-auto dark:invert"
      />
      <div className="space-y-4 max-w-md mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or deleted.
        </p>
      </div>
      <Button asChild size="lg" className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
