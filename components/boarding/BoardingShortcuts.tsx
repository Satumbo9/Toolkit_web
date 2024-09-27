import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BoardingShortcuts = () => {
  const router = useRouter();

  const handleDocLibTabClick = (value: string) => {
    router.push(`/boarding/docLibrary?tab=${value}`);
  };
  return (
    <section className="w-full">
      <div className="m-auto grid w-3/4 grid-cols-3 gap-4 rounded-md text-lg max-xl:grid-cols-2 max-lg:grid-cols-1">
        {/* MERCHANT BOARDING LIST SHORCUT */}
        <Link href={"/boarding/mBoarding"}>
          <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
            <h1 className="text-center font-semibold">
              Merchant Boarding List
            </h1>
            <span className="flex gap-4 px-2">
              <Image
                className="m-auto flex-none"
                src="/icon/colorful/list.svg"
                alt="Logo"
                width={60}
                height={60}
                priority
              />
              <p className="flex-1 content-center justify-start text-base">
                List and manage all available Merchant Applications
              </p>
            </span>
          </div>
        </Link>
        {/* MERCHANT SHORCUT */}
        <Link href={"/boarding/merch"}>
          <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
            <h1 className="text-center font-semibold">Merchant</h1>
            <span className="flex gap-4 px-2">
              <Image
                className="m-auto flex-none"
                src="/icon/colorful/merchant.svg"
                alt="Logo"
                width={64}
                height={64}
                priority
              />
              <p className="flex-1 content-center justify-start text-base">
                Find Merchants and Order Equipment
              </p>
            </span>
          </div>
        </Link>
        {/* AGENT DETAILS SHORCUT */}
        <Link href={"/boarding/agentDetails"}>
          <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
            <h1 className="text-center font-semibold">Agent Details List</h1>
            <span className="flex gap-4 px-2">
              <Image
                className="m-auto flex-none"
                src="/icon/colorful/agents-edit.svg"
                alt="Logo"
                width={64}
                height={64}
                priority
              />
              <p className="flex-1 content-center justify-start text-base">
                View and Edit Shipping Agent Detail
              </p>
            </span>
          </div>
        </Link>
        {/* DOCUMENT LIBRARY SHORCUT */}
        <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
          <h1 className="text-center font-semibold">Document Library</h1>
          <div className="flex gap-4 px-2">
            <Image
              className="m-auto flex-none"
              src="/icon/colorful/doc-library.svg"
              alt="Logo"
              width={64}
              height={64}
              priority
            />
            <ul className="flex-1 content-center justify-start text-sm max-2xl:text-xs">
              <li
                className="w-fit cursor-pointer list-disc underline"
                onClick={() => handleDocLibTabClick("blankMpaAndAddendums")}
              >
                Blank MPAs & Addendums
              </li>

              <li
                className="w-fit cursor-pointer list-disc underline"
                onClick={() => handleDocLibTabClick("changeForms")}
              >
                Change Forms
              </li>

              <li
                className="w-fit cursor-pointer list-disc underline"
                onClick={() => handleDocLibTabClick("equipmentPricing")}
              >
                Equipment Pricing
              </li>
              <li
                className="w-fit cursor-pointer list-disc underline"
                onClick={() => handleDocLibTabClick("uploadAndSendDocs")}
              >
                Upload & Send Document
              </li>
            </ul>
          </div>
        </div>
        {/* LEADS SHORCUT */}
        <Link href={"/boarding/leads"}>
          <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
            <h1 className="text-center font-semibold">Leads</h1>
            <div className="flex gap-4 px-2">
              <Image
                className="m-auto flex-none"
                src="/icon/colorful/leads.svg"
                alt="Logo"
                width={55}
                height={55}
                priority
              />
              {/* Link this to another page first. */}
              <ul className="flex-1 content-center justify-start px-4 text-sm">
                {/* Then, when clicking any of these div should pass the props value. */}
                <li className="w-fit cursor-pointer list-disc text-nowrap text-sm">
                  MiCamp Leads
                </li>
                <li className="w-fit cursor-pointer list-disc text-nowrap text-sm">
                  North Leads
                </li>
                <li className="w-fit cursor-pointer list-disc text-nowrap text-sm">
                  FSP Leads
                </li>
              </ul>
            </div>
          </div>
        </Link>
        {/* SUPPORT TICKETS SHORCUT */}
        <Link href={"/boarding/supportTickets"}>
          <div className="col-auto h-full justify-center space-y-2 rounded-md border p-5 shadow-md transition duration-300 hover:border-sky-500">
            <h1 className="text-center font-semibold">Support Tickets</h1>
            <span className="flex gap-4 px-2">
              <Image
                className="m-auto flex-none"
                src="/icon/colorful/support.svg"
                alt="Logo"
                width={64}
                height={64}
                priority
              />
              <p className="flex-1 content-center justify-start text-base">
                View and manage your Support Tickets
              </p>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export { BoardingShortcuts };
