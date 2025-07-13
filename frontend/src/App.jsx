import React, { useState } from "react";
import axios from "axios";

import CreateUrlForm from "@/components/CreateUrlForm";
import RetrieveUrlCard from "@/components/RetrivelUrlCard";
import UpdateUrlCard from "@/components/UpdateUrlCard";
import DeleteUrlCard from "@/components/DeleteUrlCard";
import StatsCard from "@/components/StatsCrad";
import CreatedUrlTable from "@/components/CreateUrlTable";
import StatsDisplay from "@/components/StatsDisplay";

const API_BASE_URL = "http://localhost:3000/shorten";

const App = () => {
  const [createdUrls, setCreatedUrls] = useState([]);
  const [stats, setStats] = useState(null);
  const [retrievedUrl, setRetrievedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiCall, onSuccess) => {
    setLoading(true);
    try {
      const response = await apiCall();
      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (url) => {
    await handleApiCall(
      () =>
        axios.post(
          API_BASE_URL,
          { url },
          { headers: { "Content-Type": "application/json" } }
        ),
      (data) => setCreatedUrls([data])
    );
  };

  const handleUpdate = async (shortCode, newUrl) => {
    await handleApiCall(() =>
      axios.put(
        `${API_BASE_URL}/${shortCode}`,
        { url: newUrl },
        { headers: { "Content-Type": "application/json" } }
      )
    );
  };

  const handleDelete = async (shortCode) => {
    await handleApiCall(() =>
      axios.delete(`${API_BASE_URL}/${shortCode}`, {
        headers: { "Content-Type": "application/json" },
      })
    );
  };

  const handleRetrieve = async (input) => {
    const shortCode = input.split("/").pop() || input;
    await handleApiCall(
      () =>
        axios.get(`${API_BASE_URL}/${shortCode}`, {
          headers: { "Content-Type": "application/json" },
        }),
      (data) => setRetrievedUrl(data)
    );
  };

  const handleGetStats = async (shortCode) => {
    await handleApiCall(
      () =>
        axios.get(`${API_BASE_URL}/${shortCode}/stats`, {
          headers: { "Content-Type": "application/json" },
        }),
      (data) => setStats(data)
    );
  };

  return (
    <div className="min-h-screen bg-grey-200 flex flex-col items-center justify-center gap-10 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-black">
        🔗 URL Shortener
      </h1>
      <CreateUrlForm onSubmit={handleCreate} disabled={loading} />
      {createdUrls.length > 0 && (
        <CreatedUrlTable urls={createdUrls} apiBaseUrl={API_BASE_URL} />
      )}
      <RetrieveUrlCard
        onSubmit={handleRetrieve}
        disabled={loading}
        retrievedUrl={retrievedUrl}
        onClearResult={() => setRetrievedUrl(null)}
      />
      <UpdateUrlCard onSubmit={handleUpdate} disabled={loading} />
      <DeleteUrlCard onSubmit={handleDelete} disabled={loading} />
      <StatsCard onSubmit={handleGetStats} disabled={loading} />
      {stats && <StatsDisplay stats={stats} onClose={() => setStats(null)} />}
    </div>
  );
};

export default App;
