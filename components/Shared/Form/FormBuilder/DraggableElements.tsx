import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableItem = ({
  id,
  title,
  icon,
  isDragging,
}: {
  id: string;
  title: string;
  icon: any[];
  isDragging: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`flex cursor-grab flex-col items-center justify-center rounded-lg border-2 border-solid bg-background p-4 ${
        isDragging ? "opacity-0" : ""
      }`}
    >
      <span className="flex flex-col items-center gap-2 text-center">
        {React.createElement(icon[0], {
          className: "text-blue-500",
        })}
        <p className="text-xl">{title}</p>
      </span>
    </div>
  );
};

const DragableElements = ({
  elements,
  draggingElementId,
}: {
  elements: any[];
  draggingElementId: string | null;
}) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-3 max-[1400px]:grid-cols-1">
      {elements.map(
        (item: { id: string; title: string; icon: React.ReactNode[] }) => (
          <React.Fragment key={item.id}>
            <DraggableItem
              key={item.id}
              id={item.id}
              title={item.title}
              icon={item.icon}
              isDragging={draggingElementId === item.id}
            />
          </React.Fragment>
        ),
      )}
    </div>
  );
};

export default DragableElements;
