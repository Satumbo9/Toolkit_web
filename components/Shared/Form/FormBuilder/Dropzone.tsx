import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Dropzone = ({
  droppedItems,
  onDelete,
}: {
  droppedItems: any[];
  onDelete: (instanceId: string) => void;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "dropzone",
  });

  const style = {
    backgroundColor: isOver ? "#f0fff4" : undefined,
  };

  const componentMap: { [key: string]: React.FC } = {
    "1": () => (
      <div className="w-full p-2">
        <label className="mb-2 block">Text Input</label>
        <Input
          type="text"
          className="w-full rounded border p-2"
          placeholder="Enter text"
        />
      </div>
    ),
    "2": () => (
      <div className="w-full p-2">
        <label className="mb-2 block">Text Area</label>
        <Textarea
          className="h-[144px] w-full resize-none rounded border p-2"
          placeholder="Enter text"
        />
      </div>
    ),
    "3": () => (
      <div className="w-full p-2">
        <label className="inline-flex items-center">
          <Input type="checkbox" />
          <span className="ml-2">Checkbox</span>
        </label>
      </div>
    ),
    "4": () => (
      <div className="w-full p-2">
        <label className="inline-flex items-center">
          <Input type="radio" />
          <span className="ml-2">Radio Button</span>
        </label>
      </div>
    ),
  };

  return (
    <div className="flex size-full" ref={setNodeRef} style={style}>
      <div className="w-full p-4">
        <div className="m-auto flex h-full max-w-[920px] flex-1 grow-0 flex-col items-center justify-start overflow-y-auto rounded-xl">
          {droppedItems.length === 0 ? (
            <p className="flex grow items-center text-3xl font-bold text-muted-foreground">
              Drop here
            </p>
          ) : (
            droppedItems.map((item) => {
              const component = componentMap[item.id];
              return (
                <div
                  key={item.instanceId}
                  className="mb-4 flex w-full items-center justify-between rounded-md border-2 border-solid bg-background p-4"
                >
                  {component ? component(item.id) : <p>unknown component!</p>}
                  <Button
                    className="hover: absolute right-2 top-2 rounded bg-red-600 px-2 py-1 text-xs"
                    onClick={() => onDelete(item.instanceId)}
                  >
                    Delete
                  </Button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
