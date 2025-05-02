"use client"; // IMPORTANT: Needed to use hooks (useRouter) in this file

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

export default function NotFound() {
  const router = useRouter(); // Enables client-side navigation; used here to navigate one step back in browser history, that's why this page is client

  return (
    <div className="min-h-[80vh] grid place-items-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {/* LARGE 404 TEXT */}
            <p className="text-8xl font-bold text-primary font-mono">404</p>

            {/* MESSAGE */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">
                User not found
              </h1>
              <p className="text-muted-foreground">
                The user you&apos;re looking for doesn&apos;t exist.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default">
                <HomeIcon className="mr-2 size-4" />
                <a href="/">Back to Home</a>
              </Button>

              <Button variant="outline" onClick={() => router.back()}>
                <ArrowLeftIcon className="mr-2 size-4" />
                Back
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
