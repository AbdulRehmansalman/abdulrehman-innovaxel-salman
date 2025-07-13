import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Calendar, MousePointer, Link, Clock } from "lucide-react";

const StatsDisplay = ({ stats, onClose }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const statItems = [
    {
      icon: Link,
      label: "Short Code",
      value: stats.shortcode,
      color: "text-cyan-600",
    },
    {
      icon: MousePointer,
      label: "Total Clicks",
      value: stats.accessCount || 0,
      color: "text-green-600",
    },
    {
      icon: Calendar,
      label: "Created",
      value: formatDate(stats.created_at),
      color: "text-blue-600",
    },
    {
      icon: Clock,
      label: "Last Updated",
      value: formatDate(stats.updated_at),
      color: "text-purple-600",
    },
  ];

  return (
    <Card className="bg-white border border-gray-300 shadow-2xl animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl text-black flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600">
            <MousePointer className="h-5 w-5 text-white" />
          </div>
          URL Statistics
        </CardTitle>
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="text-gray-700 hover:text-black hover:bg-gray-200"
        >
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
            >
              <div className={`p-2 rounded-full bg-white ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-700 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-black font-semibold">{item.value}</div>
              </div>
            </div>
          ))}

          {/* Original URL */}
          <div className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-200">
            <div className="p-2 rounded-full bg-white text-orange-600">
              <Link className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-700 uppercase tracking-wide mb-2">
                Original URL
              </div>
              <a
                href={stats.originalurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 transition-colors duration-200 break-all underline decoration-orange-500/50 hover:decoration-orange-600"
              >
                {stats.originalurl}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsDisplay;
