import { Button } from "@/components/ui/button"

import type { UserCardListProps } from "@/types/Test"

export const UserCardList = ({ users }: UserCardListProps) => {
  const toast = useToast()

  if (!users || users.length === 0) {
    return (
      <div className="text-center text-muted-foreground mt-6">
        No users available.
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 border rounded-lg bg-card shadow-sm hover:shadow-md transition"
        >
          <div className="font-semibold text-lg">{user.name}</div>
          <div className="text-sm text-muted-foreground mb-1">
            {user.email}
          </div>
          <div className="text-sm text-muted-foreground">{user.phone}</div>
          <div className="mt-2 text-blue-600 hover:underline text-sm">
            {user.website}
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() =>
                toast.info("Viewing user", {
                  description: `${user.name}'s details`,
                })
              }
            >
              View
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() =>
                toast.error("Deleted user", {
                  description: `${user.name} removed from list (test only).`,
                })
              }
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}
