import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    date: new Date().toISOString().slice(0, 10),
    answers: Array(8).fill(false),
  });

  const questions: string[] = [
    "朝ごはんはしっかりと食べたか？",
    "起きてから水分をとったか？",
    "練習前夜、夜更かしはしていないか？",
    "練習前夜、涼しい環境で眠ることができたか？",
    "下痢・頭痛、その他体調は万全か？",
    "体温は平熱か？",
    "帽子は持ったか？",
    "前の週に練習・大会に参加しているか？",
  ];

  const handleInputChange = (index: number, value: boolean) => {
    const updatedAnswers = [...formData.answers];
    updatedAnswers[index] = value;
    setFormData({ ...formData, answers: updatedAnswers });
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("チェックシートが送信されました！");
  };

  return (
    <div
      style={{
        padding: "16px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        熱中症チェックシート
      </h2>
      <input
        type="text"
        placeholder="名前を入力"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          <label>{question}</label>
          <input
            type="checkbox"
            checked={formData.answers[index]}
            onChange={(e) => handleInputChange(index, e.target.checked)}
            style={{ marginLeft: "8px" }}
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        送信
      </button>
    </div>
  );
}
