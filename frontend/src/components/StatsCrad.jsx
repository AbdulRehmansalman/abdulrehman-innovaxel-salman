import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3 } from "lucide-react";

// For dislaying the card SHowing one input Field an done Buttton and the user inputs SHortCODe and thne it passes by button click to App.jsx and
// then it gets the full stats from backend using Api and display it in StatsDisplay.
const StatsCard = ({ onSubmit, disabled }) => {
  const [shortCode, setShortCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (shortCode.trim()) {
      await onSubmit(shortCode.trim());
    }
  };

  return (
    <Card className="backdrop-blur-lg bg-white border border-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-100 group">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl text-black">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 group-hover:scale-110 transition-transform duration-300">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          View URL Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            placeholder="Enter the short code to view statistics"
            className="bg-white border-gray-300 text-black placeholder:text-black focus:border-purple-500 focus:ring-purple-400/50 h-12 text-lg"
            required
          />
          <Button
            type="submit"
            disabled={disabled || !shortCode.trim()}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {disabled ? "Loading stats.." : "Get Statistics"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
