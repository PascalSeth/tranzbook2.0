import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div>
        <div className="flex justify-between items-center">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7">Profile Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 ">Personal details and application.</p>
      </div>
      <div>
      <Avatar className="h-14 w-14">
        <AvatarImage src="/avatars/02.png" alt="" />
      </Avatar>
      </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">First Name</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">William</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Last Name</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0"> Foster</dd>
          </div>
    

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Email address</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">Role</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">Admin</dd>
          </div>
     
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6">About</dt>
            <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>

        </dl>
      </div>
    </div>
  )
}
