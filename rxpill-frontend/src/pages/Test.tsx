import { DataFetcher } from "@/components/custom/DataFetcher"
import { UserCardList } from "@/components/custom/Test/TestComponent"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/useToast"
import type { User } from "@/types/Test"

export default function Test() {
  const toast = useToast()

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold"> User Directory</h1>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("Refreshing data...", {
              description: "Fetching latest user list.",
            })
          }
        >
          Refresh
        </Button>
      </div>

      <DataFetcher<User[]>
        queryKey={["test-users"]}
        url="https://jsonplaceholder.typicode.com/users"
        render={(users) => {
          if (users.length > 0) {
            toast.success("Fetched users successfully!", {
              description: `${users.length} users found.`,
            })
          } else {
            toast.warning("No users found", {
              description: "Try again later.",
            })
          }
          return <UserCardList users={users} />
        }}
      />
    </div>
  )
}
