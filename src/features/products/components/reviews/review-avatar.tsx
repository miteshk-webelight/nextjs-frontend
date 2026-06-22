import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

type ReviewAvatarProps = {
  avatarUrl: string | null;
  userName: string;
};

export function ReviewAvatar({ avatarUrl, userName }: Readonly<ReviewAvatarProps>) {
  const initials = getInitials(userName);
  const ariaLabel = `Avatar for ${userName}`;

  return (
    <Avatar size="default" aria-label={ariaLabel}>
      {avatarUrl && <AvatarImage src={avatarUrl} alt={userName} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
