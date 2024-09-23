"use client";

import React, { useState } from "react";
import DragableElements from "./DraggableElements";
import { DotBackground } from "../../GridBackground";
import Dropzone from "./Dropzone";
import PreviewDialogBtn from "./PreviewDialogBtn";
import SaveFormBtn from "./SaveFormBtn";
import PublishFormBtn from "./PublishFormBtn";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { FormElements } from ".";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Builder = ({
  id,
  result,
}: {
  id: string;
  result: {
    id: string;
    userId: string;
    createdAt: Date;
    published: boolean;
    title: string;
    descriptions: string;
    content: string;
    visits: number;
    submissions: number;
    shareURL: string;
    formCategory: string;
  };
}) => {
  const [draggingElementId, setDraggingElementId] = useState<string | null>(
    null,
  );
  const [droppedItems, setDroppedItems] = useState<any[]>([]);

  const router = useRouter();

  const handleDelete = (instanceId: string) => {
    setDroppedItems(
      droppedItems.filter((item) => item.instanceId !== instanceId),
    );
  };
  return (
    <DndContext
      onDragStart={({ active }) => {
        setDraggingElementId(active.id as string);
      }}
      onDragEnd={({ over }) => {
        if (over && over.id === "dropzone") {
          const droppedElement = FormElements.find(
            (item) => item.id === draggingElementId,
          );
          if (droppedElement) {
            setDroppedItems([
              ...droppedItems,
              {
                ...droppedElement,
                instanceId: uuid(),
              },
            ]);
          }
        }
        setDraggingElementId(null);
      }}
    >
      <section className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-5 rounded-md border p-5 shadow-md max-[1025px]:col-span-4">
          <h1 className="text-3xl">Form Elements</h1>
          <hr />
          <DragableElements
            elements={FormElements}
            draggingElementId={draggingElementId}
          />
        </div>
        <div className="relative col-span-3 w-full rounded-md border max-[1025px]:col-span-4">
          <DotBackground className="shadow-md">
            {/* Make this section on the top of the DotBackground */}
            <section className="absolute top-0 z-20 flex w-full items-center justify-between rounded-md bg-background p-5">
              <h1 className="text-xl">
                <span className="text-muted-foreground">Form: </span>
                {result.title}
              </h1>
              <div className="flex items-center space-x-5">
                <Button
                  variant={"destructive"}
                  onClick={() => {
                    router.push("/admin/dbOperations");
                  }}
                >
                  Cancel
                </Button>
                <PreviewDialogBtn />
                <SaveFormBtn />
                <PublishFormBtn />
              </div>
            </section>

            <div className="grow">
              <Dropzone droppedItems={droppedItems} onDelete={handleDelete} />
            </div>
          </DotBackground>
        </div>
      </section>

      <DragOverlay>
        {draggingElementId && (
          <div className="flex items-center justify-between rounded-lg border-2 border-solid p-4 opacity-30">
            {FormElements.find((item) => item.id === draggingElementId)?.title}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default Builder;
