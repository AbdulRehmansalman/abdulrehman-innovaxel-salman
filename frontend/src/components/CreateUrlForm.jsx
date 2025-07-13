import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, Sparkles } from "lucide-react";

// the component is used for making a card For Entering a long url
const CreateUrlForm = ({ onSubmit, disabled }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url.trim()) {
      await onSubmit(url.trim());
      setUrl("");
    }
  };

  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 group">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-3 text-2xl text-black">
          <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
            <Link className="h-6 w-6" />
          </div>
          Create Short URL
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your URL here"
              className="bg-white/10 border-white/30 text-black placeholder:text-black-300 focus:border-cyan-400 focus:ring-cyan-400/50 h-12 text-lg"
              required
            />
            <Sparkles className="absolute right-3 top-3 h-6 w-6 text-cyan-400 opacity-50" />
          </div>
          <Button
            type="submit"
            disabled={disabled || !url.trim()}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-semibold py-3 h-12 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {disabled ? "Creating..." : "Create Short URL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateUrlForm;
