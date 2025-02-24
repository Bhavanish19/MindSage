// // @ts-nocheck

// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Activity } from "@prisma/client";

// import { Button } from "@/components/ui/button";
// import {
//   Credenza,
//   CredenzaClose,
//   CredenzaContent,
//   CredenzaDescription,
//   CredenzaFooter,
//   CredenzaHeader,
//   CredenzaTitle,
// } from "@/components/ui/credenza";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { toast } from "@/components/ui/use-toast";
// import { Icons } from "@/components/icons";

// import { LogsAddForm } from "./logs/logs-add-form";






// async function deleteActivity(activityId: string) {
//   const response = await fetch(`/api/activities/${activityId}`, {
//     method: "DELETE",
//   });
//   if (!response.ok) {
//     toast({
//       title: "Something went wrong.",
//       description: "Your activity was not deleted. Please try again.",
//       variant: "destructive",
//     });
//   } else {
//     toast({
//       description: "Your activity has been deleted successfully.",
//     });
//   }
//   return response.ok;
// }


// // async function deleteActivity(activityId: string) {
// //   const response = await fetch(`/api/activities/${activityId}`, {
// //     method: "DELETE",
// //   });

// //   if (!response?.ok) {
// //     toast({
// //       title: "Something went wrong.",
// //       description: "Your activity was not deleted. Please try again.",
// //       variant: "destructive",
// //     });
// //   } else {
// //     toast({
// //       description: "Your activity has been deleted successfully.",
// //     });
// //   }

// //   return true;
// // }

// interface ActivityOperationsProps {
//   activity: Pick<Activity, "id">;
//   children?: React.ReactNode;
// }

// export function ActivityOperations({
//   activity,
//   children,
// }: ActivityOperationsProps) {
//   const router = useRouter();
//   const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false);
//   const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false);
//   const [showLogAlert, setShowLogAlert] = React.useState<boolean>(false);
//   const [showDropDown, setShowDropDown] = React.useState<boolean>(false);

//   return (
//     <>
//       <DropdownMenu open={showDropDown} onOpenChange={setShowDropDown}>
//         <DropdownMenuTrigger>
//           {children ? (
//             children
//           ) : (
//             <div className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
//               <Icons.ellipsis className="h-4 w-4" />
//               <span className="sr-only">Open</span>
//             </div>
//           )}
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem
//             className="flex cursor-pointer  items-center"
//             onSelect={() => {
//               setShowLogAlert(true);
//               setShowDropDown(false);
//             }}
//           >
//             <Icons.add className="mr-2 h-4 w-4" />
//             Add Log
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem>
//             <Link
//               href={`/dashboard/activities/${activity.id}/settings`}
//               className="flex w-full"
//             >
//               <Icons.settings className="mr-2 h-4 w-4" />
//               Settings
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem
//             className="flex cursor-pointer items-center text-red-500 focus:text-red-500"
//             onSelect={() => {
//               setShowDeleteAlert(true);
//               setShowDropDown(false);
//             }}
//           >
//             <Icons.trash className="mr-2 h-4 w-4" />
//             Delete
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>

//       {/* Add Alert */}
//       <Credenza open={showLogAlert} onOpenChange={setShowLogAlert}>
//         <CredenzaContent>
//           <CredenzaHeader>
//             <CredenzaTitle>Log Activity</CredenzaTitle>
//             <CredenzaDescription>
//               This will create an activity log.
//             </CredenzaDescription>
//           </CredenzaHeader>
//           <LogsAddForm
//             activityId={activity.id}
//             setShowLogAlert={setShowLogAlert}
//           />
//         </CredenzaContent>
//       </Credenza>

//       {/* Delete Alert */}
//       <Credenza open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
//         <CredenzaContent>
//           <CredenzaHeader>
//             <CredenzaTitle>
//               Are you sure you want to delete this activity?
//             </CredenzaTitle>
//             <CredenzaDescription>
//               This action cannot be undone.
//             </CredenzaDescription>
//           </CredenzaHeader>
//           <CredenzaFooter className="flex flex-col-reverse">
//             <CredenzaClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </CredenzaClose>
//             <Button
//               variant="dangerOutline"
//               onClick={async (
//                 event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//               ) => {
//                 event.preventDefault();
//                 setIsDeleteLoading(true);

//                 const deleted = await deleteActivity(activity.id);

//                 if (deleted) {
//                   setIsDeleteLoading(false);
//                   setShowDeleteAlert(false);
//                   router.refresh();
//                 }
//               }}
//               disabled={isDeleteLoading}
//             >
//               {isDeleteLoading ? (
//                 <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//               ) : (
//                 <Icons.trash className="mr-2 h-4 w-4" />
//               )}
//               <span>Delete</span>
//             </Button>
//           </CredenzaFooter>
//         </CredenzaContent>
//       </Credenza>



//     </>
//   );
// }



"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Activity } from "@prisma/client"

import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

import { LogsAddForm } from "./logs/logs-add-form"

async function deleteActivity(activityId: string) {
  const response = await fetch(`/api/activities/${activityId}`, {
    method: "DELETE",
  })

  if (!response?.ok) {
    toast({
      title: "Something went wrong.",
      description: "Your activity was not deleted. Please try again.",
      variant: "destructive",
    })
    return false
  } else {
    toast({
      description: "Your activity has been deleted successfully.",
    })
    return true
  }
}

interface ActivityOperationsProps {
  activity: Pick<Activity, "id">
  children?: React.ReactNode
}

export function ActivityOperations({
  activity,
  children,
}: ActivityOperationsProps) {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)
  const [showLogAlert, setShowLogAlert] = React.useState<boolean>(false)
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false)

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setIsDeleteLoading(true)

    const deleted = await deleteActivity(activity.id)

    if (deleted) {
      setIsDeleteLoading(false)
      setShowDeleteAlert(false)
      router.refresh()
      router.push("/dashboard/activities") // Redirect to activities page after deletion
    } else {
      setIsDeleteLoading(false)
    }
  }

  return (
    <>
      <DropdownMenu open={showDropDown} onOpenChange={setShowDropDown}>
        <DropdownMenuTrigger asChild>
          {children ? (
            children
          ) : (
            <Button variant="ghost" className="h-8 w-8 p-0">
              <Icons.ellipsis className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onSelect={() => {
              setShowLogAlert(true)
              setShowDropDown(false)
            }}
          >
            <Icons.add className="mr-2 h-4 w-4" />
            Add Log
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/activities/${activity.id}/settings`}>
              <Icons.settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => {
              setShowDeleteAlert(true)
              setShowDropDown(false)
            }}
            className="text-red-600 focus:text-red-600"
          >
            <Icons.trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Credenza open={showLogAlert} onOpenChange={setShowLogAlert}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Log Activity</CredenzaTitle>
            <CredenzaDescription>
              This will create an activity log.
            </CredenzaDescription>
          </CredenzaHeader>
          <LogsAddForm
            activityId={activity.id}
            setShowLogAlert={setShowLogAlert}
          />
        </CredenzaContent>
      </Credenza>

      <Credenza open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>
              Are you sure you want to delete this activity?
            </CredenzaTitle>
            <CredenzaDescription>
              This action cannot be undone.
            </CredenzaDescription>
          </CredenzaHeader>
          <CredenzaFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <CredenzaClose asChild>
              <Button variant="secondary">Cancel</Button>
            </CredenzaClose>
            <Button
              // variant="destructive"
              onClick={handleDelete}
              disabled={isDeleteLoading}
            >
              {isDeleteLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.trash className="mr-2 h-4 w-4" />
              )}
              Delete
            </Button>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}