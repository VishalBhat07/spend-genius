import React from "react";
import "./Features.css";

const Features = () => {
  const featureList = [
    {
      title: "Expense Tracking",
      description:
        "Easily track your daily expenses and categorize them for better understanding.",
      icon: "💰", // Replace with an actual icon if needed
    },
    {
      title: "Budgeting Tools",
      description:
        "Set monthly budgets and receive alerts when you're close to exceeding them.",
      icon: "📊", // Replace with an actual icon if needed
    },
    {
      title: "Spending Analysis",
      description:
        "Analyze your spending habits over time and identify areas for improvement.",
      icon: "🔍", // Replace with an actual icon if needed
    },
    {
      title: "Financial Predictions",
      description:
        "Get predictions based on your spending habits to help plan for future expenses.",
      icon: "🔮", // Replace with an actual icon if needed
    },
    {
      title: "Fraud Detection",
      description:
        "Receive alerts for any suspicious transactions in your accounts.",
      icon: "⚠️", // Replace with an actual icon if needed
    },
    {
      title: "Secure Authentication",
      description:
        "Your data is safe with us, protected by secure authentication methods.",
      icon: "🔐", // Replace with an actual icon if needed
    },
    {
      title: "Notifications",
      description:
        "Get notified for important updates and reminders about your finances.",
      icon: "🔔", // Notification icon
    },
    {
      title: "Data Insights",
      description:
        "Gain insights from your financial data to make informed decisions.",
      icon: "📈", // Chart icon
    },
  ];

  return (
    <section className="features">
      <h2 className="features-title">Features of SpendGenius</h2>
      <div className="features-grid">
        {featureList.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
