"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { GetFormStats } from "@/constants/actions/user.action";
import { Eye, FileCheck, FileBarChart, File } from "lucide-react";

export const StatCardWrapper = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Awaited<ReturnType<typeof GetFormStats>>>();

  useEffect(() => {
    const fetchData = async () => {
      const stats = await GetFormStats();

      setData(stats);
      setLoading(false);
    };

    fetchData();
  }, []);

  return <StatCards loading={loading} data={data} />;
};

interface StatCardProps {
  loading: boolean;
  data?: Awaited<ReturnType<typeof GetFormStats>>;
}

const StatCards = ({ loading, data }: StatCardProps) => {
  const cardData = [
    {
      id: "1",
      title: "Total Visits",
      icon: Eye,
      text: "All time form visits",
      value: data ? data.visits.toLocaleString() : "0",
      loading,
    },
    {
      id: "2",
      title: "Submissions Rates",
      icon: FileBarChart,
      text: "Submissions Rates",
      value: data ? data.submissionRate.toLocaleString() : "0",
      loading,
    },
    {
      id: "3",
      title: "Total Submissions",
      icon: FileCheck,
      text: "Total Submissions",
      value: data ? data.submissions.toLocaleString() : "0",
      loading,
    },
    {
      id: "4",
      title: "Bounce Rates",
      icon: File,
      text: "Total Bounce Rates",
      value: data ? data.bounceRate.toLocaleString() : "0",
      loading,
    },
  ];
  return (
    <div className="grid w-full grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-4">
      {cardData.map((item) => {
        return (
          <StatCard
            key={item.id}
            title={item.title}
            icon={React.createElement(item.icon)}
            text={item.text}
            value={item.value}
            loading={loading}
            className="shadow-md"
          />
        );
      })}
    </div>
  );
};

const StatCard = ({
  title,
  icon,
  text,
  value,
  loading,
  className,
}: {
  title: string;
  icon: ReactNode;
  text: string;
  value: string;
  loading: boolean;
  className?: string;
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="pt-1 text-xs text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
};

export default StatCards;
