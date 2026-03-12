interface SettingsItemProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export function SettingsItem({
  label,
  description,
  children,
}: SettingsItemProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <h3 className="font-medium">{label}</h3>
        {description && (
          <p className="max-w-md text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
