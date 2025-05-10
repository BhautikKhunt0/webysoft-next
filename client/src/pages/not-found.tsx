import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <div>
              <h2 className="text-xl font-semibold">Page Not Found</h2>
              <p className="text-gray-500">
                The page you are looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="/"
              className="block w-full py-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Go back home
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}