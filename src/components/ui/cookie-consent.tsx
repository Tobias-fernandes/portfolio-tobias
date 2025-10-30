"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    setVisible(false);
  };

  const getCookieConsent = useCallback(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    getCookieConsent();
  }, [getCookieConsent]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 max-sm:right-4 z-50 flex justify-center">
      <Card className="max-w-lg w-full shadow-lg border border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience on our site. By continuing
            to use our site, you accept our policy.
          </p>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              Decline
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
