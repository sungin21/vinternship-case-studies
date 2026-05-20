import React from "react";
import ArticleCard from "./components/ArticleCard";
import { useApproval } from "./hooks/useApproval";

function App() {
  const { approved, approve } = useApproval();

  return (
    <div style={{ padding: "30px" }}>
      <h1>NewsFleet Dashboard</h1>

      <ArticleCard
        title="Breaking News"
        author="Jane Doe"
        onApprove={approve}
      />

      {approved && (
        <h2>Approved!</h2>
      )}
    </div>
  );
}

export default App;