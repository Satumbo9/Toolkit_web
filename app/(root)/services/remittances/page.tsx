import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImportSplitFile from "@/components/services/remittances/ImportSplitFile";
import ACHFTP from "@/components/services/remittances/ACH-FTP";

const ServicesRemittances = () => {
  const renderPage = [
    {
      id: 1,
      title: "Add ACH Entries",
      value: "ACHEntries",
    },
    {
      id: 2,
      title: "Create ACH Files",
      value: "ACHFiles",
    },
    {
      id: 3,
      title: "Create FTP Files",
      value: "FTPFiles",
    },
  ];
  return (
    <section className="rounded-r-sm rounded-bl-sm border shadow-sm">
      <div className="px-4 py-10">
        <Tabs defaultValue="importSplit" className="max-w-full">
          <TabsList>
            <TabsTrigger value="importSplit">Import Split File</TabsTrigger>
            {renderPage.map((item) => (
              <TabsTrigger key={item.id} value={item.value}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="importSplit" className="w-full">
            <ImportSplitFile />
          </TabsContent>
          {renderPage.map((item) => (
            <TabsContent key={item.id} value={item.value} className="w-full">
              <ACHFTP type={item.value} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesRemittances;
