import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const CreatedUrlsTable = ({ urls, apiBaseUrl }) => {
  return (
    <Card className="backdrop-blur-lg bg-white border border-gray-300 shadow-2xl animate-fade-in">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-black flex items-center justify-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
          Your Short URL
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-black uppercase tracking-wider">
                    Short URL
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-black uppercase tracking-wider">
                    Original URL
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {urls.map((url) => (
                  <tr
                    key={url.shortcode}
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <a
                        href={`${apiBaseUrl}/${url.shortcode}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:underline transition-colors duration-200 font-mono text-sm bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {url.shortcode}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-black break-all">
                        {url.originalurl}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatedUrlsTable;
