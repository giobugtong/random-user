import { User } from "../types";
import { fullnameFormat } from "../utils";

export default function UserCard({ name, email, picture }: User) {
  const fullName = fullnameFormat(name);
  return (
    <div className="flex rounded-lg gap-3 border-2 min-w-0 break-all">
      <img
        src={picture.medium}
        alt={fullName}
        className="rounded-l-lg h-20 w-20 object-contain"
      />
      <div className="w-full py-2 pr-2">
        <p className="font-bold line-clamp-1">{fullName}</p>
        <p className="whitespace-normal line-clamp-1">{email}</p>
      </div>
    </div>
  );
}
