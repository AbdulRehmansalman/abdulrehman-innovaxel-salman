import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, X } from "lucide-react";

const RetrievalUrlCard = ({
  onSubmit,
  disabled,
  retrievedUrl,
  onClearResult,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await onSubmit(input.trim());
      setInput("");
    }
  };

  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 group">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl text-black">
          <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 group-hover:scale-110 transition-transform duration-300">
            <Search className="h-6 w-6" />
          </div>
          Retrieve Original URL
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Short Code here"
            className="bg-white/10 border-white/30 text-black placeholder:text-gray-600 focus:border-green-400 focus:ring-green-400/50 h-12 text-lg"
          />
          <Button
            type="submit"
            disabled={disabled || !input.trim()}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-semibold py-3 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {disabled ? "Retrieving.." : "Retrieve URL"}
          </Button>
        </form>

        {retrievedUrl && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-fade-in">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-black-400">
                Original URL Found:
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearResult}
                className="text-gray-400 hover:text-black h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
              <ExternalLink className="h-4 w-4 text-black-400 flex-shrink-0" />
              <a
                href={retrievedUrl.originalurl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black-400 transition-colors duration-200 break-all underline decoration-black-400/50 hover:decoration-black-400"
              >
                {retrievedUrl.originalurl}
              </a>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RetrievalUrlCard;
