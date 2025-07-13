import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit3 } from "lucide-react";

const UpdateUrlCard = ({ onSubmit, disabled }) => {
  const [shortCode, setShortCode] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (shortCode.trim() && newUrl.trim()) {
      await onSubmit(shortCode.trim(), newUrl.trim());
      setShortCode("");
      setNewUrl("");
    }
  };

  return (
    <Card className="bg-white border border-gray-300 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-100 group">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl text-black">
          <div className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 group-hover:scale-110 transition-transform duration-300">
            <Edit3 className="h-6 w-6 text-white" />
          </div>
          Update URL
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            placeholder="Enter Short Code"
            className="bg-white border-gray-300 text-black placeholder:text-black focus:border-yellow-500 focus:ring-yellow-400/50 h-11"
            required
          />
          <Input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            placeholder="New URL paste here"
            className="bg-white border-gray-300 text-black placeholder:text-black focus:border-yellow-500 focus:ring-yellow-400/50 h-11"
            required
          />
          <Button
            type="submit"
            disabled={disabled || !shortCode.trim() || !newUrl.trim()}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold py-3 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {disabled ? "Updating.." : "Update URL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UpdateUrlCard;
