import React from "react";

const Medical_devices = () => {
  return (
    <main style={{ padding: "100px 6%", minHeight: "100vh" }}>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0f172a" }}>
          Service Title
        </h1>

        <p style={{ marginTop: "12px", fontSize: "1.05rem", color: "#475569" }}>
          Brief description of the service goes here. This section establishes
          context and value for the user.
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "16px" }}>
          Overview
        </h2>

        <p style={{ lineHeight: "1.7", color: "#334155", maxWidth: "800px" }}>
          This area can be used to describe the service in more detail. Add
          information about capabilities, scope, benefits, and how it aligns
          with customer needs and organizational objectives.
        </p>
      </section>
    </main>
  );
};

export default Medical_devices;
