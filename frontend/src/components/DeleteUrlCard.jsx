import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const DeleteUrlCard = ({ onSubmit, disabled }) => {
  const [shortCode, setShortCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (shortCode.trim()) {
      await onSubmit(shortCode.trim());
      setShortCode("");
    }
  };

  return (
    <Card className="backdrop-blur-lg bg-white/70 border-black/10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/80 group">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl text-black">
          <div className="p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 group-hover:scale-110 transition-transform duration-300">
            <Trash2 className="h-6 w-6 text-white" />
          </div>
          Delete URL
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            placeholder="Delete the Original by ShortUrl"
            className="bg-white border-black/20 text-black placeholder:text-black focus:border-red-500 focus:ring-red-300 h-12 text-lg"
            required
          />
          <Button
            type="submit"
            disabled={disabled || !shortCode.trim()}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold py-3 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {disabled ? "Deleting...." : "Delete URL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DeleteUrlCard;
