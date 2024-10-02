"use client";
import {
  ColumnConfig,
  createColumns,
} from "@/components/Shared/DataTable/Columns";
import DataTable from "@/components/Shared/DataTable/DataTable";
import { Button } from "@/components/ui/button";
import { DepartmentListTable, RolesListTable, usersTable } from "@/constants";
import { DataTypes } from "@/types";
import React from "react";
import Link from "next/link";
import UserDetails from "./UserDetails";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import NewRole from "./NewRole";
import NewDepartment from "./NewDepartment";
import NewOrganization from "./NewOrganization";

const Users = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "Id", header: "ID" },
    { accessorKey: "Name", header: "Name" },
    { accessorKey: "Email", header: "Email" },
    { accessorKey: "Roles", header: "Roles" },
    { accessorKey: "Group", header: "Group" },
    { accessorKey: "Confirmed", header: "Confirmed" },
    { accessorKey: "Status", header: "Status" },
    { accessorKey: "LockUnlock", header: "Lock / Unlock" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section>
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        User Admin Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a user to edit or add a new one.
      </p>
      <div className="flex gap-4 max-2xl:flex-wrap">
        <div className="grid flex-auto grid-cols-1 overflow-auto px-2 text-start">
          <h2 className="mt-2 text-center text-xl">List of users:</h2>
          <DataTable
            columns={columns}
            data={usersTable}
            enableColumnFilter={true}
            filteredBy="Name"
          />
        </div>
        <div className="mt-8 flex-auto justify-center 2xl:w-2/5">
          <div className="my-4 mr-1 flex justify-end gap-2">
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New Agent
              </Button>
            </Link>
            <Link href={"/admin/userAdmin/addUser"}>
              <Button type="button" className="">
                + Add New User
              </Button>
            </Link>
          </div>
          <UserDetails />
        </div>
      </div>
    </section>
  );
};

const Roles = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "permission", header: "Permission" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        Roles List Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a role to edit or add a new one.
      </p>
      <div className="">
        <Dialog>
          <div className="text-end">
            <DialogTrigger asChild>
              <Button className="px-10">Create New Role</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="max-lg:max-w-[400px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add a new Role</DialogTitle>
            </DialogHeader>
            <NewRole />
          </DialogContent>
          <DialogDescription />
        </Dialog>
      </div>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={RolesListTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="role"
          actionsColumn={true}
        />
      </div>
    </section>
  );
};

const Departments = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "description", header: "Description" },
    { accessorKey: "permission", header: "Permission" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        Department List Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a dept. to edit or add a new one.
      </p>
      <div className="">
        <Dialog>
          <div className="text-end">
            <DialogTrigger asChild>
              <Button className="px-10">Create New Department</Button>
            </DialogTrigger>
          </div>
          <DialogContent className="max-lg:max-w-[400px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add a new Department</DialogTitle>
            </DialogHeader>
            <NewDepartment  />
          </DialogContent>
          <DialogDescription />
        </Dialog>
      </div>

      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={DepartmentListTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="department"
          actionsColumn={true}
        />
      </div>
    </section>
  );
};



const Organization = () => {
  const columnsConfig: ColumnConfig<DataTypes>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "description", header: "Description" },
  ];

  const columns = createColumns(columnsConfig);

  return (
    <section className="mt-4 gap-2 text-start max-2xl:flex-wrap">
      <h1 className="mt-3 text-center text-2xl font-semibold text-sky-500">
        Organization List Management
      </h1>
      <p className="text-center text-base text-gray-500">
        Select a Org. to edit or add a new one.
      </p>
      <div className="">
        <Dialog>
          <div className="text-end">
            <DialogTrigger asChild>
              <Button className="px-10">Create New Organization </Button>
            </DialogTrigger>
          </div>
          <DialogContent className="max-lg:max-w-[400px] lg:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add a new Organization</DialogTitle>
            </DialogHeader>
            <NewOrganization  />
          </DialogContent>
          <DialogDescription />
        </Dialog>
      </div>


{/* Content inside Organization */}
      <div className="grid grid-cols-1 overflow-auto">
        <DataTable
          columns={columns}
          data={DepartmentListTable}
          enableSorting={true}
          enableColumnFilter={true}
          filteredBy="department"
          actionsColumn={true}
        />
      </div>
    </section>
  );
};
export default function RenderUserAdminComponents(value: string) {
  switch (value) {
    case "users":
      return <Users />;
    case "roles":
      return <Roles />;
    case "departments":
      return <Departments />;
    case "organizations":
      return <Organization />;
  }
}
