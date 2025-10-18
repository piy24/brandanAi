export function PageHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex items-center gap-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
        >
          <circle
            cx="16"
            cy="16"
            r="4"
            fill="currentColor"
            fillOpacity="0.8"
          ></circle>
          <circle
            cx="16"
            cy="16"
            r="8"
            stroke="currentColor"
            strokeOpacity="0.6"
            strokeWidth="2"
          ></circle>
          <circle
            cx="16"
            cy="16"
            r="13"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="2"
          ></circle>
        </svg>

        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Brand Pulse
        </h1>
      </div>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Enter a brand, its competitors, and its industry to generate an AI-powered reputation analysis. See how your brand is perceived in the digital conversation.
      </p>
    </div>
  );
}
